

import { motion } from 'framer-motion'
import AnimPrueva from "../components/AnimPrueva";
/* import CardChica from "../components/CardChica"; */
import AnimatedTypingH1 from '../components/TextoAnimado';
import '../Styles/mas.css'
import ScrollToTop from '../components/ScrollToTop';
import nuevoGlichWeb from '../assets/nuevoGlichWeb.webm'
import yoVideo from '../assets/yo2.webm'

const Mas = () => {

    const lasVariants = {
        hidden: { y: -150, /* x: 40, */ opacity: 0, scale:1/* 1.2 */ },
        visible: { y: 0, x:0, opacity: 1, scale: 1, transition: { duration: 0.6, delay: 3.4 /* 3.8 */, ease: [0.30, 0, 0.20, 1] } }
      };
    const lasVariantsP = {
        hidden: { y: 150, opacity: 0, scale: 1 },
        visible: { y: -10, opacity: 1, scale: 1, transition: { duration: 0.6, delay: 3, ease: [0.30, 0, 0.20, 1] } }
      };

      const cardsVarians = {
        hidden: { y: 150, opacity: 0, scale: 1/* 1.5 */ },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:1, delay: 3.2, ease: [0.30, 0, 0.20, 1] } }
      };
      const cardsVarians1 = {
        hidden: { y: 150, opacity: 0, scale:1 /* 1.2 */ },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:1, delay: 3.4, ease: [0.30, 0, 0.20, 1] } }
      };
      const cardsVarians2 = {
        hidden: { y: 150, opacity: 0, scale:1 /* 1.2 */ },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:1, delay: 3.6, ease: [0.30, 0, 0.20, 1] } }
      };

    return (
        
        <div style={{display:"flex", width:"100%", justifyContent:"center", backgroundColor:"#171717", height:"200vh" }}>
            <div style={{ display:"flex", flexDirection:"column", width: "922px" /* "802px" */, height:"100%", backgroundColor: "/* grey */" , marginTop:"150px",}}>
                
                <div style={{display:"flex", /* overflow:"hidden", */ width:"100%", justifyContent:"center" , height:"165px", flexDirection:"column", backgroundColor:"/* green */",}}>
                
                <motion.div className='h2_Sobre'
                initial="hidden"
                animate="visible"
                variants={lasVariants}
                >
                    <h2 className='h2_class' style={{ color:"#D9D9D9", /* textAlign:"center", */  backgroundColor:"", textTransform:"uppercase"}}>SOBRE MI</h2>
                </motion.div>
                
                <div style={{display:"flex", height:"120px", overflow:"hidden", backgroundColor:" "}}>
                    <AnimPrueva />
                </div>
                </div>
                {/* ---------------  CARDS  ----------------------- */}

                <div style={{display:"flex", gap:"20px", justifyContent:"center", flexDirection:"row", flexWrap:"wrap",marginTop:"20px"}}>
                    <div style={{display:"flex", gap:"20px", flexWrap:"wrap", flexDirection:"column" }}>
                        
                    {/* ----------------------- CARD 1 --------------- */}
                        
                    <motion.div className='cardFlip' 
                        initial="hidden"
                        animate="visible" 
                        variants={cardsVarians}
                        >
                            <ScrollToTop 
                             /* "https://i.ibb.co/C046f2Y/chica-para.gif" */
                            video={nuevoGlichWeb}
                            video2={yoVideo}
                            height="100%"
                            width= "200%"
                            texth1="CLICKEA ACÁ Y VEME LA JETA"
                            />

                    </motion.div>
                        
                   {/* ------------------------------ CARD 2 ------------------------     */}
                        <motion.div
                        initial="hidden"
                        animate="visible" 
                        variants={cardsVarians1}
                        className='cardFlip2'
                        
                        >
                        <ScrollToTop 
                        video=""
                        img="https://i.ibb.co/DGFpgdg/nuevas-piernas.png"
                        width="150%"
                        height="100%"
                        img2="https://i.ibb.co/VQ2bhLD/h333dhd-1-removebg-preview-3.png"
                        width2="100%"
                        />
                        </motion.div>

                    </div>

                    {/* ---------------------CARDS DE LA IZQUIERDA------------------ */}

                    <div style={{display:"flex", flexDirection:"column", gap:"15px", marginTop:"10px"}}>

                       {/* ------------------------------------- CARD 3 ------------------------------------ */}

                        <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={lasVariantsP}
                        className='cardFlip3'
                        >
                            <AnimatedTypingH1
                            text="Soy un diseñador UX/UI con tres años de experiencia en el campo del desarrollo front-end. Me apasiona crear experiencias digitales únicas y atractivas."
                            duration={2000}
                            element="h1"
                            style={{padding:"20px", fontFamily:"resolve-sans-w05-thin-wd", color: "#D9D9D9", fontSize: /* "16px" */"30px", lineHeight: "35px", textTransform: "uppercase"}}
                            /> 
                        </motion.div>

                       {/* -------------------------------------- CARD 4 ----------------------------------- */}

                        <motion.div className='cardFlip4' 
                        initial="hidden"
                        animate="visible" 
                        variants={cardsVarians2}
                        >
                            {/* <ScrollToTop /> */}

                        </motion.div>
                    </div>

                </div>
            </div>

            
        </div>
        
        
    );
}

export default Mas;






