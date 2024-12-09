import React, { useState, useEffect } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const SoftSkillsForm = ({ formData, updateFormData }) => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (formData.softSkills && formData.softSkills.length > 0) {
      setSkills(formData.softSkills);
    }
  }, [formData.softSkills]);

  const validateField = (name, value) => {
    switch (name) {
      case 'skill':
        return value.length < 2 ? 'Skill name must be at least 2 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setNewSkill(value);
    
    if (touched.skill) {
      setErrors(prev => ({
        ...prev,
        skill: validateField('skill', value)
      }));
    }
  };

  const handleBlur = () => {
    setTouched(prev => ({ ...prev, skill: true }));
    setErrors(prev => ({
      ...prev,
      skill: validateField('skill', newSkill)
    }));
  };

  const addSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() === '') return;
    
    const error = validateField('skill', newSkill);
    if (error) {
      setErrors(prev => ({ ...prev, skill: error }));
      return;
    }

    const updatedSkills = [...skills, newSkill.trim()];
    setSkills(updatedSkills);
    updateFormData(updatedSkills);
    setNewSkill('');
    setErrors({});
    setTouched({});
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    updateFormData(updatedSkills);
  };

  const inputClasses = "w-full bg-bg-input border border-gray-700 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-500";
  const labelClasses = "block text-sm text-gray-200 mb-1";
  const errorClasses = "text-red-500 text-xs mt-1";

  const commonSoftSkills = [
    "Communication",
    "Leadership",
    "Problem Solving",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "Emotional Intelligence",
    "Conflict Resolution",
    "Project Management"
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="border-b border-gray-700 pb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Soft Skills</h2>
        <p className="text-gray-400">
          Add your interpersonal and transferable skills that showcase your workplace effectiveness.
        </p>
      </div>

      {/* Common Skills Suggestions */}
      <div className="bg-gray-800/30 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-300 mb-2">Common Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {commonSoftSkills.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => {
                if (!skills.includes(skill)) {
                  setNewSkill(skill);
                }
              }}
              className="px-3 py-1 text-sm bg-gray-700/50 hover:bg-gray-700 text-gray-300 rounded-full transition-colors"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Add Skill Form */}
      <form onSubmit={addSkill} className="bg-gray-800/50 rounded-lg p-6 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="skillName" className={labelClasses}>
              Skill Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="skillName"
              value={newSkill}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g., Communication, Leadership, Problem Solving"
              className={`${inputClasses} ${errors.skill && touched.skill ? 'border-red-500' : ''}`}
              required
            />
            {errors.skill && touched.skill && (
              <p className={errorClasses}>{errors.skill}</p>
            )}
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="h-[38px] px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors flex items-center gap-2"
            >
              <FaPlus className="w-4 h-4" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </form>

      {/* Skills List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800/30 rounded-lg px-4 py-3"
          >
            <span className="text-white">{skill}</span>
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {skills.length === 0 && (
        <div className="text-center py-6 text-gray-400">
          No soft skills added yet. Start by adding your key interpersonal abilities.
        </div>
      )}
    </div>
  );
};

export default SoftSkillsForm; 