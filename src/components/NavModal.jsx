import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/nuevoNav.css';

const NavModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const modalAnimation = useSpring({
    transform: showModal ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)',
    from: { transform: 'translate(-50%, -150%)' },
    config: { tension: 100, friction: 25 },
  });

  const secciones = ['Otra', 'LasPrueb', 'NewPorf', /* 'Perfil', */ /* 'Portfolio', *//* 'Otra', */ /* 'Bio', */ 'Contacto', /* 'Prueba1', */ 'Mas'];

  const navmodVariant = {
    hidden: { y: 150, opacity: 0, scale: 1.2 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, delay: 3, ease: [0.30, 0, 0.20, 1] } }
  };

  useEffect(() => {
    const handleCloseModalOnRouteChange = () => {
      setShowModal(false);
    };

    window.addEventListener('routeChangeStart', handleCloseModalOnRouteChange);

    return () => {
      window.removeEventListener('routeChangeStart', handleCloseModalOnRouteChange);
    };
  }, []);

  return (
    <>
      <motion.div className='nav-respons-modal' style={{ width: props.width }} onClick={handleOpenModal}
        initial="hidden"
        animate="visible"
        variants={navmodVariant}
      >
        <svg width="48" height="48" viewBox="0 0 92 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="6" x2="91" y2="6" stroke="#D9D9D9" strokeWidth="12" />
          <line x1="1" y1="34" x2="92" y2="34" stroke="#D9D9D9" strokeWidth="12" />
          <line y1="62" x2="91" y2="62" stroke="#D9D9D9" strokeWidth="12" />
        </svg>
        
      </motion.div>

      {showModal && (
        <animated.div className="modal" style={modalAnimation}>
          <div className="modalcito1">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "", paddingRight: "140px" }}>
              <div onClick={handleCloseModal}
                style={{ cursor: "pointer", display: "flex", justifyContent: "center", backgroundColor: "" }}
              >
                <svg className='' width="70" height="70" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="66.1479" y="18.7734" width="14.2553"                   height="67" transform="rotate(45 66.1479 18.7734)" fill="#D9D9D9" />
                  <rect x="76.228" y="66.1484" width="14.2553" height="67" transform="rotate(135 76.228 66.1484)" fill="#D9D9D9" />
                </svg>
                
              </div>
            </div>

            <ul style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "50px", textDecoration: "none", listStyle: "none" }} className="">

              <Link to="/">
                <img style={{ width: "300px" }} src="https://i.ibb.co/Hgp0r5b/nuevo-logo-nuevo.png" alt="" />
              </Link>

              {secciones.map((seccion, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "",
                    textDecoration: "none",
                    fontFamily: "Montserrat-light",
                    textTransform: "uppercase",
                    fontSize: "1.8em",
                    fontWeight: "normal",
                    color: "white",
                  }}
                >
                  <Link
                    to={`/${seccion}`}
                    style={{
                      textDecoration: "none",
                      color: location.pathname === `/${seccion}` ? "#A75476" : "#D9D9D9",
                    }}
                  >
                    {seccion}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </animated.div>
      )}
    </>
  );
}

NavModal.propTypes = {
  img: PropTypes.any,
  redit: PropTypes.any,
  img1: PropTypes.any,
  h3: PropTypes.string,
  text1: PropTypes.string,
  p: PropTypes.string,
  width: PropTypes.number,
  colorBg: PropTypes.string,
  border: PropTypes.string,
  opacity: PropTypes.number,
  bgDiv: PropTypes.string,
  imgWid: PropTypes.number,
};

export default NavModal;

