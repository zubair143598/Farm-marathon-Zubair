import React from "react";
import { AiOutlineMedium } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

import { BsTelegram } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillRedditCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="Footer-section">
      <div className="container">
        <div className="row">
          <div className="col-5 mb-5">
            <h1 className="mt-5">
              YOUR STEPS COUNT
              <br />
              WITH Marathon!
            </h1>
            <img src="./Assists/mobileapp.svg" className="w-25 mt-3" alt="" />
            <img
              src="./Assists/mobileapp1.svg"
              className="w-25 ms-3 mt-3 "
              alt=""
            />
          </div>
          <div className="col-2"></div>
          <div className="col-5 text-end">
            <h2 className="mt-5">Join Our Comunity</h2>
            <p>
              <AiOutlineMedium className="ms-3 mt-5 icon" size={25} />
              <BsTwitter className="ms-3 mt-5 icon" size={25} />
              <BsTelegram className="ms-3 mt-5 icon" size={25} />
              <BsDiscord className="ms-3 mt-5 icon" size={25} />
              <AiOutlineInstagram className="ms-3 mt-5 icon" size={25} />
              <AiFillGithub className="ms-3 mt-5 icon" size={25} />
              <AiFillRedditCircle className="ms-3 mt-5 icon" size={25} />
              <BsFacebook className="ms-3 mt-5 icon" size={25} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
