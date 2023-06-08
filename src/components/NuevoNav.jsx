import { useRef, useEffect, useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import { /* FaBars, */ /* FaTimes  */} from 'react-icons/fa';
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

  const secciones = ['Otra', 'LasPrueb', /* 'Perfil', */ /* 'Portfolio', *//* 'Otra', */ 'Bio', 'Contacto', /* 'Prueba1', */ 'Mas'];

  const navVariants = {
    hidden: { y: 150, opacity: 0, scale: 1.2 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.4, delay: 1 /* 3.8 */, type: "Inertia", stiffness: 150 } }
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
            <svg className='svg-toggle' width="25" height="25" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="66.1479" y="18.7734" width="14.2553" height="67" transform="rotate(45 66.1479 18.7734)" fill="#D9D9D9"/>
            <rect x="76.228" y="66.1484" width="14.2553" height="67" transform="rotate(135 76.228 66.1484)" fill="#D9D9D9"/>
            </svg>


            {/* <FaTimes /> */}
          </motion.div>
        ) : (
          <motion.div
            style={{ display: 'flex', alignItems: 'center' }}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="20" height="20" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="27.2485" y="0.875" width="14.2553" height="67" fill="#D9D9D9"/>
            <rect x="67.8762" y="27.2461" width="14.2553" height="67" transform="rotate(90 67.8762 27.2461)" fill="#D9D9D9"/>
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
            

            <img style={{width:"80px", paddingRight:"20px"}} src="https://i.ibb.co/Hgp0r5b/nuevo-logo-nuevo.png" alt="" /> 
          </Link>
          {secciones.map((seccion, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}

              style={{fontFamily: "ChesnaGrotesk-Book",/* "Montserrat-light", */ textTransform: "uppercase", fontSize:"1em", fontWeight:"normal"}}
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

