/* import { ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import TextoAnimado from '../components/TextoAnimado'; */
import { motion } from 'framer-motion';
import Modalcito from '../components/Modalcito';
/* import Regresar from '../components/Regresar';
import { Link } from 'react-router-dom'; */

/* import { Link } from 'react-router-dom'; */
/* import TextoDeColor from '../components/TextoDeColor'; */


const Bio = () => {
    return (
        <>
        {/* <Link to="/Home">
           <Regresar /> 
        </Link>  */}

        <motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
    
        style={{
            /* position:"fixed", */
            display:"flex",
            flexWrap:"wrap",
            width:"100vw",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            gap:"40px",
            height:"100vh",
            backgroundColor:"#343434"
            }}>
             
            <Modalcito  
            img1="https://i.ibb.co/tCvjB6m/00007-322222213778-1.png"
            img="https://i.ibb.co/m9XxwSV/00011-556346363-gigapixel-standard-scale-4-00x.jpg"
            h3="TITULONCITO CARD 1"
            p="Textito para la card que va abajo de la imagen y el titulo que se rellena con lo que sea y asi lo estoy hacieno"
            />

            <Modalcito  
            img1="https://i.ibb.co/fQmPYdt/00056-5555636379.png"
            img="https://i.ibb.co/N6Dq3Cv/00005-3354756848346-gigapixel-standard-scale-4-00x-gigapixel-standard-scale-1-00x.jpg" 
            h3="TITULONCITO CARD 2"
            p="Textito para la card que va abajo de la imagen y el titulo que se rellena con lo que sea y asi lo estoy hacieno"
            />
            
            
            <Modalcito  
            img1="https://i.ibb.co/8cHcgxY/00055-5555636378.png"
            img="https://i.ibb.co/Ld3BcR5/00019-88805685333-gigapixel-standard-scale-6-00x.jpg" redit="https://i.ibb.co/Ld3BcR5/00019-88805685333-gigapixel-standard-scale-6-00x.jpg"
            h3="TITULONCITO CARD 3"
            p="Textito para la card que va abajo de la imagen y el titulo que se rellena con lo que sea y asi lo estoy hacieno"
            />
            
            <Modalcito  
            img1="https://i.ibb.co/RzXQk39/00054-5555636377.png"
            img="https://i.ibb.co/ys1RBFs/Pantallazo-11-05-2023-01-36-09.png" 
            h3="TITULONCITO CARD 4"
            p="Textito para la card que va abajo de la imagen y el titulo que se rellena con lo que sea y asi lo estoy hacieno"            
            />

            <div style={{width:"300px", height:"50vh"}}>

            </div>
            <div style={{width:"300px", height:"50vh"}}>

            </div>

            
        </motion.div>
        </>
    );
    };

    export default Bio;
