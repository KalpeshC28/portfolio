// ...existing code...
import { Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const SectionRoutes = () => (
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/about" element={<About />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default SectionRoutes;
