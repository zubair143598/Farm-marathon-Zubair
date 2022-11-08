import React from "react";
import { useLocation } from "react-router-dom";

const Select = () => {
  const location = useLocation();
  const value = location.state;

  return (
    <div className="Select-section">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12">
            <img src={value.img} className="" style={{ width: "10%" }} alt="" />
            <h1 className="mt-3">{value.text3}</h1>
            <p className="text-muted fw-bolder">
              Deposit {value.text3} Tokens and Earn {value.text4}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card h-100 text-center">
              <div className="card-body">

                <div className="row">
                  <div className="col-lg-6">
                    <img src="./Assists/logo-cr.png" className="w-50" alt="" />
                  </div>
                  <div className="col-lg-6 mt-3 justify-content-center align-items-center d-flex">
                    <h2 className="fw-bold" style={{color:"#0054cf"}}>{value.text4}</h2>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-6">
                    <p className="fw-bolder fs-5 text-muted">Earn</p>
                    <p className="fw-bolder fs-5 text-muted">0.00</p>
                  </div>
                  <div className="col-lg-6">
                  <button className="fs-5 rounded-2">Harvest</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100 text-center">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <img src="./Assists/GMT94.png" className="w-50" alt="" />
                  </div>
                  <div className="col-lg-6 mt-3 justify-content-center align-items-center d-flex">
                    <h2 className="fw-bold" style={{color:"#0054cf"}}>{value.text3}</h2>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-6">
                    <p className="fw-bolder fs-5 text-muted">Staked</p>
                    <p className="fw-bolder fs-5 text-muted">0.00</p>
                  </div>
                  <div className="col-lg-6">
                  <button className="fs-5 rounded-2">Harvest</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
