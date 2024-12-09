import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Templates from './components/Templates';
import Success from './components/Success';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Features from './components/Features';
import CVBuilderPage from './pages/CVBuilder/CVBuilderPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar onCreateCV={() => window.location.href = '/create-cv'} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero onCreateCV={() => window.location.href = '/create-cv'} />
              <Templates />
              <Testimonials />
              <Features />
              <CallToAction onCreateCV={() => window.location.href = '/create-cv'} />
            </>
          } />
          <Route path="/success" element={<Success />} />
          <Route path="/create-cv" element={<CVBuilderPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 