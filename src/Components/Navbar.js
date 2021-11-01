import React, { useState } from "react";
import "../App.css";
import logo from "../assets/qrlogotrans.png";
import Drawer from "./Drawer";

const Navbar = () => {
  const [value, setValue] = useState("");
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links">
          <a href="http://qrpro.codes">
            <img className="logoimg" src={logo} alt="" />
          </a>
        </div>
      </div>
      <div className="rightSide">
        <div className="buttons">
          <select
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            name="tools"
            id=""
          >
            <option value="" disabled>
              Tools
            </option>
            <option value="static">Static QR Codes</option>
            <option value="dynamic">Dynamic QR Codes</option>
          </select>
          <div className="navbtns">
            <button className="login">Log in</button>
            <button className="signup">Sign Up</button>
          </div>

          <div className="drawer">
            <Drawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
