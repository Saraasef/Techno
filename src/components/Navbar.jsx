import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "../components/Navbar.css";
import CottageIcon from "@mui/icons-material/Cottage";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import InfoIcon from "@mui/icons-material/Info";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const Navbar = () => {
  return (
    <>
      <div className="containernav">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a href="/" alt="home">
                <img className="logo" src={logo} alt="..." />
              </a>
              <div className="navcontent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      <CottageIcon />
                      خانه
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/service">
                      <ManageAccountsIcon />
                      خدمات
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      <InfoIcon />
                      درباره ما
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      <PhoneInTalkIcon />
                      تماس با ما
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="form-subscribe">
                <form>
                  <button id="enveloper" title="button">
                    <FindReplaceIcon />
                  </button>
                  <input
                  className="inputsearch"
                    name="search"
                    type="search"
                    placeholder="جستجو ..."
                    data-validate={{ required: true, "validate-email": true }}
                  />
                  <button className="membership" title="عضویت" type="submit">
                    <ArrowCircleLeftIcon />
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
