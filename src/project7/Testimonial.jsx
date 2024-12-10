import React, { useState } from "react";
import "./style1.css";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
    <h1 className="below">User Testimonial</h1>
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
         {testimonials[currentIndex].author}
         
      </div>
      <div className="testimonials-nav">
      <div className="upper">
      <button className="left-btn" onClick={handlePrevClick}>Prev</button>
      <button className="right-btn" onClick={handleNextClick}>Next</button>
      </div>
      
      </div>
     
   
    </div>
  );
}

export default Testimonials;
