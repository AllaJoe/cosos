
import AnimPrueva from "../components/AnimPrueva";
import AnimatedTypingH1 from '../components/TextoAnimado';
import { motion } from 'framer-motion'
import CardChica from "../components/CardChica";

const Prueba1 = () => {
    
    const lasVariants = {
        hidden: { y: 150, opacity: 0, scale: 1.2 },
        visible: { y: 90, opacity: 1, scale: 1, transition: { duration: 0.6, delay: 3.8, ease: [0.30, 0, 0.20, 1] } }
      };
      const lasVariantsP = {
        hidden: { y: 150, opacity: 0, scale: 1.2 },
        visible: { y: 10, opacity: 1, scale: 1, transition: { duration: 0.6, delay: 3.8, ease: [0.30, 0, 0.20, 1] } }
      };
      const cardsVarians = {
        hidden: { y: 150, opacity: 0, scale: 1.2 },
        visible: { y: 0, opacity: 1, scale: 1, transition: { duration:1, delay: 4, ease: [0.30, 0, 0.20, 1] } }
      };

    return (
        <div style={{height:"200vh", backgroundColor:"#202020"}}>
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", alignItems:"center", width:"100%", backgroundColor:"", marginTop:"20vh"}}>
        <div style={{display:"flex", justifyContent:"flex-start" , alignItems:"center", backgroundColor:"", height:"10vh", width:"1200px"}}>
            <AnimPrueva /> 
        </div>
        <motion.div variants={lasVariants}
        initial="hidden"
        animate="visible"
        
        style={{backgroundColor:"green", position:"fixed", marginLeft:"550px"}}>
            <h2 style={{fontFamily:"Montserrat-Bold", backgroundColor:"", width:"350px", color:"#D9D9D9", fontSize:"4em", position:"fixed", bottom:"60%"}}>SOBRE MI</h2>
        </motion.div>
        </div>

        <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
        <motion.div style={{display:"flex", backgroundColor:"yellow", paddingLeft:"560px", position:"fixed",bottom:"75%"  }}
        variants={lasVariantsP}
        initial="hidden"
        animate="visible"
        
        > 
        <h4
                style={{
                  height: "20vh",
                  width: "300px",
                  display: "flex",
                  fontFamily: "Montserrat-Regular",
                  position:"fixed"
                }}
              >
                <AnimatedTypingH1
                  text="Soy un diseñador UX/UI con tres años de experiencia en el campo del desarrollo front-end. Me apasiona crear experiencias digitales únicas y atractivas, enfocadas en las necesidades y deseos de los usuarios. ¡Vamos a hacer cosas increíbles juntos!"
                  duration={2000}
                  element="h1"
                  style={{ color: "#D9D9D9", fontSize: "16px", lineHeight: "30px", textTransform: "uppercase"}}
                /> 
              </h4>
            </motion.div>

        {/* <motion.div style={{display:"flex", paddingRight:"40px", position:"fixed", backgroundColor:"yellow", width:"1200px", justifyContent:"flex-end",alignItems:"center"}}
        variants={lasVariantsP}
        initial="hidden"
        animate="visible"
        >
            
        <p style={{
            position:"fixed",
            top:"30%",
            color:"white", 
            fontFamily:"HelveticaNowDisplay-Medium", 
            width:"300px", 
            display:"flex",
            fontSize:"20px",
            
            backgroundColor:"",
            
        }}>¡Hola y bienvenidos a mi página web! 👋✨ Soy un diseñador UX/UI con tres años de experiencia en el campo del desarrollo front-end. 💻🎨 Me apasiona crear experiencias digitales únicas y atractivas, enfocadas en las necesidades y deseos de los usuarios. 🌟🔍 ¡Vamos a hacer cosas increíbles juntos!</p>
        </motion.div> */}
        </div>


        <div style={{display:"flex", justifyContent:"center", alignItems:"center" }}>
        <motion.div style={{backgroundColor:"", width:"1200px", /* width:"80em", */ display:"flex"/* ,paddingTop:"2vh" */, justifyContent:"flex-start", flexDirection:"row", flexWrap:"wrap", alignItems:"center", gap:"1vw"}}
        variants={cardsVarians} 
        initial="hidden"
        animate="visible"
        >
            <div style={{display:"flex", flexDirection:"column", gap:"20px", flexWrap:"wrap"}}>
            <CardChica 
            img="https://i.ibb.co/fF5HCH8/Screen-Recorder-Project9-1.gif"
            radiusCard="0"
            widthCard="400px"
            heightCard="800px"
            width="900px"
            height="1000px"
            backgroundColor="#A75476"
            />
            <CardChica 
            img="https://i.ibb.co/tCvjB6m/00007-322222213778-1.png"
            backgroundColor="#4A8898"
            widthCard="400px"
            />
            </div>


            <div style={{display:"flex", flexDirection:"column", gap:"20px", flexWrap:"wrap"}}>
            <CardChica 
            img="https://i.ibb.co/GJ5fDwg/fff45422-1.png"
            heightCard="550px"
            widthCard="400px"
            width="100%"
            />
            <CardChica 
            img="https://i.ibb.co/GJ5fDwg/fff45422-1.png"
            widthCard="400px"
            heightCard="600px"
            width="50vw"
            height="50vh"
            />
            </div>

            {/* <div style={{width:"350px"}}>

            </div>
            <div style={{width:"350px"}}>

            </div> */}
        </motion.div>
        </div>
        </div>
    );
}

export default Prueba1;
