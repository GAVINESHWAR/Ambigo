import React from "react";
import "./Ventilator.css";
import WhyWe from "../WhyWe";
import Footer from "../Footer";
import AmbulancePrices from "../AmbulancePrices";

export const VentilatorAmbulance = () => {

    const features = [
      {
        name: "Expert Critical Care",
        info: "Ambigo’s experienced medical professionals provide specialized support to patients requiring ventilator care during transport, ensuring safety and comfort.",
      },
      {
        name: "Rapid Response",
        info: "Recognizing the urgency of critical situations, Ambigo guarantees quick arrivals to deliver immediate and necessary medical assistance.",
      },
      {
        name: "Affordable Quality",
        info: "Ambigo combines premium ICU ventilator ambulance services with affordability, ensuring exceptional care is accessible to everyone.",
      },
      {
        name: "Wide Network Coverage",
        info: "With services spanning across India, including major cities, Ambigo ensures timely and reliable critical care transport wherever you are.",
      },
      {
        name: "Hassle-Free Booking",
        info: "Easily book an ICU ventilator ambulance through our user-friendly app or dedicated helpline, simplifying the process during urgent times.",
      },
      {
        name: "Reliable Performance",
        info: "Ambigo’s proven record of timely and dependable services offers peace of mind, delivering critical care solutions even in the toughest situations.",
      },
    ];

    const services = [
      {
        name: "Advanced Life-Support Systems",
        info: "Our ambulances are equipped with ventilators and all necessary medical equipment to support critically ill patients.",
      },
      {
        name: "Experienced Medical Teams",
        info: "Skilled medical professionals accompany patients, ensuring they receive the best care throughout their journey.",
      },
      {
        name: "Swift Response",
        info: "We ensure rapid arrival and quick transport, providing prompt critical care during emergencies.",
      },
      {
        name: "Continuous Patient Monitoring",
        info: "Real-time monitoring equipment allows constant medical attention to stabilize patients during transit.",
      },
      {
        name: "Long-Distance Transfers",
        info: "Our vehicles are designed for long-distance patient transfers, ensuring comfort and care on extended journeys.",
      },
      {
        name: "Collaboration with Ground Teams",
        info: "Seamless coordination with ground medical teams ensures that patients receive comprehensive care from start to finish.",
      },
    ];
  return (
    <>
      <div className="ventiSTart">
        <div className="ICUstleft">
          <h1>Book ICU Ventilator Ambulance Services</h1>
          <h4>
            Critical Care, Rapidly Arranged: Secure Your Spot for ICU Ventilator
            Ambulance Services with Ambigo’s Seamless Booking Process.
          </h4>
          <button>Call : 9475621378</button>
        </div>
        <img
          className="ICUstright"
          src="https://content.jdmagicbox.com/comp/service_catalogue/ambulance-services-attr-incubator-facility-for-new-born-baby-abs4-2.jpg"
          alt="image"
        />
      </div>
      <div className="ventibegin">
        <img
          className="venti_left"
          src="https://content.jdmagicbox.com/v2/comp/bangalore/u2/080pxx80.xx80.200818174713.q8u2/catalogue/abhi-ambulance-services-rajajinagar-bangalore-ambulance-services-5cjp6n3784.jpg"
          alt="rightside"
        />
        <div className="venticuright">
          <h2>Affordable ICU Ventilator Ambulance Service</h2>
          <h4>
            Expert Care, Reasonable Costs: Ambigo’s Affordable ICU Ventilator
            Ambulance Service
          </h4>
          <p>
            In moments when immediate medical attention is crucial, Ambigo
            offers an Affordable ICU Ventilator Ambulance Service, combining
            advanced care with cost-effectiveness. We recognize the importance
            of swift and professional medical support while respecting your
            financial needs. With our service, you benefit from high-quality
            care, efficient transportation, and experienced medical teams at a
            price that fits your budget. Ambigo is dedicated to providing
            practical and reliable solutions during critical times, ensuring
            exceptional medical support remains accessible to everyone. Count on
            us to deliver dependable and budget-friendly ICU ventilator
            ambulance services, offering reassurance and relief when it matters
            most.
          </p>
        </div>
      </div>
      <WhyWe />
      <div className="whyventiambigo">
        <h2>Why Choose Ambigo for ICU Ventilator Ambulance Services</h2>
        <p>
          Learn why Ambigo is the trusted choice for ICU ventilator ambulance
          services, delivering advanced critical care, swift response, and
          unwavering dependability.
        </p>
        <div className="ventifea">
          {features.map((item) => {
            return (
              <div className="featureItems">
                <h6>{item.name}</h6>
                <p>{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>
        Affordable ICU Ventilator Ambulance Service near me
      </h1>
      <div className="ventinearme">
        <p className="ventinearleft">
          When every moment counts, Ambigo’s Affordable Oxygen Ambulance Service
          is just a call away. We understand the urgency of medical situations
          and the financial strain they can bring. Our commitment to providing
          top-tier care at reasonable rates ensures that quality medical
          transportation is within your reach. With our service, you no longer
          need to worry about compromising on your health due to cost concerns.
          We prioritize your well-being without burdening your wallet. Whether
          you’re in Anantapur, Tadipatri, Dharmavaram, or Gooty, our accessible
          and affordable oxygen ambulance service is available near you. We
          believe that quality healthcare should be accessible to all,
          regardless of location or financial situation.
        </p>
        <img
          className="ventinearright"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3wiT_e0fUUjiBZEXjhCQwzwsP8Te9QlueaGaZLBh_23iNPUDPz1BWPHo-Vsh5JrPZNI&usqp=CAU"
          alt="image"
        />
      </div>
      <div className="whatVentiIcu">
        <img
          className="whatventileft"
          src="https://www.goaid.in/wp-content/uploads/2023/12/Best-Icu-Ventilator-Ambulance-.webp"
        />
        <div className="whatventiright">
          <h2>What is an ICU Ventilator</h2>
          <p>
            An ICU Ventilator Ambulance is a state-of-the-art medical vehicle
            designed to provide critical care support during transit. Equipped
            with advanced ventilators and life-support systems, it ensures
            continuous monitoring and expert medical attention for patients in
            critical condition. Ambigo’s ICU Ventilator Ambulance is dedicated
            to delivering intensive care on the move, ensuring safe and seamless
            transportation to healthcare facilities for those in need.
          </p>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>
        24/7 Emergency ICU Ventilator Ambulance Services
      </h1>
      <div className="by7venti24">
        <p className="leftvent24">
          Introducing Ambigo’s 24/7 Emergency ICU Ventilator Ambulance Services.
          In critical situations, we ensure rapid and specialized medical
          transport for patients in need of intensive care. Our dedicated
          ambulances are equipped with advanced life-support equipment,
          including ventilators, and are staffed by experienced medical
          professionals. <br />
          Emphasizing swift response and critical care, our services prioritize
          patient well-being throughout the journey. Rely on Ambigo to deliver
          reliable and compassionate solutions, available round the clock to
          address urgent medical needs, ensuring patients receive top-notch care
          during transit.
        </p>
        <img
          className="rightventi24"
          src="https://static.vecteezy.com/system/resources/previews/000/670/929/non_2x/vector-emergency-character-ambulance.jpg"
        />
      </div>
      <h1 style={{textAlign:"center"}}>Features of GoAid ICU Ventilator Ambulance Services</h1>
      <h4 style={{textAlign:"center"}}>
        Discover the Essential Features of GoAid ICU Ventilator Ambulance
        Services. Our specialized vehicles provide critical care during transit,
        ensuring patient well-being. Available in cities like Anantapur, Tadipatri,
        Dharmavaram, Gooty, Penukondala.
      </h4>
      <h4 style={{textAlign:"center"}}>Features of Ambigo Ventilator Ambulance services</h4>
      <div className="ventiservice">
          {services.map((item)=>{
            return(
              <div className="VentServeItem">
                <h3>{item.name}</h3>
                <p>{item.info}</p>
              </div>
            )
          })}
        </div>
    </>
  );
}