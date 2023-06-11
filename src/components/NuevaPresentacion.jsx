import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
/* import nuevoGlichWeb from '../assets/nuevoGlichWeb.webm'; */

const NuevaPresentacion = () => {
  const pruebVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 2, ease: [0.6, -0.05, 0.01, 0.99] } }
  };

  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 2500);
  }, []);

  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", position: "relative", backgroundColor: "", height:"100%" }}>
      {/* <video style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", opacity: "30%" }} src={nuevoGlichWeb} autoPlay muted loop></video> */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pruebVariants}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          /* height: "200%", */
          
          color: "#D9D9D9",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.8)", width: "700px", height: "200px", overflow: "hidden", wordWrap: "break-word", border: "2px solid #D9D9D9", padding: "60px", fontFamily:"sans-serif" }}>
          <AnimatePresence>
            {showTitle && (
                <>
              <motion.h1
                initial={{ opacity: 0, x: 600 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: 0, opacity: 0, transition: { ease: 0.35 /* ease: [0.6, -0.05, 0.01, 0.99] */} }}
                transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] }}
                style={{fontSize:"5rem"}}
              >
                BIENVENIDOS A MI WEB
              </motion.h1>
              <p>Clickear para entrar</p>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

NuevaPresentacion.propTypes = {
  isVisible: PropTypes.string,
}

export default NuevaPresentacion;
