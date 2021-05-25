import React, { useState, useEffect } from "react";
import Show from "./Show";

const Form = () => {
  const [vaccinedetails, setVaccinceDetails] = useState([]);
  const [pin, setPin] = useState("");
  const [date, setDate] = useState();
  const [submittedPin, setSubmittedPin] = useState(673016);
  const [submittedDate, setSubmittedDate] = useState();
  let currentdate = new Date();
  currentdate = currentdate.toLocaleDateString();

  const getDetails = async () => {
    const response = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${submittedPin}&date=${currentdate}`
    );
    const data = await response.json();
    setVaccinceDetails(data.sessions);
  };

  useEffect(() => {
    getDetails();
  }, [submittedPin, submittedDate]);

  const pincodeHandler = (e) => {
    setPin(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setSubmittedPin(pin);
    setSubmittedDate(date);
  };
  return (
    <section className="pt-3 pb-3">
      <div className="row">
        <form className="mx-auto" onSubmit={getSearch}>
          <div className="row">
            <div className="col-12">
              <label
                htmlFor="inputingpincode"
                className="form-label text-primary"
              >
                Enter Pincode | പിൻകോഡ് ടൈപ്പ് ചെയ്യുക [ ഈ ദിവസത്തെ ലഭ്യമായ
                വാക്‌സിൻ ഡീറ്റെയിൽസ് മാത്രമേ ഇപ്പോൾ ലഭ്യം ആക്കാൻ
                സാധിക്കുന്നുള്ളൂ ]
              </label>
              <input
                type="number"
                value={pin}
                onChange={pincodeHandler}
                className="form-control text-primary"
                id="inputingpincode"
                title="Pincode in india has always 6 digits"
                pattern="[1234567890][0-9]{5}"
                required
              />
            </div>
            <div className="col">
              {/*
                <label htmlFor="inputingdate" className="form-label text-primary">
                Enter Date | തീയതി സെലക്ട് ചെയ്യുക
              </label>
              <input
                value={date}
                onChange={dateHandler}
                type="date"
                className="form-control text-primary"
                id="inputingdate"
                required
              />
                */}
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-12 mx-auto">
              <button className=" col-12 btn btn-primary">Search</button>
            </div>
          </div>
        </form>
      </div>
      <div className="p-5"></div>
      <div>
        {vaccinedetails.map((vaccine) => (
          <Show
            key={vaccine.center_id}
            name={vaccine.name}
            address={vaccine.address}
            state={vaccine.state_name}
            district={vaccine.district_name}
            fee={vaccine.fee_type}
            dose1={vaccine.available_capacity_dose1}
            dose2={vaccine.available_capacity_dose2}
            age={vaccine.min_age_limit}
            vaccine={vaccine.vaccine}
          />
        ))}
      </div>
    </section>
  );
};

export default Form;
