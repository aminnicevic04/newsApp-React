import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Nav.css";
import Logo from "./logo.png";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Raleway:wght@900&display=swap');
</style>;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item1">
            <a href="#contact" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo-img" />
        </div>
        <div
          className={`menu-icon ${isOpen ? "active" : ""}`}
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
