import { ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import TextoAnimado from '../components/TextoAnimado';




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
            {/* Este es el gif animado que quiero usar de fondo */}
            <img
                style={{ width: "100vw" }}
                src="https://i.ibb.co/Y2058f1/Screen-Recorder-Project3-2.gif"
                alt="222222"
                border="0"
            />

            {/* Este es el contenedor donde adentro tengo mi texto animado */}
            <div
                style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(30, 30, 30, 90%)",
                width: "40vw",
                height: "60vh",
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
                    height: "30vh",
                    textAlign: "center",
                    fontFamily: "IBMPlexMono-Medium"
                }}
                >
                <TextoAnimado
                    text="
                👋 Hola, soy Damián y soy diseñador UX/UI con conocimientos en front-end. ¡Bienvenidos a mi portfolio! 🎉

                🤓 Me encanta trabajar en la creación de interfaces digitales intuitivas y atractivas que brinden una experiencia de usuario óptima. 💻
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
