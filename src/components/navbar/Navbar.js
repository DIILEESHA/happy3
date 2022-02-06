import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <div className="nav_titlebrand">
        DILE<span style={{color:"crimson"}}>ESHA</span>♡
      </div>
      <ul className={active}>
        <li className="nav__item">
          <Link to = "/" className="nav__link">
            HOME   +
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            ABOUT  + 
          </Link>
        </li>
        
        <li className="nav__item">
          <Link to="/say-hi" className="nav__link">
            CONTACT  +
          </Link>
       
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;