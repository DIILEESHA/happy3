import React from "react";
import "./self.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Self = () => {
  return (
    <div className="self">
      <div className="selfcontains">
        <div className="selfbg"></div>
        <span style={{ color: "brown" }} className="adder">
          RunneR+
        </span>
        <span style={{ color: "darkblue" }} className="adder">
          self learneR+
        </span>
        <span style={{ color: "crimson" }} className="adder">
          codeR+
        </span>
        <span style={{ color: "teal" }} className="adder">
          photographeR+
        </span>
        <span style={{ color: "black" }} className="adder">
          Web DevelopeR+
        </span>
        <div className="icon-creator">
          <KeyboardDoubleArrowRightIcon /> <KeyboardDoubleArrowRightIcon />
          <KeyboardDoubleArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Self;
