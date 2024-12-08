import React, { useState, useEffect } from 'react';
import { FaUser, FaBriefcase, FaGraduationCap, FaTools, FaPlus, FaTrash, FaTimes, FaExclamationCircle, FaLock, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import TemplateSelector from './TemplateSelector';
import './CVBuilder.css';

const CVBuilder = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [activeSection, setActiveSection] = useState('personal');
  const [experiences, setExperiences] = useState([
    { id: 1, title: '', company: '', location: '', startDate: '', endDate: '', description: '' }
  ]);
  const [education, setEducation] = useState([
    { id: 1, degree: '', school: '', location: '', startDate: '', endDate: '', description: '' }
  ]);
  const [skills, setSkills] = useState({
    technical: [],
    soft: [],
    languages: []
  });
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    address: '',
    city: '',
    country: '',
    summary: ''
  });
  const [newSkill, setNewSkill] = useState({
    technical: '',
    soft: '',
    languages: ''
  });
  const [showTemplateDropdown, setShowTemplateDropdown] = useState(false);
  const templates = [
    { id: 'modern', name: 'Modern', primaryColor: '#2563eb' },
    { id: 'professional', name: 'Professional', primaryColor: '#059669' },
    { id: 'creative', name: 'Creative', primaryColor: '#7c3aed' },
    { id: 'minimal', name: 'Minimal', primaryColor: '#475569' }
  ];

  const sections = [
    { id: 'personal', title: 'Personal Info', icon: <FaUser /> },
    { id: 'experience', title: 'Experience', icon: <FaBriefcase /> },
    { id: 'education', title: 'Education', icon: <FaGraduationCap /> },
    { id: 'skills', title: 'Skills', icon: <FaTools /> }
  ];

  const [completedSections, setCompletedSections] = useState({
    personal: false,
    experience: false,
    education: false,
    skills: false
  });

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    localStorage.setItem('selected-template', templateId);
  };

  const canAccessSection = (sectionId) => {
    switch(sectionId) {
      case 'personal':
        return true; // Always accessible
      case 'experience':
        return completedSections.personal;
      case 'education':
        return completedSections.personal && completedSections.experience;
      case 'skills':
        return completedSections.personal && completedSections.experience && completedSections.education;
      default:
        return false;
    }
  };

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleExperienceChange = (id, field, value) => {
    setExperiences(prev => prev.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const handleEducationChange = (id, field, value) => {
    setEducation(prev => prev.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const handleKeyPress = (e, category) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill(category);
    }
  };

  const handleAddSkill = (category) => {
    if (newSkill[category].trim()) {
      setSkills(prev => ({
        ...prev,
        [category]: [...prev[category], newSkill[category].trim()]
      }));
      setNewSkill(prev => ({
        ...prev,
        [category]: ''
      }));
    }
  };

  const handleRemoveSkill = (category, index) => {
    setSkills(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = () => {
    // Save all data to localStorage
    const cvData = {
      personalInfo,
      experiences,
      education,
      skills
    };
    localStorage.setItem('cv-data', JSON.stringify(cvData));
    navigate('/success');
  };

  const addExperience = () => {
    const newId = experiences.length + 1;
    setExperiences([
      ...experiences,
      { id: newId, title: '', company: '', location: '', startDate: '', endDate: '', description: '' }
    ]);
  };

  const removeExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const addEducation = () => {
    const newId = education.length + 1;
    setEducation([
      ...education,
      { id: newId, degree: '', school: '', location: '', startDate: '', endDate: '', description: '' }
    ]);
  };

  const removeEducation = (id) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const isPersonalInfoComplete = () => {
    return (
      personalInfo.fullName.trim() !== '' &&
      personalInfo.dateOfBirth !== '' &&
      personalInfo.gender !== ''
    );
  };

  const isExperienceComplete = () => {
    return experiences.every(exp => 
      exp.title.trim() !== '' &&
      exp.company.trim() !== '' &&
      exp.startDate !== ''
    );
  };

  const isEducationComplete = () => {
    return education.every(edu => 
      edu.degree.trim() !== '' &&
      edu.school.trim() !== '' &&
      edu.startDate !== ''
    );
  };

  const isSkillsComplete = () => {
    return (
      skills.technical.length > 0 ||
      skills.soft.length > 0 ||
      skills.languages.length > 0
    );
  };

  useEffect(() => {
    setCompletedSections({
      personal: isPersonalInfoComplete(),
      experience: isExperienceComplete(),
      education: isEducationComplete(),
      skills: isSkillsComplete()
    });
  }, [personalInfo, experiences, education, skills]);

  const handleNextSection = () => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    const nextSection = sections[currentIndex + 1].id;
    
    if (canAccessSection(nextSection)) {
      setActiveSection(nextSection);
    }
  };

  return (
    <div className="cv-builder">
      {!selectedTemplate ? (
        <div className="template-selection-container">
          <TemplateSelector onSelectTemplate={handleTemplateSelect} />
        </div>
      ) : (
        <>
          <div className="cv-sidebar">
            {sections.map(section => (
              <button
                key={section.id}
                className={`sidebar-item ${activeSection === section.id ? 'active' : ''} 
                           ${!canAccessSection(section.id) ? 'locked' : ''}`}
                onClick={() => canAccessSection(section.id) && setActiveSection(section.id)}
                disabled={!canAccessSection(section.id)}
              >
                <span className="sidebar-icon">{section.icon}</span>
                <span className="sidebar-text">{section.title}</span>
                {!canAccessSection(section.id) && <FaLock className="lock-icon" />}
              </button>
            ))}
          </div>
          
          <div className="cv-content">
            <div className="template-category-selector">
              <div className="current-template">
                <span>Template:</span>
                <button 
                  className="template-toggle"
                  onClick={() => setShowTemplateDropdown(!showTemplateDropdown)}
                >
                  {selectedTemplate.charAt(0).toUpperCase() + selectedTemplate.slice(1)}
                  <FaChevronDown className={`dropdown-icon ${showTemplateDropdown ? 'open' : ''}`} />
                </button>
                {showTemplateDropdown && (
                  <div className="template-dropdown">
                    {templates.map(template => (
                      <button
                        key={template.id}
                        className={`template-option ${selectedTemplate === template.id ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedTemplate(template.id);
                          setShowTemplateDropdown(false);
                          localStorage.setItem('selected-template', template.id);
                        }}
                      >
                        <span className="template-color" style={{ '--template-color': template.primaryColor }} />
                        {template.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="cv-form">
              {activeSection === 'personal' && (
                <div className="form-section">
                  <h2>Personal Information</h2>
                  <div className="form-grid">
                    <div className="form-group required">
                      <label>Full Name</label>
                      <input
                        type="text"
                        value={personalInfo.fullName}
                        onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="form-group">
                      <label>Job Title</label>
                      <input
                        type="text"
                        value={personalInfo.jobTitle}
                        onChange={(e) => handlePersonalInfoChange('jobTitle', e.target.value)}
                        placeholder="Software Engineer"
                      />
                    </div>

                    <div className="form-group required">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        value={personalInfo.dateOfBirth}
                        onChange={(e) => handlePersonalInfoChange('dateOfBirth', e.target.value)}
                      />
                    </div>

                    <div className="form-group required">
                      <label>Gender</label>
                      <select
                        value={personalInfo.gender}
                        onChange={(e) => handlePersonalInfoChange('gender', e.target.value)}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        value={personalInfo.email}
                        onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="tel"
                        value={personalInfo.phone}
                        onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                        placeholder="+1 234 567 890"
                      />
                    </div>

                    <div className="form-group">
                      <label>Nationality</label>
                      <input
                        type="text"
                        value={personalInfo.nationality}
                        onChange={(e) => handlePersonalInfoChange('nationality', e.target.value)}
                        placeholder="Your Nationality"
                      />
                    </div>

                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        value={personalInfo.address}
                        onChange={(e) => handlePersonalInfoChange('address', e.target.value)}
                        placeholder="Street Address"
                      />
                    </div>

                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        value={personalInfo.city}
                        onChange={(e) => handlePersonalInfoChange('city', e.target.value)}
                        placeholder="City"
                      />
                    </div>

                    <div className="form-group">
                      <label>Country</label>
                      <input
                        type="text"
                        value={personalInfo.country}
                        onChange={(e) => handlePersonalInfoChange('country', e.target.value)}
                        placeholder="Country"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label>Professional Summary</label>
                      <textarea
                        value={personalInfo.summary}
                        onChange={(e) => handlePersonalInfoChange('summary', e.target.value)}
                        placeholder="Write a short summary of your professional background..."
                        rows="4"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Experience Section */}
              {activeSection === 'experience' && (
                <div className="form-section">
                  <div className="section-header">
                    <h2>Work Experience</h2>
                    <button className="add-button" onClick={addExperience}>
                      <FaPlus /> Add Experience
                    </button>
                  </div>
                  
                  {experiences.map((exp, index) => (
                    <div key={exp.id} className="experience-item">
                      <div className="experience-header">
                        <h3>Experience {index + 1}</h3>
                        {experiences.length > 1 && (
                          <button className="remove-button" onClick={() => removeExperience(exp.id)}>
                            <FaTrash />
                          </button>
                        )}
                      </div>
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Job Title</label>
                          <input
                            type="text"
                            value={exp.title}
                            onChange={(e) => handleExperienceChange(exp.id, 'title', e.target.value)}
                            placeholder="Senior Developer"
                          />
                        </div>
                        <div className="form-group">
                          <label>Company</label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                            placeholder="Company Name"
                          />
                        </div>
                        <div className="form-group">
                          <label>Location</label>
                          <input
                            type="text"
                            value={exp.location}
                            onChange={(e) => handleExperienceChange(exp.id, 'location', e.target.value)}
                            placeholder="City, Country"
                          />
                        </div>
                        <div className="form-group">
                          <label>Start Date</label>
                          <input
                            type="month"
                            value={exp.startDate}
                            onChange={(e) => handleExperienceChange(exp.id, 'startDate', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>End Date</label>
                          <input
                            type="month"
                            value={exp.endDate}
                            onChange={(e) => handleExperienceChange(exp.id, 'endDate', e.target.value)}
                          />
                        </div>
                        <div className="form-group full-width">
                          <label>Description</label>
                          <textarea
                            value={exp.description}
                            onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                            placeholder="Describe your responsibilities and achievements..."
                            rows="4"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Education Section */}
              {activeSection === 'education' && (
                <div className="form-section">
                  <div className="section-header">
                    <h2>Education</h2>
                    <button className="add-button" onClick={addEducation}>
                      <FaPlus /> Add Education
                    </button>
                  </div>
                  
                  {education.map((edu, index) => (
                    <div key={edu.id} className="education-item">
                      <div className="education-header">
                        <h3>Education {index + 1}</h3>
                        {education.length > 1 && (
                          <button className="remove-button" onClick={() => removeEducation(edu.id)}>
                            <FaTrash />
                          </button>
                        )}
                      </div>
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Degree</label>
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                            placeholder="Bachelor's in Computer Science"
                          />
                        </div>
                        <div className="form-group">
                          <label>School</label>
                          <input
                            type="text"
                            value={edu.school}
                            onChange={(e) => handleEducationChange(edu.id, 'school', e.target.value)}
                            placeholder="University Name"
                          />
                        </div>
                        <div className="form-group">
                          <label>Location</label>
                          <input
                            type="text"
                            value={edu.location}
                            onChange={(e) => handleEducationChange(edu.id, 'location', e.target.value)}
                            placeholder="City, Country"
                          />
                        </div>
                        <div className="form-group">
                          <label>Start Date</label>
                          <input
                            type="month"
                            value={edu.startDate}
                            onChange={(e) => handleEducationChange(edu.id, 'startDate', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>End Date</label>
                          <input
                            type="month"
                            value={edu.endDate}
                            onChange={(e) => handleEducationChange(edu.id, 'endDate', e.target.value)}
                          />
                        </div>
                        <div className="form-group full-width">
                          <label>Description</label>
                          <textarea
                            value={edu.description}
                            onChange={(e) => handleEducationChange(edu.id, 'description', e.target.value)}
                            placeholder="Describe your studies and achievements..."
                            rows="4"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Section */}
              {activeSection === 'skills' && (
                <div className="form-section">
                  <h2>Skills</h2>
                  <div className="skills-container">
                    <div className="skill-category">
                      <h3>Technical Skills</h3>
                      <div className="skill-input-group">
                        <input
                          type="text"
                          value={newSkill.technical}
                          onChange={(e) => setNewSkill({ ...newSkill, technical: e.target.value })}
                          onKeyPress={(e) => handleKeyPress(e, 'technical')}
                          placeholder="Add a technical skill"
                        />
                        <button 
                          className="add-skill-btn"
                          onClick={() => handleAddSkill('technical')}
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <div className="skills-list">
                        {skills.technical.map((skill, index) => (
                          <div key={index} className="skill-tag">
                            {skill}
                            <button
                              className="remove-skill-btn"
                              onClick={() => handleRemoveSkill('technical', index)}
                            >
                              <FaTimes />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="skill-category">
                      <h3>Soft Skills</h3>
                      <div className="skill-input-group">
                        <input
                          type="text"
                          value={newSkill.soft}
                          onChange={(e) => setNewSkill({ ...newSkill, soft: e.target.value })}
                          onKeyPress={(e) => handleKeyPress(e, 'soft')}
                          placeholder="Add a soft skill"
                        />
                        <button 
                          className="add-skill-btn"
                          onClick={() => handleAddSkill('soft')}
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <div className="skills-list">
                        {skills.soft.map((skill, index) => (
                          <div key={index} className="skill-tag">
                            {skill}
                            <button
                              className="remove-skill-btn"
                              onClick={() => handleRemoveSkill('soft', index)}
                            >
                              <FaTimes />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="skill-category">
                      <h3>Languages</h3>
                      <div className="skill-input-group">
                        <input
                          type="text"
                          value={newSkill.languages}
                          onChange={(e) => setNewSkill({ ...newSkill, languages: e.target.value })}
                          onKeyPress={(e) => handleKeyPress(e, 'languages')}
                          placeholder="Add a language"
                        />
                        <button 
                          className="add-skill-btn"
                          onClick={() => handleAddSkill('languages')}
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <div className="skills-list">
                        {skills.languages.map((skill, index) => (
                          <div key={index} className="skill-tag">
                            {skill}
                            <button
                              className="remove-skill-btn"
                              onClick={() => handleRemoveSkill('languages', index)}
                            >
                              <FaTimes />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="section-navigation">
                {activeSection !== 'skills' ? (
                  <button 
                    className="next-button"
                    onClick={handleNextSection}
                    disabled={!canAccessSection(sections[sections.findIndex(s => s.id === activeSection) + 1].id)}
                  >
                    {canAccessSection(sections[sections.findIndex(s => s.id === activeSection) + 1].id) 
                      ? 'Next Step' 
                      : 'Complete Required Fields'}
                  </button>
                ) : (
                  <button 
                    className="submit-button"
                    onClick={handleSubmit}
                    disabled={!isSkillsComplete()}
                  >
                    Create CV
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CVBuilder; 