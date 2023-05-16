import { ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import '../Styles/fonts.css';
import AnimatedTypingH1 from '../components/TextoAnimado';
/* import videoWeb60 from '../assets/videoWeb60.webm'; */
import videoEspacio from '../assets/videoEspacio.webm'
import { Link } from 'react-router-dom';
import TextoDeColor from '../components/TextoDeColor';
import '../Styles/Landing.css';


const Landing = () => {
    
    const cardVariants = {
      hidden: { y: 150, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5, type: "Inertia", stiffness: 250 } }
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <ChakraProvider>
          <div

          style={{ position: "relative", backgroundColor:"#4B0F4D" }}>
            <div
              className="video-container"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <video
                src={videoEspacio}
                autoPlay
                loop
                muted
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity:"50%" }}
              />
            </div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"

              style={{
                height: "50%",
                width: "40%",
                position: "absolute",
                top: "20vh",
                left: "30%",
                zIndex: 1,
                /* backgroundColor: "rgba(30, 30, 30, 40%)", */
                backgroundColor: "rgba(0, 0, 0, 40%)",
                display: "flex",
                alignItems: "center",
                /* border: "solid 1px #FF58F8", */
                border:"solid 0.5px rgba(255, 255, 255, 40%)",
                borderRadius: "10px",
                justifyContent: "center",
                flexDirection: "column",
                /* boxShadow: '0px 0px 20px 5px #D53F8C' */
              }}
            >
              
              <h4
                style={{
                  height: "20vh",
                  width: "80%",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  fontFamily: "IBMPlexMono-Light",
                  /* paddingBottom: "6vw", */
                  /* backgroundColor:"green" */
                }}
              >
                <AnimatedTypingH1
                  text="😊 Hola, me llamo Damián, soy diseñador UX/UI. Entrá a mi web 👇"
                  duration={2000}
                  element="h1"
                  style={{ color: "#FFE8FE" }}
                /> 
              </h4>
              <Link to="/Home">
              <button className='buttonLanding' type='submit'>
              <TextoDeColor 
              text1="ENTRA YA" 
              size="1.2rem"
              color1="white"
              textShadow="0 0 8px white"
              color2="#B7E9FF"
              textShadow2="0 0 8px white"
              color3="white"
              textShadow3="0 0 8px white"
              />
              </button> 
              {/* <div>
                <TextoDeColor text1="BOTONASO" />
              </div> */}
              </Link>
            </motion.div>
          </div>
        </ChakraProvider>
      </motion.div>
    );
  };
  
  export default Landing;
  