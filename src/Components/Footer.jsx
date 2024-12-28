import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li>
              <a href="#">What we do</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#">Enterprise</a>
            </li>
            <li>
              <a href="#">Individual</a>
            </li>
            <li>
              <a href="#">Hospital</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Training</h3>
          <ul>
            <li>
              <a href="#">Driving Training</a>
            </li>
            <li>
              <a href="#">Paramedical Training Institute</a>
            </li>
            <li>
              <a href="#">First Aid</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Reach Us</h3>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Blogs</h3>
          <ul>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">reviews</a>
            </li>
            <li>
              <a href="#">Founders Desk</a>
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
