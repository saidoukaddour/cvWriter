import React from 'react';
import { useNavigate } from 'react-router-dom';

const FinalizeForm = ({ formData }) => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      // Here you would typically send the formData to your backend
      console.log('Submitting CV data:', formData);
      
      // For now, we'll just simulate success and redirect
      navigate('/success');
    } catch (error) {
      console.error('Error submitting CV:', error);
      alert('There was an error creating your CV. Please try again.');
    }
  };

  return (
    <div className="form-section">
      <div className="preview-section">
        <h3>Personal Information</h3>
        <div className="preview-content">
          <p><strong>Name:</strong> {formData.personalInfo?.firstName} {formData.personalInfo?.lastName}</p>
          <p><strong>Email:</strong> {formData.personalInfo?.email}</p>
          <p><strong>Phone:</strong> {formData.personalInfo?.phone}</p>
          <p><strong>Location:</strong> {formData.personalInfo?.city}, {formData.personalInfo?.country}</p>
        </div>

        <h3>Work Experience</h3>
        <div className="preview-content">
          {formData.experience?.map((exp, index) => (
            <div key={index} className="preview-item">
              <h4>{exp.position} at {exp.company}</h4>
              <p>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
              <p>{exp.location}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>

        <h3>Education</h3>
        <div className="preview-content">
          {formData.education?.map((edu, index) => (
            <div key={index} className="preview-item">
              <h4>{edu.degree} in {edu.field}</h4>
              <p>{edu.school}, {edu.location}</p>
              <p>{edu.startDate} - {edu.current ? 'Present' : edu.endDate}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>

        <h3>Skills</h3>
        <div className="preview-content">
          <div className="skills-preview">
            {formData.skills?.map((skill, index) => (
              <div key={index} className="skill-tag">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="submit-section">
        <button type="button" className="submit-button" onClick={handleSubmit}>
          Create My CV
        </button>
      </div>

      <style jsx>{`
        .preview-section {
          background: #f8fafc;
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .preview-section h3 {
          color: #1e293b;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e2e8f0;
        }

        .preview-content {
          margin-bottom: 2rem;
        }

        .preview-item {
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .preview-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .preview-item h4 {
          color: #334155;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .preview-item p {
          color: #64748b;
          margin-bottom: 0.25rem;
        }

        .skills-preview {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: white;
          border-radius: 9999px;
          font-size: 0.875rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .skill-name {
          font-weight: 500;
          color: #334155;
        }

        .skill-level {
          color: #64748b;
          font-size: 0.75rem;
        }

        .submit-section {
          text-align: center;
          margin-top: 2rem;
        }

        .submit-button {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          font-weight: 600;
          padding: 1rem 2rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }
      `}</style>
    </div>
  );
};

export default FinalizeForm; 