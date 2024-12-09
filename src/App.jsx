import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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

function AppContent() {
  const navigate = useNavigate();
  
  const handleCreateCV = () => {
    navigate('/cv-builder');
  }

  return (
    <div className="App">
      <Navbar onCreateCV={handleCreateCV} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero onCreateCV={handleCreateCV} />
            <Templates />
            <Testimonials />
            <Features />
            <CallToAction onCreateCV={handleCreateCV} />
          </>
        } />
        <Route path="/success" element={<Success />} />
        <Route path="/cv-builder" element={<CVBuilderPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 