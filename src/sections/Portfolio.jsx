import MyCard from '../components/Card';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Portfolio = () => {
    
    const cositas1 = {
        display:"flex",
        justifyContent:"center",
        marginTop:"50px",
        backgroundColor:"#313130",
        backgroundImage: "linear-gradient(to left, #313130, #171717)"
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
                    transition={{ duration: 1.5, delay:2.5 }}>
            <Box sx={cositas1}>
                <div style={ {display:"flex", justifyContent: 'center', flexWrap:"wrap", gap:"20px", width:"80vw", /* backgroundColor:"#313130" */}}>
                <Link to="https://www.behance.net/gallery/142252339/Medif-UXUI-project-Rediseno-de-app" target="_blank">
                    <MyCard img="https://i.ibb.co/gJF6H59/Frame-534.png"/>
                </Link>
                <Link to="https://www.behance.net/gallery/142238747/Pure-design-e-commerce-project-design" target="_blank">
                    <MyCard img="https://i.ibb.co/84rbpq9/Frame-537.png"/>
                </Link>  
                <Link to="https://www.behance.net/gallery/142209749/Indienac-app-design" target="_blank">
                    <MyCard img="https://i.ibb.co/ys1RBFs/Pantallazo-11-05-2023-01-36-09.png"/>
                </Link>
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

export default Portfolio;