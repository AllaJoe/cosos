import { ChakraProvider, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NuevoSvg from '../components/NuevoSvg';


const Blog = () => {
    return(
        <>
        
        <motion.div initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 1.5 }}>
        
        <ChakraProvider>
        
            
        <Box style={{height:"120vh", display:"flex", justifyContent:"center", marginTop:"60px" }}>
            <NuevoSvg />
        </Box>
        
        <img style={ {width:"30%"}} src="https://i.ibb.co/xLdJrvH/BLOG.png" alt="BLOG" border="0" />
        </ChakraProvider>
        </motion.div>
        </>
    ) 
}

export default Blog;