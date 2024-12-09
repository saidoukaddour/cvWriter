import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-24 pb-8 px-4 sm:px-8 bg-[rgba(15,23,42,0.95)] border-t border-white/5 text-[#94a3b8] backdrop-blur-[10px] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute w-[300px] h-[300px] rounded-full blur-[150px] opacity-10 bg-[#00ff87] top-[-100px] left-[-100px] z-0"></div>
      <div className="absolute w-[300px] h-[300px] rounded-full blur-[150px] opacity-10 bg-[#60efff] bottom-[-100px] right-[-100px] z-0"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr] gap-8 lg:gap-16 relative z-[1]">
        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent">
            CV Writer
          </h3>
          <p className="text-base leading-7 mb-8">
            Create stunning, professional CVs with our easy-to-use builder. Stand out from the crowd and land your dream job.
          </p>
          <div className="flex items-center gap-2 justify-center md:justify-start text-sm">
            <span>Made with</span>
            <FaHeart className="text-[#ef4444] animate-pulse" />
            <span>by Your Name</span>
          </div>
        </div>
        
        <div className="flex flex-col text-center md:text-left">
          <h4 className="text-xl font-semibold text-white mb-6">Quick Access</h4>
          <ul className="flex flex-col gap-4">
            <li>
              <Link 
                to="/" 
                className="text-[#94a3b8] hover:text-[#60efff] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/create-cv" 
                className="text-[#94a3b8] hover:text-[#60efff] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2"
              >
                Create CV
              </Link>
            </li>
            <li>
              <Link 
                to="/templates" 
                className="text-[#94a3b8] hover:text-[#60efff] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2"
              >
                Templates
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col text-center md:text-left">
          <h4 className="text-xl font-semibold text-white mb-6">Let's Connect</h4>
          <p className="mb-6">Follow us on social media and stay updated</p>
          <div className="flex flex-col gap-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-[#94a3b8] bg-white/[0.02] p-3 rounded-lg transition-all duration-300 hover:bg-white/[0.05] hover:text-white hover:translate-x-1 justify-center md:justify-start"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-[#94a3b8] bg-white/[0.02] p-3 rounded-lg transition-all duration-300 hover:bg-white/[0.05] hover:text-white hover:translate-x-1 justify-center md:justify-start"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="flex items-center gap-3 text-[#94a3b8] bg-white/[0.02] p-3 rounded-lg transition-all duration-300 hover:bg-white/[0.05] hover:text-white hover:translate-x-1 justify-center md:justify-start"
            >
              <FaEnvelope className="text-xl" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-white/5 relative z-[1]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} CV Writer. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-[#94a3b8] hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-[#4b5563]">•</span>
            <a href="/terms" className="text-[#94a3b8] hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 