import React from "react";
import "./Home.css";
import Image from "./Image";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div className="homediv">
          <h5 className="homedivh">کسب و کار خود را با ما توسعه دهید</h5>
          <h6 className="homedivtext">
            ما همه اطلاعات ضروری را جمع آوری می کنیم و ایده ها و استراتژی ها را
            به روشی ساختاریافته برای شکل دادن به ماژول کسب و کار شما ترکیب می
            کنیم.
          </h6>
          <div>
            <Image />
          </div>
          <div></div>
         <a  href="/service"><NavLink className="mainimgbuton" to="/service">
            <span className="mainimgbuton">اطلاعات بیشتر</span>
          </NavLink>
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
