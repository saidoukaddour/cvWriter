import React, { useState, useEffect } from 'react';

const PersonalInfoForm = ({ formData, updateFormData }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    summary: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (formData.personalInfo) {
      setPersonalInfo(formData.personalInfo);
    }
  }, [formData.personalInfo]);

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.length < 2 ? 'Must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
      case 'phone':
        return !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value) 
          ? 'Invalid phone number' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => {
      const updated = { ...prev, [name]: value };
      updateFormData(updated);
      return updated;
    });

    // Validate on change if field has been touched
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

  const inputClasses = "w-full bg-bg-input border border-gray-700 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-500";
  const labelClasses = "block text-sm text-gray-200 mb-1";
  const errorClasses = "text-red-500 text-xs mt-1";

  const renderField = (name, label, type = "text", placeholder = "", required = false) => (
    <div>
      <label htmlFor={name} className={labelClasses}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={personalInfo[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
        placeholder={placeholder}
        className={`${inputClasses} ${errors[name] && touched[name] ? 'border-red-500' : ''}`}
      />
      {errors[name] && touched[name] && (
        <p className={errorClasses}>{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="border-b border-gray-700 pb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Personal Information</h2>
        <p className="text-gray-400">
          Let's start with the basics. Fill in your personal details below to help employers get to know you better. 
          Make sure to use a professional email address and a phone number you can be reached at.
        </p>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderField("firstName", "First Name", "text", "John", true)}
        {renderField("lastName", "Last Name", "text", "Doe", true)}
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderField("email", "Email", "email", "john.doe@example.com", true)}
        {renderField("phone", "Phone Number", "tel", "+1 (234) 567-8900", true)}
      </div>

      {/* Address Field */}
      <div>
        {renderField("address", "Address", "text", "123 Main Street")}
      </div>

      {/* Location Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderField("city", "City", "text", "New York")}
        {renderField("country", "Country", "text", "United States")}
      </div>

      {/* Summary Field */}
      <div>
        <label htmlFor="summary" className={labelClasses}>Professional Summary</label>
        <textarea
          id="summary"
          name="summary"
          value={personalInfo.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          rows="4"
          placeholder="Experienced professional with X years in [industry]. Skilled in [key skills]. Achieved [notable accomplishments]. Seeking to leverage my expertise in..."
          className={`${inputClasses} resize-y min-h-[100px]`}
        />
        {errors.summary && touched.summary && (
          <p className={errorClasses}>{errors.summary}</p>
        )}
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

export default PersonalInfoForm; 