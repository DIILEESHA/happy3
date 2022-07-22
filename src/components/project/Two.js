import Project from "./Project";
import React from "react";
import get from "../../assests/get.png";
import "./project.css";

export default function Two() {
  return (
    <>
      <div className="mainproject">
        <div className="subproject">
          <img src={get} alt="" className="projectimg" />
        </div>
        <div className="sub1">
          <div className="all">
            <span className="projecttitle">FullStack Web Application</span>
            <div className="githuburl">Github URL : </div>
            <p className="projectdesc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nam
              voluptas, dolorum, minus et esse odio illo maxime impedit culpa,
              eligendi dolor labore. Dicta vitae tenetur, velit ipsam est rerum?
            </p>
          </div>
        </div>
      </div>
      <hr style={{ display: "flex" }} />
    </>
  );
}
