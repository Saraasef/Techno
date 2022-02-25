import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pl-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h4>
                    {props.name}
                    <strong className="brand-name">
                      " گروه مشاوران تکنو هیرمند "
                    </strong>
                  </h4>
                  <h5 className="my-3">{props.info}</h5>
                  <div className="my-3">
                    <NavLink to={props.visit} className="btn btn-primary">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-1 header-img pt-5 pl-5 pr-5">
                  <img src={props.img} className="img-fluid animated" alt="common"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
