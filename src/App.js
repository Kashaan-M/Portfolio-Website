import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Certificates from './components/Certifications';
import Projects from './components/Projects';
import Stack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Error from './components/Error';
import Success from './components/Success';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/certifications" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
