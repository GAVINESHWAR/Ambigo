import React, {useEffect, useState} from "react";
import "./StartPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg';

const AmbulanceService = () => {

  // const [userDate, setUserData] = useState({
  //   name:"", mobile:""
  // })

  // const {name, mobile} = userDate

  // const handleChange = (e)=>{
  //   setUserData({...userDate, [e.target.name]: e.target.value});

  // }

  // // on submission

  // const onhandleSubmit = async(e)=>{
  //     e.preventDefault();
  //     try{
  //     const response = await fetch(
  //       "https://v1.nocodeapi.com/hackingavi/google_sheets/VrWxypHHKASYokJc?tabId=Sheet1",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify([[name, mobile, new Date().toLocaleString()],]),
  //       }
  //     );
  //     await response.json();
  //     setUserData({...userDate,name:"",mobile:""})
  //   }
  //   catch(err){
  //     alert(err);
  //   }
  // }

  const [formData, setFormData] = useState({
      name: "",
      mobile: "",
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
                [name, mobile, new Date().toLocaleString()],
              ]),
            }
          );
          await response.json()
          setFormData({...formData, name: "", mobile: "" });
          toast.success("Data is Submitted  You will get the Call");
          console.log("Form Submitted Data:", formData);
      }
      catch(err){
          console.log(err);
          // alert(err);
          toast.error("Failed to Submit the response, Try again");
      }
           setIsLoading(false);
  
    };


  return (
    <div className="ambulance-container">
      <div className="content-wrapper">
        {/* Left Section */}
        <div className="left-section">
          <h2 className="main-heading">
            Welcome to <span>Ambigo</span>
            <br />
            Your Health, Our Priority
          </h2>
          <h1 className="sub-heading">
            <span>24/7</span> Ambulance Services, Anytime, Anywhere
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
          <img src={logo} />
          <div className="BookingsAmbu">
            <NavLink
              to="/login"
              activeClassName="active"
              onClick={() => (window.location.href = "/login")}
            >
              <button className="SignUp">
                <a href="">Sign Up</a>
              </button>
            </NavLink>
            <NavLink
              to="/login"
              activeClassName="active"
              onClick={() => (window.location.href = "/login")}
            >
              <button className="Login">
                <a href="">Log In</a>
              </button>
            </NavLink>
          </div>
          {/* <div className="right-section">
            <h3 className="callback-heading">
              GET A CALL BACK IN JUST 5 SECONDS
            </h3>
            <form
              className="form-container" */}
          {/* // action="https://api.web3forms.com/submit"
              // id="contactForm"
              // method="post" */}
          {/* onSubmit={onhandleSubmit} */}
          {/* > */}
          {/* <input
                type="hidden"
                name="access_key"
                value="5b316160-3506-4e4d-b711-f85301291124"
              /> */}
          {/* <input
                type="text"
                placeholder="Full Name"
                className="input-field"
                id="Full Name"
                required
                name="Full Name"
                onChange={handleChange}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="input-field"
                id="Mobile Number"
                required
                name="Mobile Number"
                onChange={handleChange}
              />
              <div className="terms-checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="checkbox"
                />
                <label htmlFor="terms" className="terms-label">
                  By continuing, you agree to our{" "}
                  <span className="terms-link">T&C</span> and{" "}
                  <span className="terms-link">Privacy Policies</span>
                </label>
              </div>
              <button type="submit" className="submit-btn">
                Book Ambulance
              </button>
            </form>
          </div> */}
          {/* <div className="right-section">
            <h3 className="callback-heading">
              GET A CALL BACK IN JUST 5 SECONDS
            </h3>
            <form onSubmit={handleSubmit} className="form-container">
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="name"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                  required
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label
                  htmlFor="mobile"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Mobile Number:
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <div className="terms-checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="checkbox"
                />
                <label htmlFor="terms" className="terms-label">
                  By continuing, you agree to our{" "}
                  <span className="terms-link">T&C</span> and{" "}
                  <span className="terms-link">Privacy Policies</span>
                </label>
              </div>
              <button type="submit" className="submit-btn" disabled={isLoading}>
                Book Now
              </button>
            </form>
            <ToastContainer />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AmbulanceService;
