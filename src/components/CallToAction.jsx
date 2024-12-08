import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to build your professional CV?</h2>
        <p>Join thousands of job seekers who have successfully landed their dream jobs</p>
        <Link to="/create-cv" className="cta-button">
          <span>Create Your CV Now</span>
          <FaArrowRight className="arrow-icon" />
        </Link>
        <div className="cta-features">
          <div className="feature">
            <span className="feature-number">2M+</span>
            <span className="feature-text">CVs Created</span>
          </div>
          <div className="feature">
            <span className="feature-number">95%</span>
            <span className="feature-text">Success Rate</span>
          </div>
          <div className="feature">
            <span className="feature-number">24/7</span>
            <span className="feature-text">Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 