import { motion } from 'framer-motion'
import NewCarsBio from "../components/NewCardBio";
import '../Styles/NewCardBio.css'



const NewPorf = () => {
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
        <div style={{width:"100%", /* height:"100svh", */ gap:"20px", display:"flex", backgroundColor:"", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"150px"}}>

            <div className="contBioCards1">
                
                <motion.div className="cardsSizes"
                initial="hidden"
                animate="visible"
                variants={variantCard1}
                >
                    <NewCarsBio 
                    titleCard="CARD 1"
                    pCard="Initially built to create lifelike portraits of characters"
                    img="https://i.ibb.co/bJKcJx9/Frame-619.png"
                    />
                </motion.div>
                <motion.div className="cardsSizes" 
                initial="hidden"
                animate="visible"
                variants={variantCard2}
                >
                    <NewCarsBio 
                    titleCard="CARD2"
                    pCard="Initially built to create lifelike portraits of characters"
                    img="https://i.ibb.co/ys1RBFs/Pantallazo-11-05-2023-01-36-09.png"
                    />
                </motion.div>
                
            </div>

            <div className="contBioCards2">
                <motion.div className="cardsSizes"
                initial="hidden"
                animate="visible"
                variants={variantCard3}
                >
                    <NewCarsBio 
                    titleCard="CARD3"
                    pCard="Initially built to create lifelike portraits of characters"
                    img="https://i.ibb.co/RzXQk39/00054-5555636377.png"
                    />
                </motion.div>
                <motion.div className="cuartaCard"
                initial="hidden"
                animate="visible"
                variants={variantCard4}
                >
                    
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"100%", backgroundColor:"rgba(0,0,0,0.0)", border:"2px solid white"}}>
                        <h2 style={{fontSize:"3rem", fontFamily:"SharpGrotesk-Thin20", color:"white"}}>MAS PRONTO</h2>
                    </div>
                </motion.div>
                
                    
                
            </div>

        </div>
    );
}

export default NewPorf;
