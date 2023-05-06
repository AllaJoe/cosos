import { ChakraProvider, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
/* import NuevoSvg from '../components/NuevoSvg'; */
/* import LineSvg from '../components/Pruebitas'; */
/* import Agujero from '../assets/Agujero.webm' */

import CardGrande from '../components/CardGrande'
import CardChica from '../components/CardChica';


const Blog = () => {

    return(
    <ChakraProvider>
        
        
        <motion.div initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 1.5 }} style={ {
                        width: '100%',
                        height: '200vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent:"start",
                        alignItems:"center",
                        /* backgroundColor:"green", */
                        marginTop:"4vh",
                        gap:"2vh",
                        flexWrap:"wrap"
                        
                    }}>
        <Flex gap="1vw" flexWrap="wrap" justify="center">               
        <CardGrande />
        <CardChica />


        </Flex> 
        <Flex gap="1vw" flexWrap="wrap" justify="center">
        <CardChica />
        <CardGrande />
        </Flex>

        </motion.div>
        
        
        </ChakraProvider>
        
    ) 
}

export default Blog;