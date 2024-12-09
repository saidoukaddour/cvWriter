import React, { useState, useEffect } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';

const ExperienceForm = ({ formData, updateFormData }) => {
  const [experiences, setExperiences] = useState([
    {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }
  ]);

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (formData.experiences && formData.experiences.length > 0) {
      setExperiences(formData.experiences);
    }
  }, [formData.experiences]);

  const validateField = (name, value) => {
    switch (name) {
      case 'company':
        return value.length < 2 ? 'Company name must be at least 2 characters' : '';
      case 'position':
        return value.length < 2 ? 'Position must be at least 2 characters' : '';
      case 'startDate':
        return !value ? 'Start date is required' : '';
      case 'endDate':
        return !value && !experiences[0].current ? 'End date is required' : '';
      case 'description':
        return value.length < 10 ? 'Please provide a more detailed description (at least 10 characters)' : '';
      default:
        return '';
    }
  };

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedExperiences = experiences.map((exp, i) => {
      if (i === index) {
        return {
          ...exp,
          [name]: type === 'checkbox' ? checked : value
        };
      }
      return exp;
    });
    setExperiences(updatedExperiences);
    updateFormData(updatedExperiences);

    // Validate if field has been touched
    if (touched[`${index}-${name}`]) {
      setErrors(prev => ({
        ...prev,
        [`${index}-${name}`]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (index, e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [`${index}-${name}`]: true
    }));
    setErrors(prev => ({
      ...prev,
      [`${index}-${name}`]: validateField(name, value)
    }));
  };

  const addExperience = () => {
    const newExperience = {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    setExperiences(prev => {
      const updated = [...prev, newExperience];
      updateFormData(updated);
      return updated;
    });
  };

  const removeExperience = (index) => {
    setExperiences(prev => {
      const updated = prev.filter((_, i) => i !== index);
      updateFormData(updated);
      return updated;
    });
  };

  const inputClasses = "w-full bg-bg-input border border-gray-700 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-500";
  const labelClasses = "block text-sm text-gray-200 mb-1";
  const errorClasses = "text-red-500 text-xs mt-1";

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="border-b border-gray-700 pb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Professional Experience</h2>
        <p className="text-gray-400">
          List your work history, starting with your most recent position. Focus on achievements and responsibilities that are relevant to your target role.
          Use action verbs and quantify results where possible.
        </p>
      </div>

      {experiences.map((experience, index) => (
        <div key={index} className="bg-gray-800/50 rounded-lg p-6 space-y-6 relative">
          {index > 0 && (
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
              onClick={() => removeExperience(index)}
            >
              <FaTrash className="w-4 h-4" />
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`company-${index}`} className={labelClasses}>
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id={`company-${index}`}
                name="company"
                value={experience.company}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => handleBlur(index, e)}
                placeholder="Google, Inc."
                required
                className={`${inputClasses} ${errors[`${index}-company`] && touched[`${index}-company`] ? 'border-red-500' : ''}`}
              />
              {errors[`${index}-company`] && touched[`${index}-company`] && (
                <p className={errorClasses}>{errors[`${index}-company`]}</p>
              )}
            </div>

            <div>
              <label htmlFor={`position-${index}`} className={labelClasses}>
                Position Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id={`position-${index}`}
                name="position"
                value={experience.position}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => handleBlur(index, e)}
                placeholder="Senior Software Engineer"
                required
                className={`${inputClasses} ${errors[`${index}-position`] && touched[`${index}-position`] ? 'border-red-500' : ''}`}
              />
              {errors[`${index}-position`] && touched[`${index}-position`] && (
                <p className={errorClasses}>{errors[`${index}-position`]}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor={`location-${index}`} className={labelClasses}>Location</label>
            <input
              type="text"
              id={`location-${index}`}
              name="location"
              value={experience.location}
              onChange={(e) => handleChange(index, e)}
              onBlur={(e) => handleBlur(index, e)}
              placeholder="Mountain View, CA"
              className={inputClasses}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`startDate-${index}`} className={labelClasses}>
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="month"
                id={`startDate-${index}`}
                name="startDate"
                value={experience.startDate}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => handleBlur(index, e)}
                required
                className={`${inputClasses} ${errors[`${index}-startDate`] && touched[`${index}-startDate`] ? 'border-red-500' : ''}`}
              />
              {errors[`${index}-startDate`] && touched[`${index}-startDate`] && (
                <p className={errorClasses}>{errors[`${index}-startDate`]}</p>
              )}
            </div>

            <div>
              <label htmlFor={`endDate-${index}`} className={labelClasses}>
                End Date {!experience.current && <span className="text-red-500">*</span>}
              </label>
              <input
                type="month"
                id={`endDate-${index}`}
                name="endDate"
                value={experience.endDate}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => handleBlur(index, e)}
                disabled={experience.current}
                required={!experience.current}
                className={`${inputClasses} ${errors[`${index}-endDate`] && touched[`${index}-endDate`] ? 'border-red-500' : ''}`}
              />
              {errors[`${index}-endDate`] && touched[`${index}-endDate`] && (
                <p className={errorClasses}>{errors[`${index}-endDate`]}</p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`current-${index}`}
              name="current"
              checked={experience.current}
              onChange={(e) => handleChange(index, e)}
              className="w-4 h-4 rounded border-gray-700 text-indigo-600 focus:ring-indigo-500 bg-bg-input"
            />
            <label htmlFor={`current-${index}`} className="text-sm text-gray-200">
              I currently work here
            </label>
          </div>

          <div>
            <label htmlFor={`description-${index}`} className={labelClasses}>
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id={`description-${index}`}
              name="description"
              value={experience.description}
              onChange={(e) => handleChange(index, e)}
              onBlur={(e) => handleBlur(index, e)}
              rows="4"
              placeholder="• Led a team of 5 developers to deliver a new feature that increased user engagement by 25%
• Optimized database queries resulting in 40% faster page load times
• Implemented automated testing reducing bug reports by 30%
• Mentored 3 junior developers and conducted code reviews"
              className={`${inputClasses} resize-y min-h-[100px] ${errors[`${index}-description`] && touched[`${index}-description`] ? 'border-red-500' : ''}`}
              required
            />
            {errors[`${index}-description`] && touched[`${index}-description`] && (
              <p className={errorClasses}>{errors[`${index}-description`]}</p>
            )}
          </div>
        </div>
      ))}

      <div className="flex justify-center">
        <button
          type="button"
          onClick={addExperience}
          className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
        >
          <FaPlus className="w-4 h-4" />
          <span>Add Another Experience</span>
        </button>
      </div>

      {/* Form Validation Status */}
      {Object.keys(errors).length > 0 && Object.keys(touched).length > 0 && (
        <div className="text-yellow-500 text-sm bg-yellow-500/10 p-3 rounded-md">
          Please fix the validation errors before proceeding.
        </div>
      )}
    </div>
  );
};

export default ExperienceForm; 