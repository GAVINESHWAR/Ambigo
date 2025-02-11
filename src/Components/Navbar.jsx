import React, { useState } from "react";
import "./Navbar.css";
import Logo from '../assets/LogoIcon.png';
import { NavLink } from "react-router-dom";
 
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Image */}
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "orangered",
            }}
          >
            <h1 style={{ fontFamily: "serif" }}>Ambigo</h1>
            <h4>ECNALUBMA Services</h4>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            activeClassName="active"
            onClick={() => (window.location.href = "/")}
          >
            <li>
              <a href="/#Home"> Home</a>
            </li>
          </NavLink>
          <NavLink
            to="/enterprise"
            activeClassName="active"
            onClick={() => (window.location.href = "/enterprise")}
          >
            <li>
              <a href="/#services">Services</a>
            </li>
          </NavLink>
          <NavLink
            to="/training"
            activeClassName="active"
            onClick={() => (window.location.href = "/training")}
          >
            <li>
              <a href="/">Training</a>
            </li>
          </NavLink>
          <NavLink
            to="/training"
            activeClassName="active"
            onClick={() => (window.location.href = "/training")}
          >
            <li>
              <a href="/">Blogs</a>
            </li>
          </NavLink>
          <NavLink
            to="/contactus"
            activeClassName="active"
            onClick={() => (window.location.href = "/contactus")}
          >
            <li>
              <a href="/">Contact Us</a>
            </li>
          </NavLink>
        </ul>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
