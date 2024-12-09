import React, { useState, useEffect } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const LanguagesForm = ({ formData, updateFormData }) => {
  const [languages, setLanguages] = useState([]);
  const [newLanguage, setNewLanguage] = useState({ name: '', level: 'Intermediate' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (formData.languages && formData.languages.length > 0) {
      setLanguages(formData.languages);
    }
  }, [formData.languages]);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Language name must be at least 2 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLanguage(prev => ({ ...prev, [name]: value }));
    
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

  const addLanguage = (e) => {
    e.preventDefault();
    if (newLanguage.name.trim() === '') return;
    
    const error = validateField('name', newLanguage.name);
    if (error) {
      setErrors(prev => ({ ...prev, name: error }));
      return;
    }

    const updatedLanguages = [...languages, { 
      name: newLanguage.name.trim(), 
      level: newLanguage.level 
    }];
    setLanguages(updatedLanguages);
    updateFormData(updatedLanguages);
    setNewLanguage({ name: '', level: 'Intermediate' });
    setErrors({});
    setTouched({});
  };

  const removeLanguage = (index) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
    updateFormData(updatedLanguages);
  };

  const inputClasses = "w-full bg-bg-input border border-gray-700 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-500";
  const labelClasses = "block text-sm text-gray-200 mb-1";
  const errorClasses = "text-red-500 text-xs mt-1";

  const commonLanguages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Arabic",
    "Portuguese",
    "Italian",
    "Russian"
  ];

  const proficiencyLevels = [
    "Native",
    "Fluent",
    "Advanced",
    "Intermediate",
    "Basic"
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="border-b border-gray-700 pb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Languages</h2>
        <p className="text-gray-400">
          Add the languages you know and your proficiency level in each.
        </p>
      </div>

      {/* Common Languages Suggestions */}
      <div className="bg-gray-800/30 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-300 mb-2">Common Languages</h3>
        <div className="flex flex-wrap gap-2">
          {commonLanguages.map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => {
                if (!languages.some(l => l.name === lang)) {
                  setNewLanguage(prev => ({ ...prev, name: lang }));
                }
              }}
              className="px-3 py-1 text-sm bg-gray-700/50 hover:bg-gray-700 text-gray-300 rounded-full transition-colors"
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Add Language Form */}
      <form onSubmit={addLanguage} className="bg-gray-800/50 rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="languageName" className={labelClasses}>
              Language <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="languageName"
              name="name"
              value={newLanguage.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g., English, Spanish, French"
              className={`${inputClasses} ${errors.name && touched.name ? 'border-red-500' : ''}`}
              required
            />
            {errors.name && touched.name && (
              <p className={errorClasses}>{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="proficiencyLevel" className={labelClasses}>Proficiency Level</label>
            <select
              id="proficiencyLevel"
              name="level"
              value={newLanguage.level}
              onChange={handleChange}
              className={inputClasses}
            >
              {proficiencyLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
          >
            <FaPlus className="w-4 h-4" />
            <span>Add Language</span>
          </button>
        </div>
      </form>

      {/* Languages List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {languages.map((language, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800/30 rounded-lg px-4 py-3"
          >
            <div className="flex flex-col">
              <span className="text-white font-medium">{language.name}</span>
              <span className="text-gray-400 text-sm">{language.level}</span>
            </div>
            <button
              type="button"
              onClick={() => removeLanguage(index)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {languages.length === 0 && (
        <div className="text-center py-6 text-gray-400">
          No languages added yet. Start by adding the languages you know.
        </div>
      )}
    </div>
  );
};

export default LanguagesForm; 