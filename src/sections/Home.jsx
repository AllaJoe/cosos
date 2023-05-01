import { ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Nsvg from '../components/Nsvg';
import TextoAnimado from '../components/TextoAnimado';


const Nosotros = () => {
    return(
        <motion.div initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 1.5 }}>
        <ChakraProvider>
        <div style={ {height:"100vh"}}>
            <h1 style={ {fontFamily:"Homkiges-Caps"}}>
            <TextoAnimado 
            text="HOLA GENTE ME LLAMO DAMIAN Y ESTO ES UN HOME"
            duration={2000}
            element="h1"
            style={{color: '#FFE8FE' }}
            
            />
            </h1>
            
        </div>    
        <div> 
        <Nsvg />
        <img style={ {width:"300px"}} src="https://i.ibb.co/ZfdGSMR/HOME.png" alt="HOME" border="0" />
        </div>
        
        </ChakraProvider>
        </motion.div>
    ) 
}

export default Nosotros;