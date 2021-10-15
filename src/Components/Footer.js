import React from "react";
import logo from "../assets/qrlogotrans.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-upper">
        <h1>THANK YOU !</h1>
        <h2>Donate and Support us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi
          debitis ex perferendis quam esse!
        </p>
        <h2>Paypal</h2>
        <button>Donate</button>
      </div>
      <div className="foot-lower">
        <div className="foot-btns">
          <button>English</button>
          <button>Deutsch</button>
          <button>Espanol</button>
          <button>Francais</button>
          <button>Italian</button>
          <button>Portuguese</button>
          <button>Polski</button>
          <button>Indonesian</button>
          <button>Arabic</button>
        </div>
        <img classname="foot-logo" src={logo} alt="" />
        <div className="socials">
          <a href="www.facebook.com">
            <FacebookIcon />
          </a>
          <a href="www.twitter.com">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
