import * as React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Designaccordion() {
  // const [bgcolor, setBgcolor] = useState("");
  // const [dotscolor, setDotscolor] = useState("");
  // const [mbcolor, setMbcolor] = useState("");
  // const [mccolor, setMccolor] = useState("");

  const [shapedesign, setShapedesign] = useState("");
  const [framedesign, setFramedesign] = useState("");
  // const [framephrase, setFramephrase] = useState("SCAN ME");
  // const [framecolor, setFramecolor] = useState("#000000");
  // const [font, setFont] = useState("");

  const shapes = new Array(7).fill(0);
  const frames = new Array(9).fill(0);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>SHAPE & COLOR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="shapes">
              {shapes.map((shape, index) => {
                return (
                  <div
                    onClick={() => {
                      setShapedesign(`shape${index + 1}`);
                      console.log(index + 1);
                    }}
                    id={`shape${index + 1}`}
                  ></div>
                );
              })}
            </div>
            {/* <h2>Color</h2>
            <p>Background color</p>
            <input
              onChange={(e) => {
                setBgcolor(e.target.value);
                console.log(e.target.value);
              }}
              value={bgcolor}
              type="text"
              placeholder="#FFFFFF"
            />

            <p>Dots Color</p>
            <input
              onChange={(e) => {
                setDotscolor(e.target.value);
                console.log(e.target.value);
              }}
              value={dotscolor}
              type="text"
              placeholder="#FFFFFF"
            />
            <p>Marker Border Color</p>
            <input
              onChange={(e) => {
                setMbcolor(e.target.value);
                console.log(e.target.value);
              }}
              value={mbcolor}
              type="text"
              placeholder="#FFFFFF"
            />
            <p>Marker Center Color</p>
            <input
              type="text"
              onChange={(e) => {
                setMccolor(e.target.value);
                console.log(e.target.value);
              }}
              value={mccolor}
              placeholder="#FFFFFF"
            />

            <h2>Shape & Form</h2>
            <p>Dots</p>
            <p>Marker Border</p>
            <p>Marker Center</p> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>FRAME</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="frames">
              {frames.map((frame, index) => {
                return (
                  <div
                    onClick={() => {
                      setFramedesign(`frame${index + 1}`);
                      console.log(index + 1);
                    }}
                    id={`frame${index + 1}`}
                  ></div>
                );
              })}
            </div>
            {/* <p>Frame Phrase</p>
            <input
              onChange={(e) => {
                setFramephrase(e.target.value);
                console.log(e.target.value);
              }}
              value={framephrase}
              type="text"
              placeholder="SCAN ME"
            />
            <p>Frame Color</p>
            <input
              onChange={(e) => {
                setFramecolor(e.target.value);
                console.log(e.target.value);
              }}
              value={framecolor}
              type="text"
              placeholder="#000000"
            />
            <select
              value={font}
              onChange={(e) => {
                setFont(e.target.value);
              }}
              name="phrasefont"
              id=""
            >
              <option value="" disabled>
                Phrase Font
              </option>
              <option value="sansserif">Sans-Serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
            </select> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>LOGO</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Upload Logo</p>
            <input type="file" />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
