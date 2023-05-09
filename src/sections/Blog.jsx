import { ChakraProvider, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
/* import Formulario from '../components/Formulario'; */
import CardGrande from '../components/CardGrande'
import CardChica from '../components/CardChica';
/* import ParaPrueba from '../components/ParaPrueba'; */

const Blog = () => {

    return(

    <ChakraProvider>
        
        {/* <ParaPrueba /> */}
        <motion.div initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 1.5 }} style={ {
                        width: '100vw',
                        height: '200vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent:"start",
                        alignItems:"center",
                        background: "linear-gradient(180deg, rgba(15,15,15) 0%, rgba(20,20,20) 100%)",
                        marginTop:"4vh",
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