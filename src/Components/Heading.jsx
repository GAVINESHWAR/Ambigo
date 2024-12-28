import React from "react"
import './Heading.css';

const Heading = () => {
  return (
    <div className="heading">
        <h1>Welcome to Ambigo</h1>
        <h3>Your Health, Our Priority</h3>
        <div className="hbutton">
            <button className="btn">Call Now</button>
            <button className="btn">Book Now</button>
        </div>
    </div>
  )
}
export default Heading