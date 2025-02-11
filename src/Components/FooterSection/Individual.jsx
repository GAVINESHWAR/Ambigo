import React from "react"
import './Individual.css';
import AppDownload from "../AppDownload";
import Footer from "../Footer";


const Individual = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          textDecoration: "bold",
          marginTop: "30px",
        }}
      >
        Emergency Medical Care for Individuals
      </h1>
      <p style={{ textAlign: "center", fontWeight: "lighter" }}>
        Ambigo also has a 24*7*365 days functional emergency helpline number
        present across Anantapur, Tadipatri, Dharmavaram, Puttaparthi,
        Penukondala where people can reach out to us for ambulances Support.
      </p>
      <div className="BookNow">
        <div className="CallUs">
          <h1>Call Our Assistance</h1>
          <button>
            <a href="tel:+91 9866792496">Call Now</a>
          </button>
        </div>
        <div className="BookUs">
          <h2>Book Ambulance</h2>
          <button>
            <a href="#">Book Now</a>
          </button>
        </div>
      </div>
      <div className="indiservice">
        <div className="indiservleft">
          <h1>Home healthcare</h1>
          <p>
            Ambigo also provides Home Healthcare services, offering a
            comprehensive range of medical care at home, including
            Physiotherapy, Critical Care, Rehabilitation, and Nursing Services.
          </p>
        </div>
        <img
          className="indiservright"
          src="https://media.istockphoto.com/id/1202215069/photo/im-so-happy-youre-happy.jpg?s=612x612&w=0&k=20&c=96e6H2B-d1mUja0QH2wdfsTmtz1vrDw_pAagRvoRTJw="
        />
      </div>
      <div className="indiservice">
        <img
          className="indiservright"
          src="https://media.istockphoto.com/id/2172364133/photo/young-man-having-a-doctors-appointment-on-the-laptop-on-the-sofa.webp?a=1&b=1&s=612x612&w=0&k=20&c=JcfEm2u0ZtryTdWV3exDZ5yiNRiiGLmAp2lYnEDUBe8="
        />
        <div className="indiservleft">
          <h1>Teleconsultation</h1>
          <p>
            Ambigo offers Teleconsultation services, allowing you to easily
            consult with a General Physician or specialist via Voice or Video
            call. Along with the consultation, you'll receive an online
            prescription, all from the comfort of your own home.
          </p>
        </div>
      </div>
      <div className="indiservice">
        <div className="indiservleft">
          <h1>E-Pharmacy</h1>
          <p>
            Now with Ambigo you can order medicines, personal care and fitness
            products, medical equipment and a lot more at discounted prices.
          </p>
        </div>
        <img
          className="indiservright"
          src="https://plus.unsplash.com/premium_photo-1668487826863-bec57e15095a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGUlMjAlMjAlMjBwaGFybWFjeXxlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
      {/* <div className="indiservice">
        <img
          className="indiservright"
          src="https://media.istockphoto.com/id/1202215069/photo/im-so-happy-youre-happy.jpg?s=612x612&w=0&k=20&c=96e6H2B-d1mUja0QH2wdfsTmtz1vrDw_pAagRvoRTJw="
        />
        <div className="indiservleft">
          <h1>Home healthcare</h1>
          <p>
            Ambigo also provides Home Healthcare services, offering a
            comprehensive range of medical care at home, including
            Physiotherapy, Critical Care, Rehabilitation, and Nursing Services.
          </p>
        </div>
      </div> */}
      <AppDownload />
    </>
  );
}
export default Individual