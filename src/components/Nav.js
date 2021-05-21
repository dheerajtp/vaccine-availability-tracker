import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="row">
      <div className="col-12 p-3 h3">
        <b>
          <header className="text-primary">Vaccine Availability Tracker</header>
        </b>
        <div className="row">
          <div className="col-6">
            <Link to="/" className="text-primary h6 app-a my-auto">
              Search Using PinCode
            </Link>
          </div>
          <div className="col-6">
            <Link to="/search-by-district" className="text-primary h6 app-a">
              Search Using District
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
