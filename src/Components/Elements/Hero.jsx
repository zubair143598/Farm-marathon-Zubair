import React from "react";

const Hero = () => {
  return (
    <div className="Hero-section">
      <div className="container mt-4">
        <div className="row text-center">
          <div className="col-lg-12">
            <h1 className="h1">FARM</h1>
            <p className="text-muted fw-bolder">
              Stake your tokens to earn more $MRACE.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card mt-4 h-100 text-center">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <img src="./Assists/logo-cr.png" className="w-50" alt="" />
                  </div>
                  <div className="col-lg-6 mt-3">
                    <h3>Your MRACE Balance</h3>
                    <h2>0.00</h2>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-6">
                    <p className="fw-bolder fs-5 text-muted">Pending Harvest</p>
                    <p className="fw-bolder fs-5 text-muted">
                      Daily Output of <span className="text-dark"> MRACE</span>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p className="fw-bolder fs-5  text-dark">
                      0.00 <span className="text-muted"> MRACE </span>
                    </p>
                    <p className="fw-bolder fs-5  text-dark">
                      0.00 <span className="text-muted"> MRACE </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100 mt-4 text-center">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="./Assists/GMT94.png" className="w-75" alt="" />
                  </div>
                  <div className="col-lg-4 mt-3">
                    <h2>APY:</h2>
                    <h2>0.00</h2>
                  </div>
                  <div className="col-lg-4 mt-3">
                    <img src="./Assists/logo-cr.png" className="w-75" alt="" />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-3">
                    <p className="fw-bolder fs-5  text-muted">Earn</p>
                  </div>
                  <div className="col-lg-3">
                    <p className="fw-bolder fs-5  text-dark">GMT</p>
                  </div>
                  <div className="col-lg-3">
                    <p className="fw-bolder fs-5  text-muted">DEPOSIT</p>
                  </div>
                  <div className="col-lg-3">
                    <p className="fw-bolder fs-5  text-dark">MRACE</p>
                  </div>

                  <div className="col-lg-12">
                    <button className="fs-5 rounded-2">Seclect</button>
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

export default Hero;
