import { ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import '../Styles/fonts.css';
import AnimatedTypingH1 from '../components/TextoAnimado';
import { Button } from '@chakra-ui/react';
/* import videoWeb60 from '../assets/videoWeb60.webm'; */
import videoEspacio from '../assets/videoEspacio.webm'
import { Link } from 'react-router-dom';



const Landing = () => {
    const tamaño = {
      width: "10vw"
    };
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <ChakraProvider>
          <div style={{ position: "relative" }}>
            <div
              className="video-container"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <video
                src={videoEspacio}
                autoPlay
                loop
                muted
                style={{ width: "100%", height: "100%", objectFit: "fill", opacity:"30%" }}
              />
            </div>
            <div
              style={{
                height: "50%",
                width: "40%",
                position: "absolute",
                top: "20vh",
                left: "30%",
                zIndex: 1,
                backgroundColor: "rgba(30, 30, 30, 90%)",
                display: "flex",
                alignItems: "center",
                border: "solid 3px #FF58F8",
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
              <Button sx={tamaño} colorScheme="pink" variant="solid">
                APRETAME
              </Button>
              </Link>
            </div>
          </div>
        </ChakraProvider>
      </motion.div>
    );
  };
  
  export default Landing;
  