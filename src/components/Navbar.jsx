import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoDocumentText } from 'react-icons/io5';
import { BiSolidCategory } from 'react-icons/bi';
import { RiPriceTag3Fill } from 'react-icons/ri';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <IoDocumentText className="brand-icon" />
          <h1>CV Builder</h1>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <AiFillHome className="nav-icon" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/create-cv">
            <IoDocumentText className="nav-icon" />
            <span>Create CV</span>
          </Link>
        </li>
        <li>
          <a href="#templates">
            <BiSolidCategory className="nav-icon" />
            <span>Templates</span>
          </a>
        </li>
        <li>
          <a href="#pricing">
            <RiPriceTag3Fill className="nav-icon" />
            <span>Pricing</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 