import React, { useState } from "react";
import logo from "../assets/QR_code_for_mobile_English_Wikipedia.svg.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Qroptions = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="qroptions">
      <img src={logo} alt="" />
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked={false} />}
          label="Scan tracking"
        />
      </FormGroup>

      <button
        className="generatebtn"
        onClick={(e) => {
          setActive(true);
        }}
      >
        Generate QR Code
      </button>
      <div className="downloadbtns">
        <button className="downloadbtn" disabled={!active}>
          Download PNG
        </button>
        <button className="downloadbtn" disabled={!active}>
          Download SVG
        </button>
      </div>
    </div>
  );
};

export default Qroptions;
