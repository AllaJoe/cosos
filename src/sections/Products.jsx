import MyCard from '../components/Card';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';



const Products = () => {
    
    const cositas1 = {
        display:"flex",
        justifyContent:"center",
        marginTop:"50px",
        backgroundColor:"#313130"
    }

    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    const cardVariants = {
        hidden: { x: -1000 },
        visible: { x: 0, transition: { duration: 0.5 } },
    };
    
    return(
        
        <motion.div animate={controls}>
         
        <motion.div variants={cardVariants}
                    initial="hidden"
                    animate="visible">
        <ChakraProvider>
            <motion.div initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 1.5 }}>
            <Box sx={cositas1}>
                <div style={ {display:"flex", justifyContent: 'center', flexWrap:"wrap", gap:"20px", width:"80vw", backgroundColor:"#313130"}}>
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    <MyCard />
                </div>
            </Box>
            </motion.div>
        </ChakraProvider>
        </motion.div>
        </motion.div>
        ) 
}

export default Products;