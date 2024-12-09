import React from 'react';
import { FaStar } from 'react-icons/fa';

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-[1]">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-[1]">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      title: "Auto deductions and refunds",
      text: "I chose this platform to develop a CV. However after 7 days automated deduction was done. I panicked and did...",
      author: "Pranav Phunde",
      date: "1 day ago"
    },
    {
      rating: 5,
      title: "Pretty alright",
      text: "Other than the 2.95 fee for the resume, it is a great program and helps create great resumes.",
      author: "Steven",
      date: "2 days ago"
    },
    {
      rating: 5,
      title: "I didn't realize I was being charged",
      text: "I didn't realize I was being charged monthly, they refunded most of the money I was charged which I really...",
      author: "Beau Flak",
      date: "3 days ago"
    }
  ];

  return (
    <section className="py-16 bg-[#0f172a] relative overflow-hidden min-h-auto flex flex-col justify-center">
      {/* Background blobs */}
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.08] bg-[#00ff87] top-[-200px] left-[-200px] animate-float delay-[-5s]"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.08] bg-[#60efff] bottom-[-200px] right-[-200px] animate-float"></div>

      <div className="text-center max-w-[800px] mx-auto mb-12 relative z-[1] px-4">
        <h2 className="text-[2.2rem] mb-8 bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent leading-tight font-bold drop-shadow-[0_0_30px_rgba(96,239,255,0.2)]">
          Reviewed by the community. Trusted by professionals
        </h2>
        
        <div className="flex flex-col items-center gap-4 p-6 bg-white/[0.03] rounded-3xl border border-white/[0.05] backdrop-blur-[10px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform transition-all duration-300 hover:-translate-y-[5px] hover:border-[#60efff]/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]">
          <div className="text-[2rem] font-bold bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent tracking-[-1px]">
            4.5 out of 5
          </div>
          <div className="flex gap-2 text-[#00ff87] text-[1.2rem]">
            {[1, 2, 3, 4].map((_, index) => (
              <FaStar key={index} className="drop-shadow-[0_0_8px_rgba(0,255,135,0.4)] animate-pulse" />
            ))}
            <FaStar className="drop-shadow-[0_0_8px_rgba(0,255,135,0.4)] animate-pulse opacity-50" />
          </div>
          <div className="text-[0.95rem] text-[#94a3b8] font-medium">
            based on 52,435 reviews
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto relative z-[1] px-4">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="group bg-white/[0.02] backdrop-blur-[10px] border border-white/[0.05] rounded-3xl p-6 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col h-full relative overflow-hidden hover:-translate-y-2 hover:scale-[1.02] hover:bg-white/[0.04] hover:border-[#60efff]/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-[#00ff87] before:to-[#60efff] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
          >
            <div className="flex gap-1.5 text-[#00ff87] mb-4 text-base">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="drop-shadow-[0_0_8px_rgba(0,255,135,0.4)]" />
              ))}
            </div>
            <h3 className="text-white text-[1.1rem] font-semibold mb-3 tracking-[-0.5px]">
              {testimonial.title}
            </h3>
            <p className="text-[#94a3b8] mb-6 leading-relaxed text-[0.95rem] flex-grow">
              {testimonial.text}
            </p>
            <div className="flex justify-between items-center pt-4 border-t border-white/[0.05]">
              <span className="text-white font-medium text-[0.95rem] tracking-[-0.3px]">
                {testimonial.author}
              </span>
              <span className="text-[#94a3b8] text-[0.85rem]">
                {testimonial.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-8 mt-12 relative z-[1]">
        <button className="w-12 h-12 bg-white/[0.03] border border-white/10 text-[#94a3b8] rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 relative overflow-hidden hover:text-white hover:border-transparent hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,255,135,0.2)] group before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#00ff87] before:to-[#60efff] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100">
          <ArrowLeft className="transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-x-0.5" />
        </button>
        <div className="flex gap-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00ff87] scale-[1.3] shadow-[0_0_15px_rgba(0,255,135,0.4)]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer"></div>
        </div>
        <button className="w-12 h-12 bg-white/[0.03] border border-white/10 text-[#94a3b8] rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 relative overflow-hidden hover:text-white hover:border-transparent hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,255,135,0.2)] group before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#00ff87] before:to-[#60efff] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100">
          <ArrowRight className="transform transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials; 