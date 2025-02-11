import React from "react";
import './OurTeam.css';
import AppDownload from "../AppDownload";
import Footer from "../Footer";

const OurTeam = () => {
  return (
    <>
      <div class="team-section">
        <h1 class="team-title">
          Our Team{" "}
          <span style={{ color: "orange", textDecoration: "underline" }}>
            Ambigo
          </span>
        </h1>
        <h5 class="team-description">
          Ambigo has a small yet highly effective team. We are driven by a
          dedicated and committed workforce with a well-structured system to
          support our services, ensuring seamless execution and customer
          satisfaction. Our team comprises professionals across Sales & Business
          Development, Support, Technology, Client Servicing, and Vendor
          Management, all led by a passionate and focused group determined to
          revolutionize ambulance services.
        </h5>
      </div>
      <div class="ourcontainer">
        <div class="ourprofile-wrapper">
          <div class="ourprofile-details">
            <div class="ourheader">
              <div>
                <h1 class="name">Karamthoti Sai Kumar</h1>
                <p class="position">Founder</p>
              </div>
              {/* <svg class="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.474v6.761z"/>
                    </svg> */}
              <img
                src="https://github.com/user-attachments/assets/5a436505-03c0-4637-8137-62eb3f029118"
                alt="Pranav Bajaj"
                class="ourprofile-image"
              />
            </div>

            <div class="ourabout">
              <h2 class="oursection-title">About</h2>
              <p>
                Co-founder at Medlance Healthcare, driving partner acquisition
                and growth. Born and raised in Delhi, Pranav is an alumni of
                Modern School and graduated in Finance from Shaheed Sukhdev
                College of Business Studies.
              </p>
            </div>

            <div class="ourexperience">
              <h2 class="oursection-title">Experience</h2>
              <h3>Medlance Healthcare</h3>
              <p>
                Drives partner acquisition with startup experience from Zomato
                and strategic consulting background
              </p>
              <ul>
                <li>Business Development at Zomato</li>
                <li>Marketing Lead at ThatsRealty</li>
                <li>Strategy Consultant at Deloitte</li>
              </ul>
            </div>

            <div class="ourachievements">
              <h2 class="oursection-title">Achievements</h2>
              <ul>
                <li>Forbes 30U30 Recognition</li>
                <li>Excellence in Healthcare Entrepreneurship Award</li>
                <li>BW Healthcare 40U40</li>
                <li>BW Social Impact Award for Covid Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="ourcontainer">
        <div class="ourprofile-wrapper">
          <div class="ourprofile-details">
            <div class="ourheader">
              <div>
                <h1 class="name">Priyanka</h1>
                <p class="position">Co Founder</p>
              </div>
              {/* <svg class="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.474v6.761z"/>
                    </svg> */}
              <img
                src="https://github.com/user-attachments/assets/5a436505-03c0-4637-8137-62eb3f029118"
                alt="Pranav Bajaj"
                class="ourprofile-image"
              />
            </div>

            <div class="ourabout">
              <h2 class="oursection-title">About</h2>
              <p>
                Co-founder at Medlance Healthcare, driving partner acquisition
                and growth. Born and raised in Delhi, Pranav is an alumni of
                Modern School and graduated in Finance from Shaheed Sukhdev
                College of Business Studies.
              </p>
            </div>

            <div class="ourexperience">
              <h2 class="oursection-title">Experience</h2>
              <h3>Medlance Healthcare</h3>
              <p>
                Drives partner acquisition with startup experience from Zomato
                and strategic consulting background
              </p>
              <ul>
                <li>Business Development at Zomato</li>
                <li>Marketing Lead at ThatsRealty</li>
                <li>Strategy Consultant at Deloitte</li>
              </ul>
            </div>

            <div class="ourachievements">
              <h2 class="oursection-title">Achievements</h2>
              <ul>
                <li>Forbes 30U30 Recognition</li>
                <li>Excellence in Healthcare Entrepreneurship Award</li>
                <li>BW Healthcare 40U40</li>
                <li>BW Social Impact Award for Covid Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="ourcontainer">
        <div class="ourprofile-wrapper">
          <div class="ourprofile-details">
            <div class="ourheader">
              <div>
                <h1 class="name">G Avineshwar</h1>
                <p class="position">Web Developer</p>
              </div>
              {/* <svg class="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.474v6.761z"/>
                    </svg> */}
              <img
                src="https://github.com/user-attachments/assets/7fc6a861-0811-4941-aed1-4ce164896b36"
                alt="Pranav Bajaj"
                class="ourprofile-image"
              />
            </div>

            <div class="ourabout">
              <h2 class="oursection-title">About</h2>
              <p>
                Co-founder at Medlance Healthcare, driving partner acquisition
                and growth. Born and raised in Delhi, Pranav is an alumni of
                Modern School and graduated in Finance from Shaheed Sukhdev
                College of Business Studies.
              </p>
            </div>

            <div class="ourexperience">
              <h2 class="oursection-title">Experience</h2>
              <h3>Medlance Healthcare</h3>
              <p>
                Drives partner acquisition with startup experience from Zomato
                and strategic consulting background
              </p>
              <ul>
                <li>Business Development at Zomato</li>
                <li>Marketing Lead at ThatsRealty</li>
                <li>Strategy Consultant at Deloitte</li>
              </ul>
            </div>

            <div class="ourachievements">
              <h2 class="oursection-title">Achievements</h2>
              <ul>
                <li>Forbes 30U30 Recognition</li>
                <li>Excellence in Healthcare Entrepreneurship Award</li>
                <li>BW Healthcare 40U40</li>
                <li>BW Social Impact Award for Covid Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="ourcontainer">
        <div class="ourprofile-wrapper">
          <div class="ourprofile-details">
            <div class="ourheader">
              <div>
                <h1 class="name">Vivek</h1>
                <p class="position">Software Developer</p>
              </div>
              {/* <svg class="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.474v6.761z"/>
                    </svg> */}
              <img
                src="https://github.com/user-attachments/assets/5a436505-03c0-4637-8137-62eb3f029118"
                alt="Pranav Bajaj"
                class="ourprofile-image"
              />
            </div>

            <div class="ourabout">
              <h2 class="oursection-title">About</h2>
              <p>
                Co-founder at Medlance Healthcare, driving partner acquisition
                and growth. Born and raised in Delhi, Pranav is an alumni of
                Modern School and graduated in Finance from Shaheed Sukhdev
                College of Business Studies.
              </p>
            </div>

            <div class="ourexperience">
              <h2 class="oursection-title">Experience</h2>
              <h3>Medlance Healthcare</h3>
              <p>
                Drives partner acquisition with startup experience from Zomato
                and strategic consulting background
              </p>
              <ul>
                <li>Business Development at Zomato</li>
                <li>Marketing Lead at ThatsRealty</li>
                <li>Strategy Consultant at Deloitte</li>
              </ul>
            </div>

            <div class="ourachievements">
              <h2 class="oursection-title">Achievements</h2>
              <ul>
                <li>Forbes 30U30 Recognition</li>
                <li>Excellence in Healthcare Entrepreneurship Award</li>
                <li>BW Healthcare 40U40</li>
                <li>BW Social Impact Award for Covid Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="ourcontainer">
        <div class="ourprofile-wrapper">
          <div class="ourprofile-details">
            <div class="ourheader">
              <div>
                <h1 class="name">Prasad</h1>
                <p class="position">Advisor</p>
              </div>
              {/* <svg class="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.474v6.761z"/>
                    </svg> */}
              <img
                src="https://github.com/user-attachments/assets/5a436505-03c0-4637-8137-62eb3f029118"
                alt="Pranav Bajaj"
                class="ourprofile-image"
              />
            </div>

            <div class="ourabout">
              <h2 class="oursection-title">About</h2>
              <p>
                Co-founder at Medlance Healthcare, driving partner acquisition
                and growth. Born and raised in Delhi, Pranav is an alumni of
                Modern School and graduated in Finance from Shaheed Sukhdev
                College of Business Studies.
              </p>
            </div>

            <div class="ourexperience">
              <h2 class="oursection-title">Experience</h2>
              <h3>Medlance Healthcare</h3>
              <p>
                Drives partner acquisition with startup experience from Zomato
                and strategic consulting background
              </p>
              <ul>
                <li>Business Development at Zomato</li>
                <li>Marketing Lead at ThatsRealty</li>
                <li>Strategy Consultant at Deloitte</li>
              </ul>
            </div>

            <div class="ourachievements">
              <h2 class="oursection-title">Achievements</h2>
              <ul>
                <li>Forbes 30U30 Recognition</li>
                <li>Excellence in Healthcare Entrepreneurship Award</li>
                <li>BW Healthcare 40U40</li>
                <li>BW Social Impact Award for Covid Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AppDownload />
    </>
  );
}
export default OurTeam