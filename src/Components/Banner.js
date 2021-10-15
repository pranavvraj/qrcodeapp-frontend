import React, { useState } from "react";
// import Tabs from "./Tabs";

const Banner = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="banner">
      <div className="bannav">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Link
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Email
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Text
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Tokens
        </button>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <h2>Enter link</h2>
          <hr />
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>Enter Email</h2>
          <hr />
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <h2>Enter Text</h2>
          <hr />
        </div>
        <div
          className={toggleState === 4 ? "content active-content" : "content"}
        >
          <h2>Enter Tokens</h2>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Banner;
