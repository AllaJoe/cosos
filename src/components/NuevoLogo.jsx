import '../Styles/nuevoLogo.css';
import { motion } from 'framer-motion';
import CuadradoSvg from './CuadradoSvg';


const NuevoLogo = () => {

    /* const damVar = {
        hidden: { y: 150, opacity: 0, scale: 2 },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:2, delay: 3.2, ease: [0.30, 0, 0.20, 1] } }
      };
      const hereVar = {
        hidden: { y: 150, opacity: 0, scale: 2 },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:2, delay: 3.4, ease: [0.30, 0, 0.20, 1] } }
      };
      const desVar = {
        hidden: { y: 150, opacity: 0, scale: 2 },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:2, delay: 3.6, ease: [0.30, 0, 0.20, 1] } }
      }; */



      /* ------------------------------------------------------------------ */



      const damVar = {
        hidden: {
          y: -120,
          opacity: 0,
          
          scale: /* 0.9 */1,
        },
        visible: {
          y: 0,
          opacity: 1,
          
          scale: 0.7,
          transition: {
            duration: 1.7,
            delay: 0.2,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
      };

      const hereVar = {
        hidden: {
          y: -120,
          opacity: 0,
          
          scale: 1,
        },
        visible: {
          y: 0,
          opacity: 1,
          
          scale: 0.7,
          transition: {
            duration: 1.7,
            delay: 0.3,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
        exit: {
          y: -120,
          opacity: 0,
          
          scale: 1,
          transition: {
            duration: 1.7,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
      };
      
      const desVar = {
        hidden: {
          y: -120,
          opacity: 0,
          scale: 1,
          
        },
        visible: {
          y: 0,
          opacity: 1,
          scale: 0.7,
    
          transition: {
            duration: 1.7,
            delay: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
        exit: {
          y: -120,
          opacity: 0,
          scale: 0.9,
          transition: {
            duration: 1.7,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
      };
      

    
      
      

    return (

        <div className="nuevo_logo">
            <CuadradoSvg />
            
            <motion.div className='damClass'
            variants={damVar}
            initial="hidden"
            animate="visible" 
            >
                <h2 style={{}}>DAMIAN</h2>
            </motion.div>
            
            
            
            <motion.div className='hereClass'
            variants={hereVar}
            initial="hidden"
            animate="visible" 
            >
                <h2 style={{}}>HEREDIA</h2>
            </motion.div>
            
            
            
            <motion.div className='design'
            variants={desVar}
            initial="hidden"
            animate="visible" 
            >
                <h2 style={{}}>UX DESIGNER</h2>
            </motion.div>
            
        </div>
    );
}

export default NuevoLogo;

