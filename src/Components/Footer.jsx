import React from "react";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <ul>
            <h3>About</h3>
            <li>
              <Link
                to="/AboutUs"
                onClick={() => (window.location.href = "/AboutUs")}
              >
                About
              </Link>
            </li>
            <li>
              <NavLink
                to="/ourteam"
                onClick={() => (window.location.href = "/ourteam")}
                activeClassName="active"
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Careers"
                onClick={() => (window.location.href = "/Careers")}
                activeClassName="active"
              >
                Careers
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>
              <NavLink
                to="/enterprise"
                activeClassName="active"
                onClick={() => (window.location.href = "/enterprise")}
              >
                Enterprise
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/individual"
                activeClassName="active"
                onClick={() => (window.location.href = "/individual")}
              >
                Individual
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hospital"
                activeClassName="active"
                onClick={() => (window.location.href = "/hospital")}
              >
                Hospital
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Training</h3>
          <ul>
            <li>
              <NavLink
                to="/training"
                activeClassName="active"
                onClick={() => (window.location.href = "/training")}
              >
                Driving Training
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/training"
                activeClassName="active"
                onClick={() => (window.location.href = "/training")}
              >
                Paramedical Training Institute
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/training/first-aid"
                activeClassName="active"
                onClick={() => (window.location.href = "/AboutUs")}
              >
                First Aid
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Reach Us</h3>
          <ul>
            <li>
              <NavLink
                to="/contactus"
                activeClassName="active"
                onClick={() => (window.location.href = "/contactus")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                activeClassName="active"
                onClick={() => (window.location.href = "/AboutUs")}
              >
                Support
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/location"
                activeClassName="active"
                onClick={() => (window.location.href = "/AboutUs")}
              >
                Location
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Blogs</h3>
          <ul>
            <li>
              <NavLink
                to="/AboutUs"
                activeClassName="active"
                onClick={() => (window.location.href = "/AboutUs")}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AboutUs"
                activeClassName="active"
                onClick={() => (window.location.href = "/AboutUs")}
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AboutUs"
                activeClassName="active"
                onClick={() => (window.location.href = "/AboutUs")}
              >
                Founders Desk
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Ambigo. All Rights Reserved.</p>
      </div>
      <h2 style={{ textAlign: "center" }}>Follow Us on</h2>
      <div className="socailMedia">
        <li>
          <a href="#">
            <img src="https://cdn-icons-png.freepik.com/256/15707/15707869.png?semt=ais_hybrid" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHA8a-u1SWwHz3AVpXEnT-aTPbXAPmzkIb2A&s" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0UjGFidafaPcCA4qlsw2I0bRUJkjlZTirw&s" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpb3AULGzEX8T0fb_Jae0LqKf9Z809phxo2w&s" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_-LAcN0Q0DZCVLrL6t3sV7NIPeidij3QNg&s" />
          </a>
        </li>
      </div>
    </footer>
  );
};

export default Footer;
