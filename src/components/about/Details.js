import React from "react";
import "./details.css";
import CheckIcon from "@mui/icons-material/Check";

const Details = () => {
  return (
    <div className="main-details">
      <div className="details-right">
        <div className="details-title">ABOUT ME</div>
        <span className="sbtitle">Who Am I?</span>

        <p className="sbpar">
        👋 I'm Dileesha Lakshan . I am Software Engineering Undergraduate
          at Sri Lanka Institue Of Information Technology(SLIIT). I work with
          new technology & frameworks.I am web developer . I find new things day
          by day & learn them quicky. At the same time,I use them to carry out
          my web development work
        </p>
        <span className="details-str">My Strengths</span>
        <div className="strengths-list">
          <span className="ider">
            {" "}
            <CheckIcon
              style={{ margin: "10px 40px", display: "flex", color: "#444" }}
            />
            Leadership
          </span>
          <span className="ider">
            {" "}
            <CheckIcon
              style={{ margin: "10px 40px", display: "flex", color: "#444" }}
            />
            Quick Learning
          </span>
          <span className="ider">
            {" "}
            <CheckIcon
              style={{ margin: "10px 40px", display: "flex", color: "#444" }}
            />
            Activator
          </span>
        </div>
      </div>

      <div className="details-left">
        <div className="skills-details">
          <span className="sliller">Technical Skills</span>
          <li className="details-li">
            <h3>HTML</h3>
            <span className="bar">
              <span className="html"></span>
            </span>
          </li>
          <li className="details-li">
            <h3>CSS</h3>
            <span className="bar">
              <span className="css"></span>
            </span>
          </li>
          <li className="details-li">
            <h3>REACT</h3>
            <span className="bar">
              <span className="j"></span>
            </span>
          </li>
          <li className="details-li">
            <h3>NODE JS</h3>
            <span className="bar">
              <span className="node"></span>
            </span>
          </li>
          <li className="details-li">
            <h3>GITHUB</h3>
            <span className="bar">
              <span className="git"></span>
            </span>
          </li>
          <li className="details-li">
            <h3>MONGODB</h3>
            <span className="bar">
              <span className="mongo"></span>
            </span>
          </li>
          <li className="details-li">
            <h3>JAVASCRIPT</h3>
            <span className="bar">
              <span className="js"></span>
            </span>
          </li>
          {/* <li className="details-li">
            <h3>Node</h3>
            <span className="bar">
              <span className="react"></span>
            </span>
          </li> */}
        </div>
    
      </div>
      
    </div>

  );
};

export default Details;
