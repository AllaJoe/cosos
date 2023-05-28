
import AnimPrueva from "../components/AnimPrueva";

import { motion } from 'framer-motion'
import CardChica from "../components/CardChica";

const Prueba1 = () => {
    
    const lasVariants = {
        hidden: { y: 150, opacity: 0, scale: 1.2 },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, delay: 3.8, ease: [0.30, 0, 0.20, 1] } }
      };
      const cardsVarians = {
        hidden: { y: 150, opacity: 0, scale: 1.2 },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:1, delay: 4, ease: [0.30, 0, 0.20, 1] } }
      };

    return (
        <div style={{height:"200vh"}}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", backgroundColor:"", marginTop:"20vh"}}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"", height:"10vh"}}>
            <AnimPrueva />
        </div>
        <motion.div variants={lasVariants}
        initial="hidden"
        animate="visible"
        
        style={{backgroundColor:"",}}>
            <h2 style={{fontFamily:"sans-serif", color:"white", fontSize:"5em"}}>SOBRE MI</h2>
        </motion.div>
        </div>

        <div style={{display:"flex", justifyContent:"center", alignItems:"center" }}>
        <motion.div style={{backgroundColor:"", width:"80em", display:"flex",paddingTop:"2vh", justifyContent:"center", flexWrap:"wrap", alignItems:"center", gap:"1vw"}}
        variants={cardsVarians} 
        initial="hidden"
        animate="visible"
        >
            <CardChica 
            img="https://i.ibb.co/GJ5fDwg/fff45422-1.png"
            />
            <CardChica />
            <CardChica />
            <CardChica />
            <div style={{width:"350px"}}>

            </div>
            <div style={{width:"350px"}}>

            </div>
        </motion.div>
        </div>
        </div>
    );
}

export default Prueba1;
