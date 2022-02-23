import React from "react";
import LogoFondoClaro from "../assets/LogoFondoClaro.svg";
import Dashboard from "../Dashboard";
import "./Welcome.css";
import { Row, Col, Divider } from "antd";

const Welcome = () => {
  return (
    <>
      <Dashboard>
        <div className="background">
          <img src={LogoFondoClaro} alt="" className="banner-welcome" />
          <div className="buttons">
            <button className="custom-btn btn-login">LOGIN</button>
            <button className="custom-btn btn-registro">SIGN UP</button>
          </div>
        </div>
      </Dashboard>
    </>
  );
};

export default Welcome;
