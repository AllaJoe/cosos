


import { motion } from 'framer-motion';
import '../Styles/fonts.css';
/* import AnimatedTypingH1 from '../components/TextoAnimado'; */
/* import videoEspacio from '../assets/videoEspacio.webm' */
import { Link } from 'react-router-dom';
/* import TextoDeColor from '../components/TextoDeColor'; */
import '../Styles/Landing.css';
import nuevoGlichWeb from '../assets/nuevoGlichWeb.webm'
import NuevaPresentacion from '../components/NuevaPresentacion';

const Landing = () => {
  
  const presVariant = {
    hidden: { y: 0, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 3, delay:3.3, type: "Inertia", stiffness: 250 } }
};
    

    return (
      <Link style={{textDecoration:"none"}} to="/Otra">
      <motion.div
      variants={presVariant}
        initial="hidden"
        animate="visible"
        style={{position:"relative", display:"flex", justifyContent:"center", alignItems:"center",  backgroundColor: "#171717", /* width:"100%", */ height:"100vh"}}
      >
        <video style={{position:"absolute", width:"100%", objectFit:"cover", height:"100%"}} src={nuevoGlichWeb} autoPlay loop muted></video>
          <NuevaPresentacion />
     </motion.div>
     </Link>
    );
  };

  export default Landing;