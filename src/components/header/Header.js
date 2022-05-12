
import React from "react";
import './header.css'
import { FaGithub, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <section
      className="
  homepage"
    >
      <div className="over">
          <img className="dp" src="https://avatars.githubusercontent.com/u/89340276?v=4" alt="" />
        <h1>Dileesha Lakshan</h1>
        <p className="fdo"> Student | Web Developer</p>
        <ul className="hul">
          <li className="hli">
            <a className="ali" href="www.twitter.com" target="_blank" rel="noopenner noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li className="hli">
            <a className="ali" href="https://github.com/DIILEESHA " target="_blank" rel="noopenner noreferrer">
              <FaGithub />
            </a>
          </li>
        
        </ul>
      </div>
    </section>
  );
};

export default Header;
