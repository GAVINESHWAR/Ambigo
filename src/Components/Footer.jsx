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
                activeClassName="active"
                // onClick={() => (window.location.href = "/AboutUs")}
              >
                About Us
              </Link>
            </li>
            <li>
              <NavLink
                to="/ourteam"
                // onClick={() => (window.location.href = "/ourteam")}
                activeClassName="active"
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Careers"
                // onClick={() => (window.location.href = "/Careers")}
                activeClassName="active"
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms"
                // onClick={()=>(window.location.href = "/terms")}
              >
                Terms and Conditions
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
                // onClick={() => (window.location.href = "/enterprise")}
              >
                Enterprise
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/individual"
                activeClassName="active"
                // onClick={() => (window.location.href = "/individual")}
              >
                Individual
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hospital"
                activeClassName="active"
                // onClick={() => (window.location.href = "/hospital")}
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
                // onClick={() => (window.location.href = "/training")}
              >
                Driving Training
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/training"
                activeClassName="active"
                // onClick={() => (window.location.href = "/training")}
              >
                Paramedical Training Institute
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/firstaid"
                activeClassName="active"
                // onClick={() => (window.location.href = "/firstaid")}
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
                // onClick={() => (window.location.href = "/contactus")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                activeClassName="active"
                // onClick={() => (window.location.href = "/contactus")}
              >
                Support
              </NavLink>
            </li>
            <li>
              {/* <NavLink
                to="/contactus"
                activeClassName="active"
                // onClick={() => (window.location.href = "/contactus")}
              >
                Location
              </NavLink> */}
              <a href="https://www.google.com/maps/place/Naik+Nagar,+Adarsh+Nagar,+Anantapur,+Andhra+Pradesh+515002/@14.6583373,77.5936195,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb14af0812585c3:0x1bd312d8f371f28c!8m2!3d14.6582289!4d77.5962712!16s%2Fg%2F11bvt9s6ln?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D">
                Location
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="footer-section">
          <h3>Blogs</h3>
          <ul>
            <li>
              <NavLink
                to="/AboutUs"
                // activeClassName="active"
                // onClick={() => (window.location.href = "/AboutUs")}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AboutUs"
                activeClassName="active"
                // onClick={() => (window.location.href = "/AboutUs")}
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AboutUs"
                activeClassName="active"
                // onClick={() => (window.location.href = "/AboutUs")}
              >
                Founders Desk
              </NavLink>
            </li>
          </ul>
        </div> */}
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
