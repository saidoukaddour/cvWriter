import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h3>CV Builder</h3>
          <p>Create stunning, professional CVs with our easy-to-use builder. Stand out from the crowd and land your dream job.</p>
          <div className="made-with">
            <span>Made with</span>
            <FaHeart className="heart-icon" />
            <span>by Your Name</span>
          </div>
        </div>
        
        <div className="footer-section links">
          <h4>Quick Access</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-cv">Create CV</Link>
            </li>
            <li>
              <Link to="/templates">Templates</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section connect">
          <h4>Let's Connect</h4>
          <p>Follow us on social media and stay updated</p>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:your.email@example.com" className="social-link">
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} CV Builder. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 