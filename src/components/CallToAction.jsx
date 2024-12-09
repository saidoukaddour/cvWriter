import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CallToAction = ({ onCreateCV }) => {
  return (
    <section className="py-16 md:py-32 px-4 sm:px-8 bg-gradient-to-b from-[rgba(15,23,42,0.98)] to-[rgba(15,23,42,0.95)] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.08] bg-[#00ff87] top-[-200px] right-[-200px] z-0"></div>
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.08] bg-[#60efff] bottom-[-200px] left-[-200px] z-0"></div>

      <div className="max-w-[800px] mx-auto text-center relative z-[1]">
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-6 bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent font-bold leading-tight">
          Ready to build your professional CV?
        </h2>
        <p className="text-base sm:text-lg md:text-[1.2rem] text-[#94a3b8] mb-12 leading-relaxed">
          Join thousands of job seekers who have successfully landed their dream jobs
        </p>
        <button 
          onClick={onCreateCV} 
          className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#00ff87] to-[#60efff] text-[#0f172a] rounded-2xl text-lg font-semibold transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(0,255,135,0.3)] shadow-[0_10px_30px_rgba(0,255,135,0.2)]"
        >
          <span>Create Your CV Now</span>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <div className="flex justify-center gap-16 mt-20 flex-wrap sm:flex-nowrap">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[2rem] sm:text-[2.5rem] font-bold bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent">
              2M+
            </span>
            <span className="text-[#94a3b8] text-base">CVs Created</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[2rem] sm:text-[2.5rem] font-bold bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent">
              95%
            </span>
            <span className="text-[#94a3b8] text-base">Success Rate</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[2rem] sm:text-[2.5rem] font-bold bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent">
              24/7
            </span>
            <span className="text-[#94a3b8] text-base">Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 