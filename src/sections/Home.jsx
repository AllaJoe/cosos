import { ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';


const Nosotros = () => {
    return(
        <motion.div initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 1.5 }}>
        <ChakraProvider>
        <div>    
        <img style={ {width:"300px"}} src="https://i.ibb.co/ZfdGSMR/HOME.png" alt="HOME" border="0" />
        </div>
        </ChakraProvider>
        </motion.div>
    ) 
}

export default Nosotros;