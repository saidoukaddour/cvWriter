import React from 'react';
import { FaEdit, FaSpellCheck, FaShieldAlt, FaPencilAlt, FaFileAlt, FaRobot, FaUserCheck, FaFileWord, FaEnvelope } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaEdit />,
      title: "Easy online resume builder",
      description: "Create an awesome resume in minutes, without leaving your web browser.",
      featured: true
    },
    {
      icon: <FaSpellCheck />,
      title: "Automatic spell-checker",
      description: "Our built-in spell-checker takes care of the grammar for you. Create a resume with zero typos or errors.",
      featured: true
    },
    {
      icon: <FaShieldAlt />,
      title: "Your data is safe",
      description: "Your data is kept private and protected by strong 256-bit encryption."
    },
    {
      icon: <FaPencilAlt />,
      title: "Automatic summary generator",
      description: "Create a powerful resume profile or cover letter in one click. Writer's block is no longer an obstacle. Try for free!",
      featured: true
    },
    {
      icon: <FaFileAlt />,
      title: "Approved templates",
      description: "Professionally-designed resume templates and examples. Just edit and download in 5 minutes."
    },
    {
      icon: <FaRobot />,
      title: "AI pre-written phrases",
      description: "Use the power of AI and data analysis, choose pre-generated effective phrases and keywords."
    },
    {
      icon: <FaUserCheck />,
      title: "Optimized resumes",
      description: "Formats and designs are optimized for resume-filtering algorithms. Ensure humans see your application!"
    },
    {
      icon: <FaFileWord />,
      title: "Multi-format resume options",
      description: "Save your perfect resume in any common format, including Microsoft Word and PDF in a single click."
    },
    {
      icon: <FaEnvelope />,
      title: "Cover letters",
      description: "Our cover letter builder works with the same ease and use of elegant templates as the resume creator."
    }
  ];

  return (
    <section className="features">
      <div className="features-content">
        <h2>Features designed to help you win your dream job</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${feature.featured ? 'featured' : ''}`}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 