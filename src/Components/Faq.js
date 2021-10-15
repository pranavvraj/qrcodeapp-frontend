import React from "react";
import Faqaccordion from "./Faqaccordion";

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq">
        <h1>Have more questions ?</h1>
        <h3>Basics</h3>
      </div>
      <Faqaccordion />
    </div>
  );
};

export default Faq;
