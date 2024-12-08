import React, { useState } from 'react';
import { FaPalette } from 'react-icons/fa';
import './TemplateSelector.css';

const TemplateSelector = ({ onSelectTemplate }) => {
  const [hoveredTemplate, setHoveredTemplate] = useState(null);

  const templates = [
    { 
      id: 'modern', 
      name: 'Modern', 
      primaryColor: '#2563eb',
      description: 'Perfect for tech and startup roles. Features a clean layout with modern design elements.',
      utilities: [
        'Optimized for ATS systems',
        'Modern typography and layout',
        'Emphasis on skills and achievements',
        'Perfect for digital/tech industries'
      ]
    },
    { 
      id: 'professional', 
      name: 'Professional', 
      primaryColor: '#059669',
      description: 'Traditional format ideal for corporate and executive positions.',
      utilities: [
        'Classic chronological format',
        'Formal and structured layout',
        'Emphasis on work history',
        'Suitable for all experience levels'
      ]
    },
    { 
      id: 'creative', 
      name: 'Creative', 
      primaryColor: '#7c3aed',
      description: 'Stand out with a unique design for creative industry positions.',
      utilities: [
        'Unique visual elements',
        'Portfolio integration',
        'Showcase creativity',
        'Perfect for design/arts roles'
      ]
    },
    { 
      id: 'minimal', 
      name: 'Minimal', 
      primaryColor: '#475569',
      description: 'Clean and concise format that focuses on essential information.',
      utilities: [
        'Maximum readability',
        'Efficient space usage',
        'Focus on key achievements',
        'Universal applicability'
      ]
    }
  ];

  return (
    <div className="template-selector">
      <div className="template-selector-header">
        <FaPalette />
        <span>Choose Template</span>
      </div>
      <div className="template-options">
        {templates.map(template => (
          <button
            key={template.id}
            className={`template-option ${hoveredTemplate === template.id ? 'active' : ''}`}
            onClick={() => onSelectTemplate(template.id)}
            onMouseEnter={() => setHoveredTemplate(template.id)}
            onMouseLeave={() => setHoveredTemplate(null)}
            style={{ '--template-color': template.primaryColor }}
          >
            <div className="template-option-content">
              <span className="template-color" />
              <span className="template-name">{template.name}</span>
            </div>
            <div className="template-details">
              <p className="template-description">{template.description}</p>
              <ul className="template-utilities">
                {template.utilities.map((utility, index) => (
                  <li key={index}>{utility}</li>
                ))}
              </ul>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector; 