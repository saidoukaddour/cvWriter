import React, { useState, useEffect } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const SkillsForm = ({ formData, updateFormData }) => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: '', level: 'Intermediate' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (formData.technicalSkills && formData.technicalSkills.length > 0) {
      setSkills(formData.technicalSkills);
    }
  }, [formData.technicalSkills]);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Skill name must be at least 2 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSkill(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const addSkill = (e) => {
    e.preventDefault();
    if (newSkill.name.trim() === '') return;
    
    const error = validateField('name', newSkill.name);
    if (error) {
      setErrors(prev => ({ ...prev, name: error }));
      return;
    }

    const updatedSkills = [...skills, newSkill];
    setSkills(updatedSkills);
    updateFormData(updatedSkills);
    setNewSkill({ name: '', level: 'Intermediate' });
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

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="border-b border-gray-700 pb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Technical Skills</h2>
        <p className="text-gray-400">
          Add your technical skills and rate your proficiency level. Include programming languages, frameworks, tools, and other technical competencies.
        </p>
      </div>

      {/* Add Skill Form */}
      <form onSubmit={addSkill} className="bg-gray-800/50 rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="skillName" className={labelClasses}>
              Skill Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="skillName"
              name="name"
              value={newSkill.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g., JavaScript, React, Python"
              className={`${inputClasses} ${errors.name && touched.name ? 'border-red-500' : ''}`}
              required
            />
            {errors.name && touched.name && (
              <p className={errorClasses}>{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="skillLevel" className={labelClasses}>Proficiency Level</label>
            <select
              id="skillLevel"
              name="level"
              value={newSkill.level}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
          >
            <FaPlus className="w-4 h-4" />
            <span>Add Skill</span>
          </button>
        </div>
      </form>

      {/* Skills List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800/30 rounded-lg px-4 py-3"
          >
            <div className="flex flex-col">
              <span className="text-white font-medium">{skill.name}</span>
              <span className="text-gray-400 text-sm">{skill.level}</span>
            </div>
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
          No technical skills added yet. Start by adding your key technical competencies.
        </div>
      )}
    </div>
  );
};

export default SkillsForm; 