import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Servicos from './components/Servicos'
import './styles/global.css'; 

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Servicos />
      <Projects />
      <About />
      <Contact />
      <Navbar />
    </div>
  );
}

export default App;