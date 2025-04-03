import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <NavLink to="/">
            <img src="/Logo1.png" alt="Logo" />
          </NavLink>
        </div>

        {/* Toggle Button */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon-bar ${isOpen ? "open" : ""}`}></div>
          <div className={`menu-icon-bar ${isOpen ? "open" : ""}`}></div>
          <div className={`menu-icon-bar ${isOpen ? "open" : ""}`}></div>
        </div>

        {/* Navigation Links */}
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <div className="navbar-nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/individual"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/training"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Training
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className={`navbar-auth ${isOpen ? "active" : ""}`}>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="btn btn-login"
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="btn btn-signup"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
