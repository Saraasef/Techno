import React from "react";
import "./Image.css";
import web from "../images/web.jpg";
import StoreIcon from '@mui/icons-material/Store';
import LanguageIcon from '@mui/icons-material/Language';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Engineers from '../images/Engineers.png'

const Image = () => {
  return (
    <div id="container">
      <div id="content">
        <div class="circle-2">
          <img className="Imageofimag" src={web} alt="imag"/>
          <div class="text-2">
            <h5>ما در تمامی مراحل همراه شما خواهیم بود</h5>
            <h3></h3>
            <h6>خدمات ما شامل:</h6>
            <h6><StoreIcon/> مشاوره در زمینه تهیه بیزینس مدل (Business Model)</h6>
            <h6><DesignServicesIcon/> مشاوره در زمینه طراحی اولیه و طرح کلی وب سایت (UI)</h6>
            <h6><LanguageIcon/> تهیه وب سایت</h6>
            <h6><LocalGroceryStoreIcon/> مشاوره در زمینه دیجیتال مارکتینگ</h6>
            <img src={Engineers} alt="Engineers" className="Engin"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Image;
