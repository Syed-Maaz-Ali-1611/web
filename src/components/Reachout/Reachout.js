import React from "react";
import './Reachout.css'
import { InlineWidget } from "react-calendly";

const Reachout = () => {
  return (
    <div className="box-reachout">
      <InlineWidget url="https://calendly.com/weppso" />
    </div>
  );
};

export default Reachout;