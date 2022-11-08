import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    img: "./Assists/GMT94.png",
    title: "APY:600%",
    text1: "Deposit",
    text2: "Earn",
    text3: "GMT",
    text4: "MRACE",
  },
  {
    img: "./Assists/GMT94.png",
    title: "APY:600%",
    text1: "Deposit",
    text2: "Earn",
    text3: "GMT",
    text4: "MRACE",
  },
  {
    img: "./Assists/GMT94.png",
    title: "APY:600%",
    text1: "Deposit",
    text2: "Earn",
    text3: "GMT",
    text4: "MRACE",
  },
  {
    img: "./Assists/GMT94.png",
    title: "APY:600%",
    text1: "Deposit",
    text2: "Earn",
    text3: "GMT",
    text4: "MRACE",
  },
  {
    img: "./Assists/GMT94.png",
    title: "APY:600%",
    text1: "Deposit",
    text2: "Earn",
    text3: "GMT",
    text4: "MRACE",
  },
  {
    img: "./Assists/GMT94.png",
    title: "APY:600%",
    text1: "Deposit",
    text2: "Earn",
    text3: "GMT",
    text4: "MRACE",
  },
  {
    img: "./Assists/GMT94.png",
    title: "APY:600%",
    text1: "Deposit",
    text2: "Earn",
    text3: "GMT",
    text4: "MRACE",
  },
  {
    img: "./Assists/GMT94.png",
    title: "APY:600%",
    text1: "Deposit",
    text2: "Earn",
    text3: "GMT",
    text4: "MRACE",
  },
];

const StakePool = () => {
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const component = (v) => {
    navigate("/select", { state: v });
  };

  return (
    <div className="StakePool-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-5 text-center">
            <h1>Choose Your Stake Pool</h1>
          </div>
        </div>
        <div className="row">
          {data.map((v, i) => {
            return (
              <>
                <div className="col-lg-3">
                  <div className="card text-center">
                    <div className="card-body">
                      <img src={v.img} className="w-50" alt="" />
                      <h3 className="mt-3" style={{ color: "#0054cf" }}>
                        {" "}
                        {v.title}
                      </h3>
                      <div className="row">
                        <div className="col-6">
                          <p className="fw-bolder fs-5  text-muted">Earn</p>
                          <p className="fw-bolder fs-5  text-muted">DEPOSIT</p>
                        </div>
                        <div className="col-6">
                          <p className="fw-bolder fs-5  text-dark">GMT</p>
                          <p className="fw-bolder fs-5  text-dark">MRACE</p>
                        </div>
                      </div>
                      <hr />
                      <div className="col-lg-12">
                        <button
                          onClick={() => {
                            component(v);
                          }}
                          className="fs-5 rounded-2"
                        >
                          Seclect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StakePool;
