import React, {useState} from "react";
import "./PartnersSection.css"; // Ensure to create/update this CSS file for styling
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const partners = [
  { name: "Ambulance Drivers", icon: "🚑" },
  { name: "Doctors", icon: "👨‍⚕️" },
  { name: "Hospitals", icon: "🏥" },
  { name: "Medical Persons", icon: "🩺" }
];

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <h2 className="partners-heading">Our Trusted Partners</h2>
      <h5 className="partners-subheading">
        Collaborating with healthcare professionals to ensure quality service.
      </h5>
      <p className="partners-subheading">
        Partner with Us Partner with Ambigo and join our mission to
        deliver exceptional ambulance services and medical care. Whether you’re
        a hospital, a corporate entity, or an individual, we provide diverse
        partnership opportunities tailored to your needs. Together, we can
        create a meaningful impact in delivering timely and reliable emergency
        medical assistance. Let’s collaborate to save lives and make a
        difference!
      </p>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <div className="partner-icon">{partner.icon}</div>
            <h3 className="partner-name">{partner.name}</h3>
          </div>
        ))}
      </div>
      <ContactForm />
    </section>
  );
};


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [isLoading, setisLoading] = useState(false);

  const { name, email, organization, message } = formData;

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Submitting Your Form");
    console.log("Form Submitted Data:", formData);
    setisLoading(true);
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/ambigo/google_sheets/pbbiikCFNMwYIxkr?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, organization, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setFormData({
        name: "",
        email: "",
        organization: "",
        message: "",
      });
      // alert("Your message has been submitted. We will contact you soon!");
      toast.success("Your message has been successfully submitted!");
    } catch (err) {
      console.error(err);
      // alert("An error occurred while submitting the form.");
      toast.error("Failed to submit your message. Please try again.");

    }
    isLoading(false);
  };

  return (
    <div className="contact-form-section">
      <h2 className="contact-form-heading">Collaborate With Ambigo</h2>
      <p className="contact-form-subheading">
        Reach out to us to discuss collaboration opportunities.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organization</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={organization}
            onChange={handleChange}
            placeholder="Your organization or role"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            rows="4"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-form-submit" disabled = {isLoading}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default PartnersSection;
