import React, { useState, useEffect } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';

const EducationForm = ({ formData, updateFormData }) => {
  const [education, setEducation] = useState([
    {
      school: '',
      degree: '',
      field: '',
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
    if (formData.education && formData.education.length > 0) {
      setEducation(formData.education);
    }
  }, [formData.education]);

  const validateField = (name, value) => {
    switch (name) {
      case 'school':
        return value.length < 2 ? 'School name must be at least 2 characters' : '';
      case 'degree':
        return value.length < 2 ? 'Degree must be at least 2 characters' : '';
      case 'field':
        return value.length < 2 ? 'Field of study must be at least 2 characters' : '';
      case 'startDate':
        return !value ? 'Start date is required' : '';
      case 'endDate':
        return !value && !education[0].current ? 'End date is required' : '';
      default:
        return '';
    }
  };

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedEducation = education.map((edu, i) => {
      if (i === index) {
        return {
          ...edu,
          [name]: type === 'checkbox' ? checked : value
        };
      }
      return edu;
    });
    setEducation(updatedEducation);
    updateFormData(updatedEducation);

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

  const addEducation = () => {
    const newEducation = {
      school: '',
      degree: '',
      field: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    setEducation(prev => {
      const updated = [...prev, newEducation];
      updateFormData(updated);
      return updated;
    });
  };

  const removeEducation = (index) => {
    setEducation(prev => {
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
        <h2 className="text-2xl font-bold text-white mb-2">Education History</h2>
        <p className="text-gray-400">
          Add your educational background, starting with your most recent degree. Include relevant details about your academic achievements and coursework.
        </p>
      </div>

      {education.map((edu, index) => (
        <div key={index} className="bg-gray-800/50 rounded-lg p-6 space-y-6 relative">
          {index > 0 && (
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
              onClick={() => removeEducation(index)}
            >
              <FaTrash className="w-4 h-4" />
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`school-${index}`} className={labelClasses}>
                School/University <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id={`school-${index}`}
                name="school"
                value={edu.school}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => handleBlur(index, e)}
                placeholder="Harvard University"
                required
                className={`${inputClasses} ${errors[`${index}-school`] && touched[`${index}-school`] ? 'border-red-500' : ''}`}
              />
              {errors[`${index}-school`] && touched[`${index}-school`] && (
                <p className={errorClasses}>{errors[`${index}-school`]}</p>
              )}
            </div>

            <div>
              <label htmlFor={`location-${index}`} className={labelClasses}>Location</label>
              <input
                type="text"
                id={`location-${index}`}
                name="location"
                value={edu.location}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => handleBlur(index, e)}
                placeholder="Cambridge, MA"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`degree-${index}`} className={labelClasses}>
                Degree <span className="text-red-500">*</span>
              </label>
              <select
                id={`degree-${index}`}
                name="degree"
                value={edu.degree}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => handleBlur(index, e)}
                required
                className={`${inputClasses} ${errors[`${index}-degree`] && touched[`${index}-degree`] ? 'border-red-500' : ''}`}
              >
                <option value="">Select Degree</option>
                <option value="High School">High School Diploma</option>
                <option value="Associate">Associate's Degree</option>
                <option value="Bachelor">Bachelor's Degree</option>
                <option value="Master">Master's Degree</option>
                <option value="PhD">Ph.D.</option>
                <option value="Other">Other</option>
              </select>
              {errors[`${index}-degree`] && touched[`${index}-degree`] && (
                <p className={errorClasses}>{errors[`${index}-degree`]}</p>
              )}
            </div>

            <div>
              <label htmlFor={`field-${index}`} className={labelClasses}>
                Field of Study <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id={`field-${index}`}
                name="field"
                value={edu.field}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => handleBlur(index, e)}
                placeholder="Computer Science"
                required
                className={`${inputClasses} ${errors[`${index}-field`] && touched[`${index}-field`] ? 'border-red-500' : ''}`}
              />
              {errors[`${index}-field`] && touched[`${index}-field`] && (
                <p className={errorClasses}>{errors[`${index}-field`]}</p>
              )}
            </div>
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
                value={edu.startDate}
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
                End Date {!edu.current && <span className="text-red-500">*</span>}
              </label>
              <input
                type="month"
                id={`endDate-${index}`}
                name="endDate"
                value={edu.endDate}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => handleBlur(index, e)}
                disabled={edu.current}
                required={!edu.current}
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
              checked={edu.current}
              onChange={(e) => handleChange(index, e)}
              className="w-4 h-4 rounded border-gray-700 text-indigo-600 focus:ring-indigo-500 bg-bg-input"
            />
            <label htmlFor={`current-${index}`} className="text-sm text-gray-200">
              I'm currently studying here
            </label>
          </div>

          <div>
            <label htmlFor={`description-${index}`} className={labelClasses}>Description</label>
            <textarea
              id={`description-${index}`}
              name="description"
              value={edu.description}
              onChange={(e) => handleChange(index, e)}
              onBlur={(e) => handleBlur(index, e)}
              rows="4"
              placeholder="Describe your major achievements, relevant coursework, thesis, or research projects. Include GPA if noteworthy."
              className={`${inputClasses} resize-y min-h-[100px]`}
            />
          </div>
        </div>
      ))}

      <div className="flex justify-center">
        <button
          type="button"
          onClick={addEducation}
          className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
        >
          <FaPlus className="w-4 h-4" />
          <span>Add Another Education</span>
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

export default EducationForm; 