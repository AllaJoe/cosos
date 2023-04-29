import { ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Blog = () => {
    return(
        <motion.div initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 1.5 }}>
        <ChakraProvider>
        <img style={ {width:"30%"}} src="https://i.ibb.co/xLdJrvH/BLOG.png" alt="BLOG" border="0" />
        </ChakraProvider>
        </motion.div>
    ) 
}

export default Blog;