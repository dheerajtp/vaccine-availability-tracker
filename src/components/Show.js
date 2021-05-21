import React from "react";

const Show = ({
  name,
  address,
  state,
  district,
  fee,
  dose1,
  dose2,
  age,
  vaccine,
}) => {
  return (
    <div className="p-3">
      <div className="card mx-auto shadow p-3 mb-5 rounded">
        <div className="card-body">
          <h4 class="card-title text-primary">{name}</h4>
          <h5 class="card-subtitle mb-2 text-primary">{address}</h5>
          <br></br>
          <div className="row">
            <div className="col-6">
              <h5 class="card-subtitle mb-2 text-primary">State : {state}</h5>
            </div>
            <div className="col-6">
              <h5 class="card-subtitle mb-2 text-primary">
                District : {district}
              </h5>
            </div>
          </div>
          <p class="card-text text-primary">Fee Type : {fee}</p>
          <div className="row">
            <div className="col-6">
              <h5 class="card-subtitle mb-2 text-primary">
                Available Capacity Dose 1 : {dose1}
              </h5>
            </div>
            <div className="col-6">
              <h5 class="card-subtitle mb-2 text-primary">
                Available Capacity Dose 2 : {dose2}
              </h5>
            </div>
          </div>
          <p class="card-text text-primary">
            Age Limit : {age}
            <span className="text-primary">+</span>
          </p>
          <h5 class="card-text text-primary">Vaccine : {vaccine}</h5>
        </div>
      </div>
    </div>
  );
};

export default Show;
