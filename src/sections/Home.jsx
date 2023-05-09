import { ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import TextoAnimado from '../components/TextoAnimado';
import glichWeb from '../assets/glichWeb.webm'



const Nosotros = () => {
    return (
        <ChakraProvider>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
        >
            <div style={{ position: "relative" }}>
            
            <video src={glichWeb} autoPlay loop muted style={ {width:"100%", opacity:"90%", objectFit:"cover"}}></video>

            {/* Este es el contenedor donde adentro tengo mi texto animado */}
            
            <div
                style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(30, 30, 30,70%)",
                width: "40vw",
                height: "80vh",
                border: "solid 3px #FF58F8",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
                }}
            >
        
            <h1
                style={{
                    width: "30vw",
                    height: "70vh",
                    fontFamily: "IBMPlexMono-Medium"
                }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 5 }}
                    >
                    <img src="https://i.ibb.co/HPL9LHy/Frame-50.png" alt="Frame-50" border="0" />

                    </motion.div>
                <TextoAnimado
                    text="
                👋 Hola, soy Damián y soy diseñador UX/UI con conocimientos en front-end. ¡Bienvenidos a mi portfolio! 🎉

                🤓 Me encanta trabajar en la c y atra💻
                "
                    duration={2000}
                    element="h1"
                    style={{ color: "#FFE8FE" }}
                />
                </h1>
                
            </div>
            </div>
        </motion.div>
        </ChakraProvider>
    );
    };

    export default Nosotros;
