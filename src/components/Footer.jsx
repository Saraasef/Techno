import React from "react";
import logo from "../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center">
        
        <p><img className="logofooter" src={logo} alt="logo" /> تمامی حقوق این سایت متعلق به گروه مشاوران تکنو هیرمند است. </p>
      </footer>
    </>
  );
};
export default Footer;
