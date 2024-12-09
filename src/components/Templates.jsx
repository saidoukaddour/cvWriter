import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsBriefcase, BsPalette, BsLightning, BsFileText } from 'react-icons/bs';

const Templates = () => {
  const templates = [
    { 
      id: 1, 
      name: 'Professional',
      icon: <BsBriefcase style={{ color: 'var(--hover-color)' }} className="text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] transition-all duration-300 z-[1] opacity-90 group-hover:scale-110 group-hover:filter group-hover:drop-shadow-[0_0_15px_var(--hover-color)] group-hover:opacity-100" />,
      color: '#00ff87'
    },
    { 
      id: 2, 
      name: 'Creative',
      icon: <BsPalette style={{ color: 'var(--hover-color)' }} className="text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] transition-all duration-300 z-[1] opacity-90 group-hover:scale-110 group-hover:filter group-hover:drop-shadow-[0_0_15px_var(--hover-color)] group-hover:opacity-100" />,
      color: '#60efff'
    },
    { 
      id: 3, 
      name: 'Modern',
      icon: <BsLightning style={{ color: 'var(--hover-color)' }} className="text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] transition-all duration-300 z-[1] opacity-90 group-hover:scale-110 group-hover:filter group-hover:drop-shadow-[0_0_15px_var(--hover-color)] group-hover:opacity-100" />,
      color: '#a855f7'
    },
    { 
      id: 4, 
      name: 'Simple',
      icon: <BsFileText style={{ color: 'var(--hover-color)' }} className="text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] transition-all duration-300 z-[1] opacity-90 group-hover:scale-110 group-hover:filter group-hover:drop-shadow-[0_0_15px_var(--hover-color)] group-hover:opacity-100" />,
      color: '#f43f5e'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-[#0f172a] text-center" id="templates">
      <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
        Choose Your Template
      </h2>
      <p className="text-white/80 text-sm sm:text-base mb-8 sm:mb-12">
        Select from our professionally designed templates
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-[1000px] mx-auto">
        {templates.map(template => (
          <div 
            key={template.id} 
            className="group bg-white/[0.03] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 transition-all duration-300 border border-white/[0.05] hover:-translate-y-[5px] hover:bg-white/[0.05] hover:border-white/10"
            style={{ '--hover-color': template.color }}
          >
            <div className="aspect-[1.4] flex items-center justify-center bg-white/[0.02] rounded-md sm:rounded-lg mb-2 sm:mb-3 md:mb-4 transition-all duration-300 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-[0.08]" style={{ '--hover-color': template.color }}>
              {template.icon}
            </div>
            <h3 className="text-white text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] font-medium my-2 sm:my-3">
              {template.name}
            </h3>
            <button className="w-full flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl sm:rounded-3xl text-[0.8rem] sm:text-[0.85rem] md:text-[0.9rem] font-semibold bg-gradient-to-r from-primary to-secondary text-[#0f172a] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,255,135,0.15)]">
              <AiOutlineCheck className="text-sm sm:text-base" />
              Use Template
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Templates; 