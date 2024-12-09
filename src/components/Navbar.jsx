import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoDocumentText } from 'react-icons/io5';
import { BiSolidCategory } from 'react-icons/bi';
import { RiPriceTag3Fill, RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md';

const Navbar = ({ onCreateCV }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", icon: <AiFillHome />, text: "Home", isLink: true },
    { to: "#templates", icon: <BiSolidCategory />, text: "Templates", isLink: false },
    { to: "#pricing", icon: <RiPriceTag3Fill />, text: "Pricing", isLink: false }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4 bg-nav-bg/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity"
            onClick={closeMenu}
          >
            <MdEdit className="text-2xl text-primary" />
            <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CV Writer
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.isLink ? (
                  <Link 
                    to={link.to}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2 group"
                  >
                    <span className="text-lg transition-transform group-hover:-translate-y-1">{link.icon}</span>
                    <span className="text-sm font-medium">{link.text}</span>
                  </Link>
                ) : (
                  <a 
                    href={link.to}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2 group"
                  >
                    <span className="text-lg transition-transform group-hover:-translate-y-1">{link.icon}</span>
                    <span className="text-sm font-medium">{link.text}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>

          <button 
            onClick={onCreateCV}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-nav-bg rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all relative overflow-hidden group"
          >
            <IoDocumentText className="text-lg transition-transform group-hover:translate-x-1" />
            <span>Create CV</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isMenuOpen ? (
            <RiCloseFill className="text-2xl" />
          ) : (
            <RiMenu3Fill className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-nav-bg/95 backdrop-blur-sm transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '65px' }}
      >
        <div className="flex flex-col h-full p-4">
          <ul className="space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.isLink ? (
                  <Link 
                    to={link.to}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                    onClick={closeMenu}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-base font-medium">{link.text}</span>
                  </Link>
                ) : (
                  <a 
                    href={link.to}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                    onClick={closeMenu}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-base font-medium">{link.text}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>

          <button 
            onClick={() => {
              onCreateCV();
              closeMenu();
            }}
            className="mt-6 flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-primary to-secondary text-nav-bg rounded-lg font-semibold text-base hover:shadow-lg hover:shadow-primary/20 active:translate-y-0.5 transition-all"
          >
            <IoDocumentText className="text-xl" />
            <span>Create CV</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 