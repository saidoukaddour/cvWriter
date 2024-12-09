import React, { useState } from 'react';
import { FaUser, FaBriefcase, FaGraduationCap, FaLaptopCode, FaUsers, FaLanguage, FaForward } from 'react-icons/fa';
import PersonalInfoForm from '../../components/CVBuilder/PersonalInfoForm';
import ExperienceForm from '../../components/CVBuilder/ExperienceForm';
import EducationForm from '../../components/CVBuilder/EducationForm';
import SkillsForm from '../../components/CVBuilder/SkillsForm';
import SoftSkillsForm from '../../components/CVBuilder/SoftSkillsForm';
import LanguagesForm from '../../components/CVBuilder/LanguagesForm';
import './CVBuilderPage.css';

const CVBuilderPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    experience: [],
    education: [],
    technicalSkills: [],
    softSkills: [],
    languages: []
  });

  const steps = [
    {
      title: 'Personal Information',
      subtitle: 'Start with your basic details',
      icon: <FaUser />,
      component: PersonalInfoForm,
      required: true
    },
    {
      title: 'Work Experience',
      subtitle: 'Add your work history',
      icon: <FaBriefcase />,
      component: ExperienceForm,
      required: false
    },
    {
      title: 'Education',
      subtitle: 'Add your educational background',
      icon: <FaGraduationCap />,
      component: EducationForm,
      required: false
    },
    {
      title: 'Technical Skills',
      subtitle: 'List your technical competencies',
      icon: <FaLaptopCode />,
      component: SkillsForm,
      required: false
    },
    {
      title: 'Soft Skills',
      subtitle: 'Add your interpersonal abilities',
      icon: <FaUsers />,
      component: SoftSkillsForm,
      required: false
    },
    {
      title: 'Languages',
      subtitle: 'Add your language proficiencies',
      icon: <FaLanguage />,
      component: LanguagesForm,
      required: false
    }
  ];

  const handleUpdateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const getCurrentComponent = () => {
    const StepComponent = steps[currentStep - 1].component;
    const sectionName = steps[currentStep - 1].title
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace('&', 'and');
    
    return (
      <StepComponent
        formData={formData}
        updateFormData={(data) => handleUpdateFormData(sectionName, data)}
      />
    );
  };

  const handleSubmit = () => {
    // Here you can handle the final submission of the CV data
    console.log('Final CV Data:', formData);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen bg-nav-bg px-4 py-20 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Steps Progress */}
        <div className="md:hidden mb-6">
          <div className="bg-bg-card rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white text-sm font-medium">
                Step {currentStep} of {steps.length}
              </h2>
              <span className="text-gray-400 text-sm">
                {Math.round((currentStep / steps.length) * 100)}%
              </span>
            </div>
            {/* Progress bar */}
            <div className="h-2 bg-bg-input rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              />
            </div>
            {/* Current step info */}
            <div className="mt-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                {steps[currentStep - 1].icon}
              </div>
              <div className="flex-1">
                <h3 className="text-white text-sm font-medium">
                  {steps[currentStep - 1].title}
                  {currentStep > 1 && currentStep < steps.length && (
                    <span className="ml-2 text-xs text-gray-400">(Optional - Can be skipped)</span>
                  )}
                </h3>
                <p className="text-gray-400 text-xs">
                  {steps[currentStep - 1].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - Hidden on mobile */}
          <div className="hidden md:block w-full md:w-72 shrink-0">
            <div className="bg-bg-card p-4 rounded-lg">
              <div className="flex flex-col space-y-2">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all
                      ${currentStep >= index + 1 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-bg-input text-white hover:bg-opacity-80'}`}
                    onClick={() => setCurrentStep(index + 1)}
                  >
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black/20">
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">
                        {step.title}
                        {index > 0 && index < steps.length - 1 && (
                          <span className="ml-2 text-xs opacity-75">(Optional)</span>
                        )}
                      </div>
                      <div className="text-xs text-gray-400 truncate">{step.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-bg-card rounded-lg p-4 md:p-6">
              <div className="flex flex-col h-full">
                {currentStep > 1 && currentStep < steps.length && (
                  <div className="mb-6 bg-gray-800/50 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaForward className="text-gray-400" />
                      <span className="text-gray-300 text-sm">Want to skip this step? You can always come back to it later.</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(prev => prev + 1)}
                      className="px-4 py-2 text-sm bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center gap-2"
                    >
                      Skip step
                      <FaForward className="w-3 h-3" />
                    </button>
                  </div>
                )}

                <div className="flex-1 mb-6">
                  {getCurrentComponent()}
                </div>
                
                {/* Navigation */}
                <div className="flex justify-between md:justify-end gap-3 pt-4 border-t border-gray-700">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      className="px-4 py-2 text-sm text-white bg-bg-input rounded-md hover:bg-opacity-80 transition-colors"
                    >
                      Previous
                    </button>
                  )}

                  {currentStep < steps.length ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(prev => prev + 1)}
                      className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      Create CV
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVBuilderPage; 