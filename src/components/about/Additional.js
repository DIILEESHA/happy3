import React from "react";
import "./details.css";
import CheckIcon from "@mui/icons-material/Check";

const Additional = () => {
  return (
    <div className="main-details">
      <div className="details-right">
        {/* <span className="sbtitle">Education </span>

        <p className="sbpar">
        <span></span>
        B.Sc Hons Information Technology<br/>
Specialization – Software Engineering
<br/><br/>
G.C.E. Advanced Level<br/>
Royal College Panadura<br/>
Biological Science<br/>
        </p> */}
        <span className="details-str">Education</span>
        <div className="strengths-list">
          <span className="ider">
            {" "}
            <CheckIcon
              style={{ margin: "40px 30px", display: "flex", color: "#444" }}
            />
            B.Sc Hons Information Technology
            <br />
            Specialization – Software Engineering
            <br />
            Sri Lanka Institute of Information Technology
          </span>
          <br />
          <span className="ider">
            {" "}
            <CheckIcon
              style={{ margin: "10px 30px", display: "flex", color: "#444" }}
            />
            G.C.E. Advanced Level
            <br />
            Welimada Central College
            <br />
            Engineering Technology
            <br />
          </span>
          <br />
          <br />
          <span className="details-str">My Services</span>
          <span className="ider">
            {" "}
            <CheckIcon
              style={{ margin: "10px 30px", display: "flex", color: "#444" }}
            />
            Web Application Development
          </span>
          <span className="ider">
            {" "}
            <CheckIcon
              style={{ margin: "10px 30px", display: "flex", color: "#444" }}
            />
            Web Designing
          </span>
          <span className="ider">
            {" "}
            <CheckIcon
              style={{ margin: "10px 30px", display: "flex", color: "#444" }}
            />
            Full Stack Development
          </span>
        </div>
      </div>

      <div className="details-left">
        <div className="skills-details">
          <span className="sliller">Tools & Technologies</span>
          <li className="details-li">
            <h3>GIT</h3>
            <span className="bar">
              <span className="html1"></span>
            </span>
          </li>
          <li className="details-li">
            <h3>VS CODE</h3>
            <span className="bar">
              <span className="css1"></span>
            </span>
          </li>
          <li className="details-li">
            <h3>POSTMAN</h3>
            <span className="bar">
              <span className="j1"></span>
            </span>
          </li>
          <li className="details-li">
            <h3>NPM</h3>
            <span className="bar">
              <span className="node1"></span>
            </span>
          </li>
          <li className="details-li">
            <h3>VISUAL STUDIO </h3>
            <span className="bar">
              <span className="git1"></span>
            </span>
          </li>
          <li className="details-li">
            <h3>ECLIPSE</h3>
            <span className="bar">
              <span className="mongo1"></span>
            </span>
          </li>
          {/* <li className="details-li">
            <h3>JAVASCRIPT</h3>
            <span className="bar">
              <span className="js1"></span>
            </span> */}
          {/* </li> */}
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

export default Additional;
