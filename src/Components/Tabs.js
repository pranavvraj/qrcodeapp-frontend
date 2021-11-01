import React, { useState } from "react";
import Designaccordion from "./Designaccordion";
// import qr from "../assets/QR_code_for_mobile_English_Wikipedia.svg.png";
import Qroptions from "./Qroptions";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const [link, setLink] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [token, setToken] = useState("");
  const [call, setCall] = useState("");
  const [sms, setSms] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [wifi, setWifi] = useState("");
  const [vcard, setVcard] = useState("");
  const [paypal, setPaypal] = useState("");
  const [bitcoin, setBitcoin] = useState("");

  // function getLink() {
  //   console.log(link);
  // }
  // function getEmail() {
  //   console.log(email);
  // }
  // function getText() {
  //   console.log(text);
  // }
  // function getToken() {
  //   console.log(token);
  // }
  // function getCall() {
  //   console.log(call);
  // }
  // function getSms() {
  //   console.log(sms);
  // }
  // function getWhatsapp() {
  //   console.log(whatsapp);
  // }
  // function getWifi() {
  //   console.log(wifi);
  // }
  // function getVcard() {
  //   console.log(vcard);
  // }
  // function getPaypal() {
  //   console.log(paypal);
  // }
  // function getBitcoin() {
  //   console.log(bitcoin);
  // }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="qrcontainer">
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <h3>Link</h3>
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <h3>Email</h3>
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <h3>Text</h3>
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            <h3>Token</h3>
          </button>
          <button
            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}
          >
            <h3>Call</h3>
          </button>
          <button
            className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(6)}
          >
            <h3>SMS</h3>
          </button>
          <button
            className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(7)}
          >
            <h3>Whatsapp</h3>
          </button>
          <button
            className={toggleState === 8 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(8)}
          >
            <h3>WIFI</h3>
          </button>
          <button
            className={toggleState === 9 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(9)}
          >
            <h3>V Card</h3>
          </button>
          <button
            className={toggleState === 10 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(10)}
          >
            <h3>Paypal</h3>
          </button>
          <button
            className={toggleState === 11 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(11)}
          >
            <h3>Bitcoin</h3>
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h2>Enter link</h2>
            {/* <div className="qrcontainer"> */}
            <input
              onChange={(e) => {
                setLink(e.target.value);
              }}
              value={link}
              type="text"
              placeholder="Your link here"
            />

            {/* <button>Generate QR Code</button> */}
            {/* </div> */}
            <Designaccordion />
            {/* <button onClick={getLink}>Generate QR Code</button> */}
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2>Enter email</h2>
            {/* <div className="qrcontainer"> */}
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="text"
              placeholder="Your email here"
            />
            {/* </div> */}
            <Designaccordion />
            {/* <button onClick={getEmail}>Generate QR Code</button> */}
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2>Enter text</h2>
            {/* <div className="qrcontainer"> */}
            <input
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
              type="text"
              placeholder="Your text here"
            />
            {/* </div> */}
            <Designaccordion />
            {/* <button onClick={getText}>Generate QR Code</button> */}
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <h2>Enter token</h2>
            {/* <div className="qrcontainer"> */}
            <input
              onChange={(e) => {
                setToken(e.target.value);
              }}
              value={token}
              type="text"
              placeholder="Your token here"
            />
            {/* </div> */}
            <Designaccordion />
            {/* <button onClick={getToken}>Generate QR Code</button> */}
          </div>
          <div
            className={
              toggleState === 5 ? "content  active-content" : "content"
            }
          >
            <h2>Enter call</h2>
            {/* <div className="qrcontainer"> */}
            <input
              onChange={(e) => {
                setCall(e.target.value);
              }}
              value={call}
              type="text"
              placeholder="Your call here"
            />
            {/* </div> */}
            <Designaccordion />
            {/* <button onClick={getCall}>Generate QR Code</button> */}
          </div>
          <div
            className={
              toggleState === 6 ? "content  active-content" : "content"
            }
          >
            <h2>Enter SMS</h2>
            {/* <div className="qrcontainer"> */}
            <input
              onChange={(e) => {
                setSms(e.target.value);
              }}
              value={sms}
              type="text"
              placeholder="Your sms here"
            />
            {/* </div> */}
            <Designaccordion />
            {/* <button onClick={getSms}>Generate QR Code</button> */}
          </div>
          <div
            className={
              toggleState === 7 ? "content  active-content" : "content"
            }
          >
            <h2>Enter Whatsapp</h2>
            {/* <div className="qrcontainer"> */}
            <input
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
              value={whatsapp}
              type="text"
              placeholder="Your whatsapp here"
            />
            {/* </div> */}
            <Designaccordion />
            {/* <button onClick={getWhatsapp}>Generate QR Code</button> */}
          </div>
          <div
            className={
              toggleState === 8 ? "content  active-content" : "content"
            }
          >
            <h2>Enter Wifi</h2>
            {/* <div className="qrcontainer"> */}
            <input
              onChange={(e) => {
                setWifi(e.target.value);
              }}
              value={wifi}
              type="text"
              placeholder="Your wifi here"
            />
            {/* </div> */}
            <Designaccordion />
            {/* <button onClick={getWifi}>Generate QR Code</button> */}
          </div>
          <div
            className={
              toggleState === 9 ? "content  active-content" : "content"
            }
          >
            <h2>Enter V card</h2>
            {/* <div className="qrcontainer"> */}
            <input
              onChange={(e) => {
                setVcard(e.target.value);
              }}
              value={vcard}
              type="text"
              placeholder="Your vcard here"
            />
            {/* </div> */}
            <Designaccordion />
            {/* <button onClick={getVcard}>Generate QR Code</button> */}
          </div>
          <div
            className={
              toggleState === 10 ? "content  active-content" : "content"
            }
          >
            <h2>Enter Paypal</h2>
            {/* <div className="qrcontainer"> */}
            <input
              onChange={(e) => {
                setPaypal(e.target.value);
              }}
              value={paypal}
              type="text"
              placeholder="Your paypal here"
            />
            {/* </div> */}
            <Designaccordion />
            {/* <button onClick={getPaypal}>Generate QR Code</button> */}
          </div>
          <div
            className={
              toggleState === 11 ? "content  active-content" : "content"
            }
          >
            <h2>Enter Bitcoin</h2>
            {/* <div className="qrcontainer"> */}
            <input
              onChange={(e) => {
                setBitcoin(e.target.value);
              }}
              value={bitcoin}
              type="text"
              placeholder="Your bitcoin address here"
            />
            {/* </div> */}
            <Designaccordion />
            {/* <button onClick={getBitcoin}>Generate QR Code</button> */}
          </div>
        </div>
      </div>
      <Qroptions />
    </div>
  );
}

export default Tabs;
