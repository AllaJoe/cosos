import { ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import '../Styles/fonts.css';
import AnimatedTypingH1 from '../components/TextoAnimado';


const Index = () => {
    return(
        <motion.div initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 1.5 }}>
        <ChakraProvider >
        <div style={ {position:"relative"}}>   
        <img style={ {width:"100vw"}} src="https://i.ibb.co/WfDV6TG/222222.gif" alt="222222" border="0" />
        <div style={ {height:"20vh", width:"40vw", position:"absolute", top: "16vh", left:"8vw", zIndex:1, backgroundColor:"rgba(30, 30, 30, 90%)",
                      display:"flex", alignItems:"center", border:"solid 3px #FF58F8", borderRadius:"10px",
                      justifyContent:"center",
                      }}>
            <h4 style={ {color:"white",
                         height:"10vh",
                         width:"30vw",
                         textAlign:"center",
                         display:"flex",
                         justifyContent:"center",
                         fontFamily:"Cooper Black Regular", 
                         fontSize:"1rem",
                         paddingBottom:"6vw",
                         
                         
                         }}>
                            
                            <AnimatedTypingH1 /></h4>
        </div>
        </div>   
        </ChakraProvider>
        
        </motion.div>
    )
}

export default Index;