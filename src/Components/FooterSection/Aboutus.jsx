import React, {useEffect} from "react"
import './Aboutus.css';
import { FaBed, FaClock, FaHeadset, FaAmbulance } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import AppDownload from "../AppDownload";
import { useLocation } from "react-router-dom";

const Aboutus = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

    const AmbulanceType = [
      {
        image:
          "https://media.istockphoto.com/id/2110772135/vector/medical-vehicle-ambulance-car-or-emergency-service-vector-illustration-for-pick-up-patient.jpg?s=612x612&w=0&k=20&c=ZMNnm8KIQQLpCYLcmZgq_q9IlVYWNIdaZR2scUgyrFY=",
        name: "Basic Life Support",
        answer:
          "Equipped with state-of-the-art medical tools and technology to provide critical care for severely ill patients.",
      },
      {
        image:
          "https://media.istockphoto.com/id/1246153344/vector/ambulance-stretcher-and-oxygen-cylinders-vector-design.jpg?s=612x612&w=0&k=20&c=qq_FQZLj0TxUnWM8NVW2wKHD6IiCaupWrPkPHEYdjh8=",
        name: "Advance Life Support",
        answer:
          "These ambulances include essential medical equipment such as a patient bed, pulse oximeter, and oxygen supply devices.",
      },
      {
        image:
          "https://media.istockphoto.com/id/1225840880/vector/biosafety-workers-with-patient-in-ambulance.jpg?s=612x612&w=0&k=20&c=bkIAGa6IsaCm3OA9Cy0rsIaCE95veJcQJwtXrmqZytE=",
        name: "patient Transport Ambulance",
        answer:
          "A specialized medical vehicle designed for the safe transfer of patients between hospitals and healthcare facilities.",
      },
      // {
      //   image:
      //     "https://media.istockphoto.com/id/1214214876/vector/ambulance-van-with-a-driver-in-a-medical-mask-against-the-background-of-an-abstract.jpg?s=612x612&w=0&k=20&c=gGR7GyN_xulhtk4L_aTTUIsUIT5B4qK17F-T_Wikkto=",
      //   name: "Mortuary Van",
      //   answer:
      //     "Used for the dignified transportation of deceased individuals from one location to another.",
      // },
    ];
    const ourTeam = [
      {
        name: "Karamthoti Sai Kumar",
        image:
          "/SaiKumar.png",
        designation: "Founder",
      },
      {
        name: "Priyanka",
        image:
          "/SaiKumar.png",
        designation: "Advisor",
      },
      {
        name: "G Avineshwar",
        image:
          "/avineshwar.jpg",
        designation: "FullSatck web Developer",
      },
      {
        name: "Vivek",
        image:
          "/Vivek.png",
        designation: "Software Developer",
      },
      {
        name: "Prasad",
        image:
          "/SaiKumar.png",
        designation: "Advisor",
      },
    ];
  return (
    <>
      <div className="about-container">
        <div className="aboutwhat">
          <h1 className="text-center">
            What is{" "}
            <span style={{ color: "Orange", textDecoration: "underline" }}>
              Ambigo
            </span>
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "15px",
              fontWeight: "lighter",
            }}
          >
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
              In 2018, 151,000 fatalities were caused due to road accidents. 50%
              of lives of road accident victims could have been saved if timely
              assistance was made available to them. Moreover, 40%-60% deaths in
              India are preventable. The major issues faced are:
            </p>
            <ul>
              <li>
                <FaCheckCircle />
                Severe lack of awareness and facility of first aid communication
              </li>
              <li>
                <FaCheckCircle />
                Inability of a person to have a top of mind recall of emergency
                numbers
              </li>
              <li>
                <FaCheckCircle />
                High response time
              </li>
              <li>
                <FaCheckCircle />
                Large number of calls being missed
              </li>
              <li>
                <FaCheckCircle />
                The Emergency & Ambulatory services sector is unorganised
              </li>
              <li>
                <FaCheckCircle />
                Lack of awareness coupled with the lack of technology
              </li>
              <li>
                <FaCheckCircle />
                No standard practice in ERS, affecting serviceability & customer
                experience
              </li>
              <li>
                <FaCheckCircle />
                No prominent national entity in emergency response
              </li>
            </ul>
            <p>
              Since the COVID-19 outbreak, panic among people and lack of
              awareness about emergency services.
            </p>
          </div>
          <div className="hiscard solution">
            <h2>Solution</h2>
            <p>
              Ambigo Healthcare is India's first & leading comprehensive
              emergency response service provider, extensively dealing in the
              Ambulatory Services. We provide:
            </p>
            <ul>
              <li>
                <FaCheckCircle /> End to end emergency response service
              </li>
              <li>
                <FaCheckCircle /> GPS enabled high quality ambulances
              </li>
              <li>
                <FaCheckCircle /> Emergency Management Technology
              </li>
              <li>
                <FaCheckCircle /> Trained Drivers and certified Paramedics
              </li>
              <li>
                <FaCheckCircle /> Covering 22 cities in India (All metros &
                Major tier 2 cities)
              </li>
              <li>
                <FaCheckCircle /> Dedicated Helpline Number
              </li>
            </ul>
            <div className="hisicon">{/* Add your image or icon here */}</div>
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
          {AmbulanceType.map((item) => {
            return (
              <div className="AmbulanceItem">
                <img src={item.image} />
                <h2>{item.name}</h2>
                <p>{item.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="OurTeamAMbigo">
        <h1>Our Team</h1>
        <p></p>
        <div className="OurT">
          {ourTeam.map((item) => {
            return (
              <div className="TeamMate">
                <img src={item.image} />
                <h3>{item.name}</h3>
                <p>{item.designation}</p>
              </div>
            );
          })}
        </div>
      </div> */}
      <AppDownload />
    </>
  );
}
export default Aboutus