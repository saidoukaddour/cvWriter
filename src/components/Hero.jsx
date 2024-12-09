import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaCheck, 
  FaTimes,
  FaBriefcase,
  FaGraduationCap,
  FaUser,
  FaLaptopCode,
  FaPalette,
  FaChartLine,
  FaTools,
  FaPen,
  FaUsers,
  FaHeadset,
  FaLanguage,
  FaProjectDiagram,
  FaExclamationTriangle,
  FaTrash,
  FaPlus
} from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";

const ConfirmDialog = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="confirm-overlay" onClick={onClose}>
      <div className="confirm-dialog" onClick={e => e.stopPropagation()}>
        <div className="confirm-icon">
          <FaExclamationTriangle />
        </div>
        <h3>Are you sure?</h3>
        <p>Your progress will be lost if you leave now.</p>
        <div className="confirm-buttons">
          <button className="confirm-button cancel" onClick={onClose}>
            Continue Editing
          </button>
          <button className="confirm-button confirm" onClick={onConfirm}>
            Yes, Leave
          </button>
        </div>
      </div>
    </div>
  );
};

const CVBuilderDialog = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [languages, setLanguages] = useState([]);
  const [languageInput, setLanguageInput] = useState('');
  const [experiences, setExperiences] = useState([{
    id: 1,
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  }]);
  const [education, setEducation] = useState([{
    id: 1,
    degree: '',
    field: '',
    school: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    achievements: ''
  }]);
  const [projects, setProjects] = useState([{
    id: 1,
    name: '',
    role: '',
    url: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  }]);

  const handleAddExperience = () => {
    const newId = experiences.length + 1;
    setExperiences([...experiences, {
      id: newId,
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }]);
  };

  const handleRemoveExperience = (id) => {
    if (experiences.length > 1) {
      setExperiences(experiences.filter(exp => exp.id !== id));
    }
  };

  const handleExperienceChange = (id, field, value) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const handleAddSkill = () => {
    const trimmedSkill = skillInput.trim();
    if (trimmedSkill && !skills.includes(trimmedSkill)) {
      setSkills([...skills, trimmedSkill]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleAddLanguage = () => {
    const trimmedLanguage = languageInput.trim();
    if (trimmedLanguage && !languages.includes(trimmedLanguage)) {
      setLanguages([...languages, trimmedLanguage]);
      setLanguageInput('');
    }
  };

  const handleRemoveLanguage = (languageToRemove) => {
    setLanguages(languages.filter(lang => lang !== languageToRemove));
  };

  const handleAddEducation = () => {
    const newId = education.length + 1;
    setEducation([...education, {
      id: newId,
      degree: '',
      field: '',
      school: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      achievements: ''
    }]);
  };

  const handleRemoveEducation = (id) => {
    if (education.length > 1) {
      setEducation(education.filter(edu => edu.id !== id));
    }
  };

  const handleEducationChange = (id, field, value) => {
    setEducation(education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const handleAddProject = () => {
    const newId = projects.length + 1;
    setProjects([...projects, {
      id: newId,
      name: '',
      role: '',
      url: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }]);
  };

  const handleRemoveProject = (id) => {
    if (projects.length > 1) {
      setProjects(projects.filter(proj => proj.id !== id));
    }
  };

  const handleProjectChange = (id, field, value) => {
    setProjects(projects.map(proj => 
      proj.id === id ? { ...proj, [field]: value } : proj
    ));
  };

  if (!isOpen) return null;

  const handleClose = () => {
    setShowConfirm(true);
  };

  const handleConfirmClose = () => {
    setShowConfirm(false);
    onClose();
    // Reset form state
    setCurrentStep(1);
    setSelectedCategory(null);
  };

  const categories = [
    {
      icon: <FaLaptopCode />,
      title: "Technology",
      description: "Software, IT, Data Science"
    },
    {
      icon: <FaBriefcase />,
      title: "Business",
      description: "Management, Finance, Marketing"
    },
    {
      icon: <FaPalette />,
      title: "Creative",
      description: "Design, Art, Media"
    },
    {
      icon: <FaChartLine />,
      title: "Sales",
      description: "Sales, Customer Service"
    },
    {
      icon: <FaTools />,
      title: "Engineering",
      description: "All Engineering Fields"
    },
    {
      icon: <FaPen />,
      title: "Writing",
      description: "Content, Journalism"
    }
  ];

  const steps = [
    {
      title: "Choose Category",
      subtitle: "Select your professional field",
      icon: <FaBriefcase />
    },
    {
      title: "Personal Information",
      subtitle: "Let's start with your basic details",
      icon: <FaUser />
    },
    {
      title: "Professional Experience",
      subtitle: "Tell us about your work history",
      icon: <FaChartLine />
    },
    {
      title: "Education",
      subtitle: "Share your educational background",
      icon: <FaGraduationCap />
    },
    {
      title: "Projects",
      subtitle: "Showcase your key projects",
      icon: <FaProjectDiagram />
    },
    {
      title: "Technical Skills",
      subtitle: "List your technical expertise",
      icon: <FaLaptopCode />
    },
    {
      title: "Languages",
      subtitle: "Add your language proficiencies",
      icon: <FaLanguage />
    },
    {
      title: "Soft Skills",
      subtitle: "Add your interpersonal abilities",
      icon: <FaUsers />
    }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <div className="categories-grid">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className={`category-card ${selectedCategory === index ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(index)}
                >
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+1 234 567 890" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Professional Title</label>
                <input type="text" placeholder="Software Engineer" />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" placeholder="City, Country" />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header">
                  {experiences.length > 1 && (
                    <button 
                      className="remove-button"
                      onClick={() => handleRemoveExperience(exp.id)}
                    >
                      <FaTrash /> Remove
                    </button>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Job Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Software Engineer"
                      value={exp.title}
                      onChange={(e) => handleExperienceChange(exp.id, 'title', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Company</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Tech Corp"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Location</label>
                    <input 
                      type="text" 
                      placeholder="e.g., New York, NY"
                      value={exp.location}
                      onChange={(e) => handleExperienceChange(exp.id, 'location', e.target.value)}
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
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>End Date</label>
                    <input 
                      type="month"
                      value={exp.endDate}
                      disabled={exp.current}
                      onChange={(e) => handleExperienceChange(exp.id, 'endDate', e.target.value)}
                    />
                    <div className="checkbox-group">
                      <input 
                        type="checkbox"
                        id={`current-job-${exp.id}`}
                        checked={exp.current}
                        onChange={(e) => {
                          handleExperienceChange(exp.id, 'current', e.target.checked);
                          if (e.target.checked) {
                            handleExperienceChange(exp.id, 'endDate', '');
                          }
                        }}
                      />
                      <label htmlFor={`current-job-${exp.id}`}>I currently work here</label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Job Description</label>
                  <textarea 
                    placeholder="• Describe your key responsibilities and achievements&#10;• Use bullet points for better readability&#10;• Focus on quantifiable results"
                    rows="4"
                    value={exp.description}
                    onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                  ></textarea>
                </div>
              </div>
            ))}
            
            <div className="add-button-container">
              <button 
                className="add-button"
                onClick={handleAddExperience}
              >
                <FaPlus /> Add Experience
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-content">
            {education.map((edu, index) => (
              <div key={edu.id} className="experience-item">
                <div className="experience-header">
                  {education.length > 1 && (
                    <button 
                      className="remove-button"
                      onClick={() => handleRemoveEducation(edu.id)}
                    >
                      <FaTrash /> Remove
                    </button>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Degree Level</label>
                    <select
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                    >
                      <option value="">Select Degree Level</option>
                      <option value="high_school">High School</option>
                      <option value="associate">Associate's Degree</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">Ph.D.</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Field of Study</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Computer Science"
                      value={edu.field}
                      onChange={(e) => handleEducationChange(edu.id, 'field', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Institution</label>
                    <input 
                      type="text" 
                      placeholder="University Name"
                      value={edu.school}
                      onChange={(e) => handleEducationChange(edu.id, 'school', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input 
                      type="text" 
                      placeholder="City, Country"
                      value={edu.location}
                      onChange={(e) => handleEducationChange(edu.id, 'location', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
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
                      disabled={edu.current}
                      onChange={(e) => handleEducationChange(edu.id, 'endDate', e.target.value)}
                    />
                    <div className="checkbox-group">
                      <input 
                        type="checkbox"
                        id={`current-education-${edu.id}`}
                        checked={edu.current}
                        onChange={(e) => {
                          handleEducationChange(edu.id, 'current', e.target.checked);
                          if (e.target.checked) {
                            handleEducationChange(edu.id, 'endDate', '');
                          }
                        }}
                      />
                      <label htmlFor={`current-education-${edu.id}`}>I am currently studying here</label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Academic Achievements</label>
                  <textarea 
                    placeholder="• List relevant coursework, projects, or achievements&#10;• Include GPA if notable&#10;• Mention any honors or awards"
                    rows="4"
                    value={edu.achievements}
                    onChange={(e) => handleEducationChange(edu.id, 'achievements', e.target.value)}
                  ></textarea>
                </div>
              </div>
            ))}

            <div className="add-button-container">
              <button 
                className="add-button"
                onClick={handleAddEducation}
              >
                <FaPlus /> Add Education
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="step-content">
            {projects.map((project, index) => (
              <div key={project.id} className="experience-item">
                <div className="experience-header">
                  {projects.length > 1 && (
                    <button 
                      className="remove-button"
                      onClick={() => handleRemoveProject(project.id)}
                    >
                      <FaTrash /> Remove
                    </button>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Project Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g., E-commerce Website"
                      value={project.name}
                      onChange={(e) => handleProjectChange(project.id, 'name', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Role</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Lead Developer"
                      value={project.role}
                      onChange={(e) => handleProjectChange(project.id, 'role', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Project URL</label>
                    <input 
                      type="url" 
                      placeholder="https://..."
                      value={project.url}
                      onChange={(e) => handleProjectChange(project.id, 'url', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Start Date</label>
                    <input 
                      type="month"
                      value={project.startDate}
                      onChange={(e) => handleProjectChange(project.id, 'startDate', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>End Date</label>
                    <input 
                      type="month"
                      value={project.endDate}
                      disabled={project.current}
                      onChange={(e) => handleProjectChange(project.id, 'endDate', e.target.value)}
                    />
                    <div className="checkbox-group">
                      <input 
                        type="checkbox"
                        id={`current-project-${project.id}`}
                        checked={project.current}
                        onChange={(e) => {
                          handleProjectChange(project.id, 'current', e.target.checked);
                          if (e.target.checked) {
                            handleProjectChange(project.id, 'endDate', '');
                          }
                        }}
                      />
                      <label htmlFor={`current-project-${project.id}`}>This is an ongoing project</label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Project Description</label>
                  <textarea 
                    placeholder="• Describe the project's purpose and your role&#10;• List key features and technologies used&#10;• Highlight achievements and impact&#10;• Mention any challenges overcome"
                    rows="4"
                    value={project.description}
                    onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)}
                  ></textarea>
                </div>
              </div>
            ))}

            <div className="add-button-container">
              <button 
                className="add-button"
                onClick={handleAddProject}
              >
                <FaPlus /> Add Project
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="step-content">
            <div className="skills-section">
              <div className="form-group">
                <label>Add Technical Skills</label>
                <div className="skills-input-group">
                  <input 
                    type="text" 
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    placeholder="Type a skill (e.g., JavaScript, React, Node.js)"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddSkill();
                      }
                    }}
                  />
                  <button 
                    className="add-skill-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddSkill();
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="skills-tags">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-tag">
                    {skill}
                    <button 
                      className="remove-skill"
                      onClick={() => handleRemoveSkill(skill)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="step-content">
            <div className="languages-section">
              <div className="form-group">
                <label>Add Languages</label>
                <div className="skills-input-group">
                  <input 
                    type="text" 
                    value={languageInput}
                    onChange={(e) => setLanguageInput(e.target.value)}
                    placeholder="Type a language (e.g., English - Fluent, Spanish - Intermediate)"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddLanguage();
                      }
                    }}
                  />
                  <button 
                    className="add-skill-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddLanguage();
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="skills-tags">
                {languages.map((language, index) => (
                  <div key={index} className="skill-tag">
                    {language}
                    <button 
                      className="remove-skill"
                      onClick={() => handleRemoveLanguage(language)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="step-content">
            <div className="skills-section">
              <div className="form-group">
                <label>Select Your Soft Skills</label>
                <div className="skills-grid">
                  {[
                    'Leadership', 'Team Work', 'Problem Solving',
                    'Time Management', 'Adaptability', 'Critical Thinking',
                    'Communication', 'Creativity', 'Emotional Intelligence',
                    'Decision Making', 'Conflict Resolution', 'Presentation',
                    'Organization', 'Flexibility', 'Attention to Detail'
                  ].map((skill, index) => (
                    <div key={index} className="skill-checkbox">
                      <input type="checkbox" id={`soft-skill-${index}`} />
                      <label htmlFor={`soft-skill-${index}`}>{skill}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dialog-overlay" onClick={handleClose}>
      <div className="dialog-content" onClick={e => e.stopPropagation()}>
        <button className="dialog-close" onClick={handleClose}>
          <FaTimes />
        </button>

        <div className="dialog-sidebar">
          <div className="steps-indicator">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`step-dot ${currentStep >= index + 1 ? 'active' : ''}`}
                onClick={() => setCurrentStep(index + 1)}
              >
                <span className="step-number">{step.icon}</span>
                <div className="step-info">
                  <span className="step-label">{step.title}</span>
                  <span className="step-subtitle">{step.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dialog-main">
          <div className="dialog-header">
            <h2>{steps[currentStep - 1].title}</h2>
            <p>{steps[currentStep - 1].subtitle}</p>
          </div>

          <form className="cv-form" onSubmit={(e) => e.preventDefault()}>
            {renderStepContent()}
            
            <div className="form-navigation">
              {currentStep > 1 && (
                <button 
                  type="button" 
                  className="nav-button prev-step"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                >
                  Previous Step
                </button>
              )}
              {currentStep < steps.length ? (
                <button 
                  type="button" 
                  className="nav-button next-step"
                  onClick={() => {
                    if (currentStep === 1 && selectedCategory === null) {
                      alert('Please select a category first');
                      return;
                    }
                    setCurrentStep(prev => prev + 1);
                  }}
                >
                  Next Step
                  <FaArrowRight />
                </button>
              ) : (
                <button type="submit" className="nav-button next-step">
                  Create CV
                  <FaArrowRight />
                </button>
              )}
            </div>
          </form>
        </div>

        <ConfirmDialog 
          isOpen={showConfirm}
          onClose={() => setShowConfirm(false)}
          onConfirm={handleConfirmClose}
        />
      </div>
    </div>
  );
};

const Hero = ({ isDialogOpen, onOpenDialog, onCloseDialog }) => {
  return (
    <div className="min-h-[calc(100vh-60px)] py-24 px-8 relative overflow-hidden flex items-center bg-[#0f172a]">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-5 text-white font-extrabold">
            Create Your Professional CV <span className="bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent">in Minutes</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl">
            Stand out from the crowd with our professional CV builder
          </p>
          
          <div className="flex gap-8 mb-12 flex-wrap">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <FaCheck className="text-[#00ff87]" />
              <span>Professional Templates</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <FaCheck className="text-[#00ff87]" />
              <span>Easy to Customize</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <FaCheck className="text-[#00ff87]" />
              <span>Download as PDF</span>
            </div>
          </div>

          <div className="flex gap-6 mb-16 flex-wrap">
            <button 
              onClick={onOpenDialog} 
              className="inline-flex items-center gap-3 px-7 py-3 rounded-lg font-semibold text-[0.95rem] bg-gradient-to-r from-[#00ff87] to-[#60efff] text-slate-900 shadow-[0_10px_30px_rgba(0,255,135,0.2)] hover:translate-y-[-3px] hover:shadow-[0_20px_40px_rgba(0,255,135,0.3)] transition-all duration-300"
            >
              Create Your CV Now
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <Link 
              to="/templates" 
              className="inline-flex items-center gap-3 px-7 py-3 rounded-lg font-semibold text-[0.95rem] bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:translate-y-[-3px] transition-all duration-300"
            >
              View Templates
            </Link>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between gap-6 p-6 bg-white/[0.03] border border-white/[0.05] rounded-2xl backdrop-blur-[10px] transition-all duration-300 hover:bg-white/[0.05] hover:translate-y-[-5px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex-wrap md:flex-nowrap">
            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/[0.03] flex-1">
              <FaUsers className="text-2xl text-[#00ff87] filter drop-shadow-[0_0_10px_rgba(0,255,135,0.3)] animate-pulse" />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent">
                  2M+
                </h3>
                <p className="text-slate-400 text-sm font-medium">Active Users</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/[0.03] flex-1">
              <FaChartLine className="text-2xl text-[#00ff87] filter drop-shadow-[0_0_10px_rgba(0,255,135,0.3)] animate-pulse" />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent">
                  95%
                </h3>
                <p className="text-slate-400 text-sm font-medium">Success Rate</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/[0.03] flex-1">
              <FaHeadset className="text-2xl text-[#00ff87] filter drop-shadow-[0_0_10px_rgba(0,255,135,0.3)] animate-pulse" />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent">
                  24/7
                </h3>
                <p className="text-slate-400 text-sm font-medium">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CVBuilderDialog 
        isOpen={isDialogOpen} 
        onClose={onCloseDialog} 
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-15 bg-[#00ff87] top-[-100px] right-[-100px] animate-float delay-[-5s]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-15 bg-[#60efff] bottom-[-100px] left-[-100px] animate-float"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-15 bg-gradient-to-r from-[#00ff87] to-[#60efff] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float delay-[-2.5s]"></div>
      </div>
    </div>
  );
};

export default Hero; 