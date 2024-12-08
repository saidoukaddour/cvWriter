import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Templates from './components/Templates';
import CVBuilder from './components/CVBuilder/CVBuilder';
import Success from './components/Success';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Features from './components/Features';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              
              <Templates />
              <Testimonials />
              <Features />
              <CallToAction />
            </>
          } />
          <Route path="/create-cv" element={<CVBuilder />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 