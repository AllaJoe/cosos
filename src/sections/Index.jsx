import { ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';


const Index = () => {
    return(
        <motion.div initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 1.5 }}>
        <ChakraProvider >
            <h1 style={ {color:"white"}}>INDEXXXXXXXX</h1>
        </ChakraProvider>
        </motion.div>
    )
}

export default Index;