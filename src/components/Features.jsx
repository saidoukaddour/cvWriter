import React from 'react';
import { FaEdit, FaSpellCheck, FaShieldAlt, FaPencilAlt, FaFileAlt, FaRobot, FaUserCheck, FaFileWord, FaEnvelope } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaEdit />,
      title: "Easy online resume builder",
      description: "Create an awesome resume in minutes, without leaving your web browser.",
      featured: true
    },
    {
      icon: <FaSpellCheck />,
      title: "Automatic spell-checker",
      description: "Our built-in spell-checker takes care of the grammar for you. Create a resume with zero typos or errors.",
      featured: true
    },
    {
      icon: <FaShieldAlt />,
      title: "Your data is safe",
      description: "Your data is kept private and protected by strong 256-bit encryption."
    },
    {
      icon: <FaPencilAlt />,
      title: "Automatic summary generator",
      description: "Create a powerful resume profile or cover letter in one click. Writer's block is no longer an obstacle. Try for free!",
      featured: true
    },
    {
      icon: <FaFileAlt />,
      title: "Approved templates",
      description: "Professionally-designed resume templates and examples. Just edit and download in 5 minutes."
    },
    {
      icon: <FaRobot />,
      title: "AI pre-written phrases",
      description: "Use the power of AI and data analysis, choose pre-generated effective phrases and keywords."
    },
    {
      icon: <FaUserCheck />,
      title: "Optimized resumes",
      description: "Formats and designs are optimized for resume-filtering algorithms. Ensure humans see your application!"
    },
    {
      icon: <FaFileWord />,
      title: "Multi-format resume options",
      description: "Save your perfect resume in any common format, including Microsoft Word and PDF in a single click."
    },
    {
      icon: <FaEnvelope />,
      title: "Cover letters",
      description: "Our cover letter builder works with the same ease and use of elegant templates as the resume creator."
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[rgba(15,23,42,0.98)] relative w-full">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-center mb-8 sm:mb-12 text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] text-white font-bold max-w-[600px] mx-auto leading-tight">
          Features designed to help you win your dream job
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-[5px] hover:border-[#60efff]/20
                ${index === 0 ? 'sm:col-span-2' : ''}
                ${index === 1 ? 'sm:col-span-2' : ''}
                ${index === 2 ? 'sm:col-span-1' : ''}
                ${index === 3 ? 'sm:col-span-2' : ''}
                ${index === 4 ? 'sm:col-span-1' : ''}
                ${index === 5 ? 'sm:col-span-1' : ''}
                ${index === 6 ? 'sm:col-span-1' : ''}
                ${index === 7 ? 'sm:col-span-1' : ''}
                ${index === 8 ? 'sm:col-span-1' : ''}`}
            >
              <div className="text-[1.25rem] sm:text-[1.35rem] md:text-[1.5rem] text-[#00ff87] mb-3 sm:mb-4 inline-block drop-shadow-[0_0_10px_rgba(0,255,135,0.3)]">
                {feature.icon}
              </div>
              <h3 className="text-white text-[1rem] sm:text-[1.05rem] md:text-[1.1rem] mb-2 sm:mb-3 font-semibold">
                {feature.title}
              </h3>
              <p className="text-[#94a3b8] text-[0.8rem] sm:text-[0.825rem] md:text-[0.85rem] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 