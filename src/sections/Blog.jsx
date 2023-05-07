import { ChakraProvider, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
/* import Formulario from '../components/Formulario'; */
import CardGrande from '../components/CardGrande'
import CardChica from '../components/CardChica';


const Blog = () => {

    return(
    <ChakraProvider>
        
        
        <motion.div initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 1.5 }} style={ {
                        width: '100vw',
                        height: '200vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent:"center",
                        alignItems:"center",
                        background: "linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(32,32,32,1) 100%)",
                        /* marginTop:"4vh", */
                        gap:"2vh",
                        flexWrap:"wrap",
                        
                        
                    }}>
        
        
        <Flex width="100vw" direction="row" gap="1vw" flexWrap="wrap" justify="center">               
        
        <CardChica />
        <CardGrande />

        </Flex> 
        <Flex width="100vw" gap="1vw" flexWrap="wrap" justify="center">
        <CardGrande />
        <CardChica />
        </Flex>

        </motion.div>
        
        {/* <Formulario />  */}
        </ChakraProvider>
        
    ) 
}

export default Blog;