import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Education from './components/education';
import Experience from './components/experience';
import Services from './components/services';
import Projects from './components/projects';
import Skills from './components/skills';
import Resume from './components/resume';
import Contact from './components/contact';


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="experience"><Experience /></section>
      <section id="services"><Services /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
