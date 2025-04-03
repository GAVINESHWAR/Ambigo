import React, {useEffect, useState} from "react";
import "./StartPage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
const AmbulanceService = () => {

   const location = useLocation();

   // Scroll to top when route changes
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [location]);


  const [formData, setFormData] = useState({
      name: "",
      mobile: "",
      pickup:"",
      drop:""
    });
  
  const [isLoading, setIsLoading] = useState(false);

    const {name, mobile} = formData;
    // Handle form input changes
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Handle form submission

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      toast.info("Submitting Your form Please wait");
      try{
          const response = await fetch(
            "https://v1.nocodeapi.com/ambigo/google_sheets/UCYMjwgXAggSHqPH?tabId=Sheet1",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify([
                [name, mobile, pickup, drop, new Date().toLocaleString()],
              ]),
            }
          );
          await response.json()
          setFormData({...formData, name: "", mobile: "" , pickup:"", drop:""});
          toast.success("Data is Submitted  You will get the Call");
          console.log("Form Submitted Data:", formData);
      }
      catch(err){
          console.log(err);
          // alert(err);
           setFormData({
             ...formData,
             name: "",
             mobile: "",
             pickup: "",
             drop: "",
           });
          toast.error("Failed to Submit the response, Try again");
      }
           setIsLoading(false);
  
    };


  return (
    <div className="ambulance-containers">
      <div className="content-wrapper">
        {/* Left Section */}
        <div className="left-section">
          <h2 className="main-heading">
            Welcome to <br />
            <span className="animatedText">Ambigo</span>
            <br />
            Your Health, Our Priority
          </h2>
          <h1 className="sub-heading">
            <span>24/7</span> Ambulance Services<br></br>Anytime, Anywhere
          </h1>
          <p className="description">
            In emergency situations, help or rescue just a click away.
          </p>
          <h3>We will be at your door!</h3>
          <div className="button-group">
            <button className="download-btn">
              <a href="">DOWNLOAD Ambigo</a>
            </button>
            <button className="call-btn">
              <a href="tel:+91 9866792496">Call: +91 9866792496</a>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h1>Instant Ambulance Booking!</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="pickup"
              placeholder="Enter Pickup Location"
              value={formData.pickup}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="drop"
              placeholder="Enter Drop Location"
              value={formData.drop}
              onChange={handleChange}
              required
            />
            <button type="submit">Book Ambulance</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceService;
