import React from "react";
import "./AmbulancePrices.css"; // Add styles in this file

const AmbulancePrices = () => {
  const data = [
    { type: "Normal ambulance", price: "350–720" },
    { type: "ICU ambulance", price: "1500–2200" },
    { type: "Oxygen Ambulance", price: "410–800" },
    { type: "Dead Body Mortuary Van / Transfer", price: "380–750" },
    { type: "Dead Body Freezer Box on Rent", price: "2200–2900" },
    { type: "Train ambulance", price: "2500–6250" },
    { type: "Bike Ambulance", price: "200–1000" },
  ];

  return (
    <div className="prices-container">
      <h2>Our Prices for Different Ambulance Services</h2>
      <table className="prices-table">
        <thead>
          <tr>
            <th>Types of Ambulance</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmbulancePrices;
