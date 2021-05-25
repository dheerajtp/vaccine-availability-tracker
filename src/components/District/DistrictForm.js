import { useState, useEffect } from "react";
import ShowDistrictDetails from "./ShowDistrictDetails";

const DistrictForm = () => {
  const [vaccinedetails, setVaccinceDetails] = useState([]);
  const [district, setDistrict] = useState(301);
  //const [date, setDate] = useState("");
  const [submittedDistrict, setSubmittedDistrict] = useState(301);
  let currentdate = new Date();
  currentdate = currentdate.toLocaleDateString();
  const [submittedDate, setSubmittedDate] = useState(currentdate);

  const getDetails = async () => {
    const response = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${submittedDistrict}&date=${currentdate}`
    );
    const data = await response.json();
    setVaccinceDetails(data.sessions);
  };

  useEffect(() => {
    getDetails();
  }, [submittedDistrict, submittedDate]);
  const getDistrict = (e) => {
    setDistrict(e.target.value);
  };
  {
    /*const dateHandler = (e) => {
    let nd = e.target.value;
    let m = nd.toLocaleDateString();
    console.log(m);
  }; */
  }
  const getSearch = (e) => {
    e.preventDefault();
    setSubmittedDistrict(district);
    // setSubmittedDate(date);
  };

  return (
    <section className="pt-3 pb-3">
      <div className="row">
        <form className="mx-auto" onSubmit={getSearch}>
          <div className="row">
            <div className="d-flex flex-row bd-highlight mb-3 gap-3">
              <div className="col-12">
                <label
                  htmlFor="inputingpincode"
                  className="form-label text-primary pb-2"
                >
                  Select District | ജില്ല തിരഞ്ഞെടുക്കുക [ ഈ ദിവസത്തെ ലഭ്യമായ
                  വാക്‌സിൻ ഡീറ്റെയിൽസ് മാത്രമേ ഇപ്പോൾ ലഭ്യം ആക്കാൻ
                  സാധിക്കുന്നുള്ളൂ ]
                </label>
                <select
                  className="form-select text-primary"
                  aria-label="Default select example"
                  required
                  value={district}
                  onChange={getDistrict}
                >
                  <option value="301" className="text-primary">
                    Alappuzha
                  </option>
                  <option value="307" className="text-primary">
                    Ernakulam
                  </option>
                  <option value="306" className="text-primary">
                    Idukki
                  </option>
                  <option value="297" className="text-primary">
                    Kannur
                  </option>
                  <option value="295" className="text-primary">
                    Kasargod
                  </option>
                  <option value="298" className="text-primary">
                    Kollam
                  </option>
                  <option value="304" className="text-primary">
                    Kottayam
                  </option>
                  <option value="305" className="text-primary">
                    Kozhikode
                  </option>
                  <option value="302" className="text-primary">
                    Malappuram
                  </option>
                  <option value="308" className="text-primary">
                    Palakkad
                  </option>
                  <option value="300" className="text-primary">
                    Pathanamthitta
                  </option>
                  <option value="296" className="text-primary">
                    Thiruvananthapuram
                  </option>
                  <option value="303" className="text-primary">
                    Thrissur
                  </option>
                  <option value="299" className="text-primary">
                    Wayanad
                  </option>
                </select>
              </div>
              {/*<div classNameName="col-6">
                <label
                  htmlFor="inputingdate"
                  className="form-label text-primary pb-2"
                >
                  Enter Date | തീയതി സെലക്ട് ചെയ്യുക
                </label>
                <input
                  value={date}
                  onChange={dateHandler}
                  type="date"
                  placeholder="dd-mm-yyyy"
                  className="form-control text-primary"
                  id="inputingdate"
                  required
                />
  </div>*/}
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
          <ShowDistrictDetails
            key={vaccine.center_id}
            name={vaccine.name}
            address={vaccine.address}
            state={vaccine.state_name}
            block={vaccine.block_name}
            pin={vaccine.pincode}
            district={vaccine.district_name}
            fee={vaccine.fee_type}
            dose1={vaccine.available_capacity_dose1}
            dose2={vaccine.available_capacity_dose2}
            age={vaccine.min_age_limit}
            vaccine={vaccine.vaccine}
            date={vaccine.date}
          />
        ))}
      </div>
    </section>
  );
};

export default DistrictForm;
