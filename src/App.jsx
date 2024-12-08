import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Templates from './components/Templates';
import Success from './components/Success';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Features from './components/Features';
import './App.css';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar onCreateCV={() => setIsDialogOpen(true)} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero 
                isDialogOpen={isDialogOpen} 
                onOpenDialog={() => setIsDialogOpen(true)}
                onCloseDialog={() => setIsDialogOpen(false)}
              />
              <Templates />
              <Testimonials />
              <Features />
              <CallToAction onCreateCV={() => setIsDialogOpen(true)} />
            </>
          } />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 