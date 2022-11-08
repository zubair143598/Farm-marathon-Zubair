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
    img: "https://farms.marathoncash.com/assets/coin/BUSD94.png",
    title: "APY:3500%",
    text1: "Deposit",
    text2: "Earn",
    text3: "BUST",
    text4: "MRACE",
  },
  {
    img: "https://farms.marathoncash.com/assets/coin/USDT94.png",
    title: "APY:4000%",
    text1: "Deposit",
    text2: "Earn",
    text3: "USDT",
    text4: "MRACE",
  },
  {
    img: "https://farms.marathoncash.com/assets/coin/USDC94.png",
    title: "APY:64000%",
    text1: "Deposit",
    text2: "Earn",
    text3: "USDC",
    text4: "MRACE",
  },
  {
    img: "https://farms.marathoncash.com/assets/coin/WBNB94.png",
    title: "APY:3400%",
    text1: "Deposit",
    text2: "Earn",
    text3: "WBNB",
    text4: "MRACE",
  },
  {
    img: "https://farms.marathoncash.com/assets/coin/CAKE94.png",
    title: "APY:4500%",
    text1: "Deposit",
    text2: "Earn",
    text3: "Cake",
    text4: "MRACE",
  },
  {
    img: "https://farms.marathoncash.com/assets/coin/ETH94.png",
    title: "APY:7800%",
    text1: "Deposit",
    text2: "Earn",
    text3: "ETH",
    text4: "MRACE",
  },
  {
    img: "https://farms.marathoncash.com/assets/coin/1INCH94.png",
    title: "APY:3400%",
    text1: "Deposit",
    text2: "Earn",
    text3: "1INCH",
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
                          <p className="fw-bolder fs-5  text-muted">{v.text1}</p>
                          <p className="fw-bolder fs-5  text-muted">{v.text2}</p>
                        </div>
                        <div className="col-6">
                          <p className="fw-bolder fs-5  text-dark">{v.text3}</p>
                          <p className="fw-bolder fs-5  text-dark">{v.text4}</p>
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
