import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsBriefcase, BsPalette, BsLightning, BsFileText } from 'react-icons/bs';
import './Templates.css';

const Templates = () => {
  const templates = [
    { 
      id: 1, 
      name: 'Professional',
      icon: <BsBriefcase className="template-icon" />,
      color: '#00ff87'
    },
    { 
      id: 2, 
      name: 'Creative',
      icon: <BsPalette className="template-icon" />,
      color: '#60efff'
    },
    { 
      id: 3, 
      name: 'Modern',
      icon: <BsLightning className="template-icon" />,
      color: '#a855f7'
    },
    { 
      id: 4, 
      name: 'Simple',
      icon: <BsFileText className="template-icon" />,
      color: '#f43f5e'
    }
  ];

  return (
    <section className="templates" id="templates">
      <h2>Choose Your Template</h2>
      <p>Select from our professionally designed templates</p>
      <div className="templates-grid">
        {templates.map(template => (
          <div key={template.id} className="template-card">
            <div className="template-preview" style={{ '--hover-color': template.color }}>
              {template.icon}
            </div>
            <h3>{template.name}</h3>
            <button className="use-template-btn">
              <AiOutlineCheck className="template-btn-icon" />
              Use Template
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Templates; 