import React from "react";
import Data from "./Data";
import "./project.css";

export default function Project() {
  return (
    <div>
      {Data.map((date) => {
        return (
          <>
            <div className="mainproject">
              <div className="subproject">
                <div className="imghandler">
                  <img src={date.img} className="projectimg" alt="" />
                </div>
              </div>
              <div className="sub1">
                <div className="all">
                  <span className="projecttitle">{date.title}</span>
                  <span className="githuburl">Technologies : {date.tec} </span>
                  <span className="githuburl">GITHUB URL : {date.github}</span>
                  <p className="projectdesc">{date.name}</p>
                </div>
              </div>
            </div>
            <hr style={{ display: "flex" }} />
          </>
        );
      })}
    </div>
  );
}
