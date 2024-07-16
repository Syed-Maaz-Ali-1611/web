import React from "react";
import './Reachout.css'
import { InlineWidget } from "react-calendly";

const Reachout = () => {
  return (
    <div className="box-reachout">
      <InlineWidget url="https://calendly.com/maazali1611" />
    </div>
  );
};

export default Reachout;