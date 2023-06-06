import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Landing from './sections/Landing';
import NotFound from './sections/NotFound';
import Portfolio from './sections/Portfolio';
import Bio from './sections/Bio';
import Perfil from './sections/Perfil';
import Home from './sections/Home';
import Contacto from './sections/Contacto';

import Prueba1 from './sections/Prueba1';
import Mas from './sections/Mas';
import NuevoNav from './components/NuevoNav';
import Otra from './sections/Otra';
import LasPrueb from './sections/LasPrueb';
import NuevoLogo from './components/NuevoLogo';
import NavModal from './components/NavModal';

const App = () => {
  const [transicion, setTransicion] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setTransicion(true);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visibleNavbarHeight = 50; // Altura del Navbar visible antes de desaparecer

      if (currentScrollPos > prevScrollPos && currentScrollPos > visibleNavbarHeight) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTransicion(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [transicion]);

  const isLandingPage = location.pathname === '/' || location.pathname === '/Otra';

  return (
    <>
      <AnimatePresence>
        {/* Aquí puedes agregar la lógica y componentes para la transición */}
        {transicion && (
          <motion.div
            className="transicion-imagen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NuevoLogo />
            
          </motion.div>
        )}
      </AnimatePresence>
      {isLandingPage ? null : (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: showNavbar ? 0 : -100 }}
          transition={{ duration: 0.3 }}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }}
        >
          {showNavbar && <NuevoNav /> } <NavModal />
        </motion.div>
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="HOME" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="bio" element={<Bio />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="prueba1" element={<Prueba1 />} />
        <Route path="mas" element={<Mas />} />
        <Route path="otra" element={<Otra />} />
        <Route path="lasPrueb" element={<LasPrueb />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

