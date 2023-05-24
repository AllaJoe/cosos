import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Landing from './sections/Landing';
import ResponsiveAppBar from './components/NavBar';
import NotFound from './sections/NotFound';
import Portfolio from './sections/Portfolio';
import Bio from './sections/Bio';
import Perfil from './sections/Perfil';
import Home from './sections/Home';
import Pruevis from './sections/Pruevis';
import PngGlow from './components/PngGlow';

const App = () => {
  const [transicion, setTransicion] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTransicion(true);
  }, [location.pathname]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTransicion(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [transicion]);

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
            <PngGlow />
          </motion.div>
        )}
      </AnimatePresence>

      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="bio" element={<Bio />} />
        <Route path="pruevis" element={<Pruevis />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

