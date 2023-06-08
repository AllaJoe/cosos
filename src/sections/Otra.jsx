
import '../Styles/otra.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import nuevoGlichWeb from '../assets/nuevoGlichWeb.webm'

const Otra = () => {
    
    const variantCard1 = {
        hidden: { y: 150, opacity: 0, scale:0.4 /* 1.2 */ },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, delay: 3, ease: [0.30, 0, 0.20, 1] } }
      };

      const variantCard2 = {
        hidden: { y: 150, opacity: 0, scale:0.4 /* 1.5 */ },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:1, delay: 3.2, ease: [0.30, 0, 0.20, 1] } }
      };
      const variantCard3 = {
        hidden: { y: 150, opacity: 0, scale:0.4 /* 1.2 */ },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:1, delay: 3.4, ease: [0.30, 0, 0.20, 1] } }
      };
      const variantCard4 = {
        hidden: { y: 150, opacity: 0, scale:0.4 /* 1.2 */ },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:1, delay: 3.6, ease: [0.30, 0, 0.20, 1] } }
      };



    return (
        
        <div className="otra_container">

            <div className='cont_cards1'>
                <Link to="/Mas">
                < motion.div className='h_card1'
                initial="hidden"
                animate="visible"
                variants={variantCard1}
                >
                    <video className='video_card1' src={nuevoGlichWeb} loop autoPlay muted ></video>
                    <div className='dark_frame' style={{position:"absolute", zIndex:"10000", top:"0%", width:"100%", height:"100%", backgroundColor:"#000000", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <h1 style={{fontFamily: "ChesnaGrotesk-ExtraBold",/* "Montserrat-Medium", */ /* fontSize:"4rem", */ textTransform: "uppercase"}}>SOBRE MI</h1>
                    </div>
                    {/* <img src="https://i.ibb.co/XXp4b7Q/Group-1.png" alt="" /> */}
                </motion.div>
                </Link>
                
                <Link to="/Bio">
                <motion.div className='h_card2'
                initial="hidden"
                animate="visible"
                variants={variantCard2}
                >
                    <div className='dark_frame' style={{position:"absolute", zIndex:"10000", top:"0%", width:"100%", height:"100%", backgroundColor:"#000000", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <h1 style={{fontFamily:"ChesnaGrotesk-ExtraBold",/* "Montserrat-Medium", */ /* fontSize:"4rem", */ textTransform: "uppercase"}}>PORTFOLIO</h1>
                    </div>

                    <div className='containImg2'>
                    <img className='img_card2' src="https://i.ibb.co/c6jhJJv/Frame-607.png" alt="" />
                    </div>
                </motion.div>
                </Link>
            </div>

            <div className='cont_cards2'>
                <motion.div className='h_card3'
                initial="hidden"
                animate="visible"
                variants={variantCard3}
                >
                    
                    <div className='dark_frame' style={{position:"absolute", zIndex:"10000", top:"0%", width:"100%", height:"100%", backgroundColor:"#000000", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <h1 style={{fontFamily: "ChesnaGrotesk-ExtraBold",/* "Montserrat-Medium", */ /* fontSize:"4rem", */ textTransform: "uppercase"}}>APTITUDES</h1>
                    </div>
                    <img src="https://i.ibb.co/RB7d7cp/Frame-624.png" alt="" />

                </motion.div>
                <Link to="/Contacto">
                <motion.div className='h_card4'
                initial="hidden"
                animate="visible"
                variants={variantCard4}
                >
                    <div className='dark_frame' style={{position:"absolute", zIndex:"10000", top:"0%", width:"100%", height:"100%", backgroundColor:"#000000", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <h1 style={{fontFamily: "ChesnaGrotesk-ExtraBold",/* "Montserrat-Medium", */ /* fontSize:"4rem", */ textTransform: "uppercase"}}>CONTACTO</h1>
                    </div>
                    <div className='img_clas_card4'>
                        <img src="https://i.ibb.co/0BsMPfW/Group-5.png" alt="" />
                    </div>
                </motion.div>
                </Link>
            </div>

        </div>
        
    );
}

export default Otra;
