import React from "react"
import './Aboutus.css';
import { FaBed, FaClock, FaHeadset, FaAmbulance } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import AppDownload from "../AppDownload";

const Aboutus = () => {

    const AmbulanceType = [
      {
        image:
          "https://cmv360.s3.ap-southeast-1.amazonaws.com/small_Force_Advance_Life_Support_Ambulance_Type_D_c0a95ed2e8.webp",
        name: "Basic Life Support",
        answer:
          "Equipped with state-of-the-art medical tools and technology to provide critical care for severely ill patients.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxhnmhUYcDYJ3sKqsvA3KfGhKgGPSGTh-Vw&s",
        name: "Advance Life Support",
        answer:
          "These ambulances include essential medical equipment such as a patient bed, pulse oximeter, and oxygen supply devices.",
      },
      {
        image:
          "https://www.ambulanceoncall.com/assets/images/blogs/organize-transportation-from-the-hospital.jpg",
        name: "patient Transport Ambulance",
        answer:
          "A specialized medical vehicle designed for the safe transfer of patients between hospitals and healthcare facilities.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxy-DHvzAid8cmGXNNpDsq-zujAxuv17FxVA&s",
        name: "Mortuary Van",
        answer:
          "Used for the dignified transportation of deceased individuals from one location to another.",
      },
    ];
    const ourTeam = [
      {
        name: "Karamthoti Sai Kumar",
        image:
          "https://github.com/user-attachments/assets/5a436505-03c0-4637-8137-62eb3f029118",
        designation: "Founder",
      },
      {
        name: "Priyanka",
        image:
          "https://github.com/user-attachments/assets/5a436505-03c0-4637-8137-62eb3f029118",
        designation: "Advisor",
      },
      {
        name: "G Avineshwar",
        image:
          "https://github.com/user-attachments/assets/5a436505-03c0-4637-8137-62eb3f029118",
        designation: "Web Developer",
      },
      {
        name: "Vivek",
        image:
          "https://github.com/user-attachments/assets/5a436505-03c0-4637-8137-62eb3f029118",
        designation: "Software Developer",
      },
      {
        name: "Prasad",
        image:
          "https://github.com/user-attachments/assets/5a436505-03c0-4637-8137-62eb3f029118",
        designation: "Advisor",
      },
    ];
  return (
    <>
      <div className="about-container">
        <div className="aboutwhat">
          <h1 className="text-center">
            What is <span style={{ color: "Orange" , textDecoration:"underline"}}>Ambigo</span>
          </h1>
          <p style={
            {
              textAlign:"center",
              fontSize:"15px",
              fontWeight:"lighter"
            }
          }>
            Introducing Ambigo: India's pioneering GPS-based technology platform
            designed to provide fast and reliable first-point medical attention.
            In today's world, where independent living is increasingly valued,
            Ambigo ensures you have quick access to the nearest ambulance,
            offering peace of mind in critical situations.
          </p>
        </div>
        <div className="abouthistory">
          <div className="historyintro">
            <div className="historyintroleft">
              <h1>
                <span style={{ color: "orange" }}>History</span> and
                Introduction
              </h1>
              <p>
                Emergency response is crucial to the well-being of any nation.
                Ambigo seeks to transform India's approach to ambulances and
                immediate medical care, aiming to make a significant difference
                in people's lives. Launched in 2025, Ambigo simplifies the task
                of locating an ambulance, making it as easy as ordering a meal
                or a ride. As a comprehensive emergency response support
                platform, it provides an efficient ambulance booking and
                tracking system that ensures rapid initial medical assistance.
              </p>
            </div>
            <div className="historyintroright">
              <img
                className="historyright"
                src="https://busesandvans.tatamotors.com/assets/buses/files/2024-02/Winger-Ambulance.jpg?VersionId=7YNVSKlohOLW7GuBsR0xBsmlp2cY6pv3"
                alt="Ambulance"
              />
            </div>
          </div>
        </div>
    <div className="hiscontainer">
      <div className="hiscard problem">
        <h2>Problem</h2>
        <p>
          In 2018, 151,000 fatalities were caused due to road accidents. 50% of lives of road accident victims could have been saved if timely assistance was made available to them. Moreover, 40%-60% deaths in India are preventable. The major issues faced are:
        </p>
        <ul>
          <li>Severe lack of awareness and facility of first aid communication</li>
          <li>Inability of a person to have a top of mind recall of emergency numbers</li>
          <li>High response time</li>
          <li>Large number of calls being missed</li>
          <li>The Emergency & Ambulatory services sector is unorganised</li>
          <li>Lack of awareness coupled with the lack of technology</li>
          <li>No standard practice in ERS, affecting serviceability & customer experience</li>
          <li>No prominent national entity in emergency response</li>
        </ul>
        <p>Since the COVID-19 outbreak, panic among people and lack of awareness about emergency services.</p>
      </div>
      <div className="hiscard solution">
        <h2>Solution</h2>
        <p>
          Ambigo Healthcare is India's first & leading comprehensive emergency response service provider, extensively dealing in the Ambulatory Services. We provide:
        </p>
        <ul>
          <li><FaCheckCircle /> End to end emergency response service</li>
          <li><FaCheckCircle /> GPS enabled high quality ambulances</li>
          <li><FaCheckCircle /> Emergency Management Technology</li>
          <li><FaCheckCircle /> Trained Drivers and certified Paramedics</li>
          <li><FaCheckCircle /> Covering 22 cities in India (All metros & Major tier 2 cities)</li>
          <li><FaCheckCircle /> Dedicated Helpline Number</li>
        </ul>
        <div className="hisicon">
          {/* Add your image or icon here */}
        </div>
      </div>
    </div>
      </div>
      <div className="Whycontainer">
        <h2 className="Whyheading">Why Choose Us?</h2>
        <p className="Whydescription">
          At Ambigo, patient care and convenience go hand-in-hand. Our
          integrated ambulance transport services were created to assist in
          saving human lives by providing an ultimate network of equipped
          ambulances. By simple location-based mapping, we built a 24/7
          emergency and technology platform that connects the customers and the
          ambulance drivers directly with each other.
        </p>

        {/* Features Section */}
        <div className="Ambufeatures">
          <div className="Ambufeature">
            <div className="Ambuicon-box">
              <FaBed className="Ambuicon" />
            </div>
            <p className="Ambufeature-text">Patient first policy</p>
          </div>

          <div className="Ambufeature">
            <div className="Ambuicon-box">
              <FaClock className="Ambuicon" />
            </div>
            <p className="Ambufeature-text">
              Emergency assistance within 15 minutes or less
            </p>
          </div>

          <div className="Ambufeature">
            <div className="Ambuicon-box">
              <FaHeadset className="Ambuicon" />
            </div>
            <p className="Ambufeature-text">24/7 Support</p>
          </div>

          <div className="Ambufeature">
            <div className="Ambuicon-box">
              <FaAmbulance className="Ambuicon" />
            </div>
            <p className="Ambufeature-text">
              Biggest fleet of 7500 ambulances across India
            </p>
          </div>
        </div>
      </div>
      <div className="typeofAmbulance">
        <h1>Type of Ambulance</h1>
        <h2>know about what you need</h2>
        <div className="typeAmbucontainer">
        {AmbulanceType.map((item)=>{
            return(
                <div className="AmbulanceItem">
                    <img src = {item.image}/>
                    <h2>{item.name}</h2>
                    <p>{item.answer}</p>
                </div>
            )
        })}
        </div>
      </div>
      <div className="OurTeamAMbigo">
            <h1>Our Team</h1>
            <p></p>
            <div className="OurT">
                {ourTeam.map((item)=>{
                    return(
                        <div className="TeamMate">
                            <img src = {item.image}/>
                            <h3>{item.name}</h3>
                            <p>{item.designation}</p>
                        </div>
                    )
                })}
            </div>
      </div>    
      <AppDownload/>
    </>
  );
}
export default Aboutus