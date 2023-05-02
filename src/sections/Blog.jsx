import { ChakraProvider, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
/* import NuevoSvg from '../components/NuevoSvg'; */
import LineSvg from '../components/Pruebitas';

const Blog = () => {
    return(
        <>
        
        <motion.div initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 1.5 }}>
        
        <ChakraProvider>
        
            
        <Box style={{height:"120vh", paddingLeft:"10vw" /* display:"flex", justifyContent:"center", */ /* marginTop:"60px" */ }}>
        {/* <img style={ {  width:"100vw"}} src= "https://i.ibb.co/Y2058f1/Screen-Recorder-Project3-2.gif" alt="222222" border="0"/> */}
        <LineSvg />
        </Box>
        
            
        
        
        </ChakraProvider>
        </motion.div>
        
        </>
    ) 
}

export default Blog;