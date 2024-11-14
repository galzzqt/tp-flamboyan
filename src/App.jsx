import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Fasilitas from './pages/Fasilitas';
import { useEffect } from 'react';
import Kontak from './pages/Kontak';
// Import other components as needed

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-custom');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/facilities" element={<Fasilitas />} />
        <Route path="/contact" element={<Kontak />} />
        {/* Add other routes as needed */}
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
