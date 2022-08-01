import React from "react";
import "./header.css";

import { FaLinkedinIn, FaGithub, FaMailchimp } from "react-icons/fa";
import{GrMail} from "react-icons/gr"
import{FiGithub} from "react-icons/fi"

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section
      className="
  homepage"
    >
      <div className="over">
        <img
          className="dp"
          src="https://avatars.githubusercontent.com/u/89340276?v=4"
          alt=""
        />
        <h1 className="headernamec">Dileesha Lakshan</h1>
        <p className="fdo"> Student | Web Developer</p>
        <ul className="hul">
          <li className="hli">
            <a
              className="ali"
              href="https://www.linkedin.com/in/dileesha-lakshan/"
              target="_blank"
              rel="noopenner noreferrer"
            >
              <FaLinkedinIn/>
            </a>
          </li>
          <li className="hli">
            <a
              className="ali"
              href="https://github.com/DIILEESHA "
              target="_blank"
              rel="noopenner noreferrer"
            >
              <FiGithub />
            </a>
          </li>
          <li className="hli">
            <a
              className="ali"
              href="mailto:dileeshanawarathna18@gmail.com"
              target="_blank"
              rel="noopenner noreferrer"
            >
              <GrMail />
            </a>
          </li>
        </ul>
        <Link to="/say-hi">
          <button className="headerbtn">Connect With Me </button>
        </Link>
      </div>
    </section>
  );
};

export default Header;
