import React, { useState } from "react";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const [link, setLink] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [token, setToken] = useState("");

  function getLink() {
    console.log(link);
  }
  function getEmail() {
    console.log(email);
  }
  function getText() {
    console.log(text);
  }
  function getToken() {
    console.log(token);
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
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
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Enter link</h2>

          <input
            onChange={(e) => {
              setLink(e.target.value);
            }}
            value={link}
            type="text"
            placeholder="Your link here"
          />
          <button onClick={getLink}>Generate QR Code</button>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Enter email</h2>

          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="text"
            placeholder="Your email here"
          />
          <button onClick={getEmail}>Generate QR Code</button>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Enter text</h2>

          <input
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            type="text"
            placeholder="Your text here"
          />
          <button onClick={getText}>Generate QR Code</button>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>Enter token</h2>

          <input
            onChange={(e) => {
              setToken(e.target.value);
            }}
            value={token}
            type="text"
            placeholder="Your token here"
          />
          <button onClick={getToken}>Generate QR Code</button>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
