import React from "react";
import "./CustomerReview.css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "The ambulance service was prompt and professional. Highly recommended!",
    image:
      "https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "Great experience during an emergency. The staff was kind and supportive.",
    image:
      "https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=",
  },
  {
    id: 3,
    name: "David Brown",
    feedback: "Quick response and well-equipped ambulance. Truly a lifesaver!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H0CBWue_t4u2h60eTm3WC_Z4eLoYS_Y2yw&s",
  },
];

const CustomerReview = () => {
  return (
    <div className="review-section">
      <h2 className="section-title">Customer Reviews</h2>
      <p className="section-description">
        See what our customers say about our services!
      </p>
      <div className="review-cards-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img
              src={review.image}
              alt={review.name}
              className="customer-image"
            />
            <h3 className="customer-name">{review.name}</h3>
            <p className="customer-feedback">"{review.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
