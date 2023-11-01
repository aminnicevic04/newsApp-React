import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item1">
            <a onClick={()=> navigate('/contact-us')} className="nav-link" style={{cursor:'pointer'}}>
              Contact Us
            </a>
          </li>
        </ul>
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo-img" onClick={()=>navigate('/')}  style={{cursor:'pointer'}}/>
        </div>
        <div
          className={`menu-icon ${isOpen ? "active" : ""}`}
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a className="nav-link" style={{cursor:'pointer'}}>
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
