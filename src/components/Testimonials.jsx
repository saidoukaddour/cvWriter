import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      title: "Auto deductions and refunds",
      text: "I chose this platform to develop a CV. However after 7 days automated deduction was done. I panicked and did...",
      author: "Pranav Phunde",
      date: "1 day ago"
    },
    {
      rating: 5,
      title: "Pretty alright",
      text: "Other than the 2.95 fee for the resume, it is a great program and helps create great resumes.",
      author: "Steven",
      date: "2 days ago"
    },
    {
      rating: 5,
      title: "I didn't realize I was being charged",
      text: "I didn't realize I was being charged monthly, they refunded most of the money I was charged which I really...",
      author: "Beau Flak",
      date: "3 days ago"
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>Reviewed by the community. Trusted by professionals</h2>
        <div className="overall-rating">
          <div className="rating-number">4.5 out of 5</div>
          <div className="stars">
            {[1, 2, 3, 4].map((_, index) => (
              <FaStar key={index} className="star-filled" />
            ))}
            <FaStar className="star-half" />
          </div>
          <div className="review-count">based on 52,435 reviews</div>
        </div>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="star-filled" />
              ))}
            </div>
            <h3>{testimonial.title}</h3>
            <p>{testimonial.text}</p>
            <div className="testimonial-footer">
              <span className="author">{testimonial.author}</span>
              <span className="date">{testimonial.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials-navigation">
        <button className="nav-button prev">
          <ArrowLeft />
        </button>
        <div className="nav-indicator">
          <div className="indicator active"></div>
          <div className="indicator"></div>
          <div className="indicator"></div>
        </div>
        <button className="nav-button next">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials; 