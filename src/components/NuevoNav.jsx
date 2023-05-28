import { useRef, useEffect, useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import { /* FaBars, */ FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/nuevoNav.css';


const NuevoNav = () => {
  const [isNavOpen, setIsNavOpen] = useCycle(false, true);
  const [isClickOutside, setIsClickOutside] = useState(false);
  const navbarRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsClickOutside(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isClickOutside]);

  const secciones = ['Home', 'Perfil', 'Portfolio', 'Bio', 'Contacto', 'Prueba1', 'Mas'];

  const navVariants = {
    hidden: { y: 150, opacity: 0, scale: 1.2 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.4, delay: 3.8, type: "Inertia", stiffness: 150 } }
  };


  return (
    <motion.nav className={`navbar ${isNavOpen ? 'open' : ''}`} ref={navbarRef}
    variants={navVariants}
    initial="hidden"
    animate="visible"
    >
      <motion.div
        className="navbar-toggle"
        onClick={toggleNav}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 3 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isNavOpen ? (
          <motion.div
            style={{ display: 'flex', alignItems: 'center' }}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 90 }}
            exit={{ opacity: 0, rotate: 0 }}
            transition={{ duration: 0.3}}
          >
            <FaTimes />
          </motion.div>
        ) : (
          <motion.div
            style={{ display: 'flex', alignItems: 'center' }}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            <path d="M11.3 17.5H23.7" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 23.7008V11.3008" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>



            {/* <FaBars /> */}
          </motion.div>
        )}
      </motion.div>
      {isNavOpen && (
        <motion.ul
          
          className="navbar-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, easing: [0.30, 0, 0.20, 1]}}
        >
          <Link to="/">
          <img src="https://i.ibb.co/Tmv7zZj/nuevo-para-el-nav.png" alt="" />
          </Link>
          {secciones.map((seccion, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}

              style={{fontFamily:"HelveticaNowDisplay-Medium", fontWeight:"normal"}}
            >
            <Link to={`/${seccion}`}>
              {seccion}
            </Link>  
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default NuevoNav;

