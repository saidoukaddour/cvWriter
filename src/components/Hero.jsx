import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaCheck,
  FaUsers,
  FaChartLine,
  FaHeadset
} from 'react-icons/fa';

const Hero = ({ onCreateCV }) => {
  return (
    <div className="min-h-[calc(100vh-60px)] py-24 px-8 relative overflow-hidden flex items-center bg-[#0f172a]">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-5 text-white font-extrabold">
            Create Your Professional CV <span className="bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent">in Minutes</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl">
            Stand out from the crowd with our professional CV builder
          </p>
          
          <div className="flex gap-8 mb-12 flex-wrap">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <FaCheck className="text-[#00ff87]" />
              <span>Professional Templates</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <FaCheck className="text-[#00ff87]" />
              <span>Easy to Customize</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <FaCheck className="text-[#00ff87]" />
              <span>Download as PDF</span>
            </div>
          </div>

          <div className="flex gap-6 mb-16 flex-wrap">
            <button 
              onClick={onCreateCV} 
              className="inline-flex items-center gap-3 px-7 py-3 rounded-lg font-semibold text-[0.95rem] bg-gradient-to-r from-[#00ff87] to-[#60efff] text-slate-900 shadow-[0_10px_30px_rgba(0,255,135,0.2)] hover:translate-y-[-3px] hover:shadow-[0_20px_40px_rgba(0,255,135,0.3)] transition-all duration-300"
            >
              Create Your CV Now
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <Link 
              to="/templates" 
              className="inline-flex items-center gap-3 px-7 py-3 rounded-lg font-semibold text-[0.95rem] bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:translate-y-[-3px] transition-all duration-300"
            >
              View Templates
            </Link>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between gap-6 p-6 bg-white/[0.03] border border-white/[0.05] rounded-2xl backdrop-blur-[10px] transition-all duration-300 hover:bg-white/[0.05] hover:translate-y-[-5px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex-wrap md:flex-nowrap">
            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/[0.03] flex-1">
              <FaUsers className="text-2xl text-[#00ff87] filter drop-shadow-[0_0_10px_rgba(0,255,135,0.3)] animate-pulse" />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent">
                  2M+
                </h3>
                <p className="text-slate-400 text-sm font-medium">Active Users</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/[0.03] flex-1">
              <FaChartLine className="text-2xl text-[#00ff87] filter drop-shadow-[0_0_10px_rgba(0,255,135,0.3)] animate-pulse" />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent">
                  95%
                </h3>
                <p className="text-slate-400 text-sm font-medium">Success Rate</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/[0.03] flex-1">
              <FaHeadset className="text-2xl text-[#00ff87] filter drop-shadow-[0_0_10px_rgba(0,255,135,0.3)] animate-pulse" />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent">
                  24/7
                </h3>
                <p className="text-slate-400 text-sm font-medium">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-15 bg-[#00ff87] top-[-100px] right-[-100px] animate-float delay-[-5s]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-15 bg-[#60efff] bottom-[-100px] left-[-100px] animate-float"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-15 bg-gradient-to-r from-[#00ff87] to-[#60efff] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float delay-[-2.5s]"></div>
      </div>
    </div>
  );
};

export default Hero; 