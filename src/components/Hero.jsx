import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaCheck, 
  FaRegFileAlt, 
  FaChartLine, 
  FaHeadset,
  FaUsers 
} from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Create Your Professional CV <span className="gradient-text">in Minutes</span></h1>
          <p className="hero-subtitle">Stand out from the crowd with our professional CV builder</p>
          
          <div className="hero-features">
            <div className="feature-item">
              <FaCheck className="feature-icon" />
              <span>Professional Templates</span>
            </div>
            <div className="feature-item">
              <FaCheck className="feature-icon" />
              <span>Easy to Customize</span>
            </div>
            <div className="feature-item">
              <FaCheck className="feature-icon" />
              <span>Download as PDF</span>
            </div>
          </div>

          <div className="hero-cta">
            <Link to="/create-cv" className="cta-button primary">
              Create Your CV Now
              <FaArrowRight className="arrow-icon" />
            </Link>
            <Link to="/templates" className="cta-button secondary">
              View Templates
            </Link>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stats-container">
            <div className="stat-item">
              <FaUsers className="stat-icon pulse" />
              <div className="stat-text">
                <h3>2M+</h3>
                <p>Active Users</p>
              </div>
            </div>
            <div className="stat-item">
              <FaChartLine className="stat-icon pulse" />
              <div className="stat-text">
                <h3>95%</h3>
                <p>Success Rate</p>
              </div>
            </div>
            <div className="stat-item">
              <FaHeadset className="stat-icon pulse" />
              <div className="stat-text">
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>
    </div>
  );
};

export default Hero; 