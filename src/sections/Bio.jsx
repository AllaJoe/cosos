/* import { ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import TextoAnimado from '../components/TextoAnimado'; */

import Modalcito from '../components/Modalcito';
/* import { Link } from 'react-router-dom'; */



const Bio = () => {
    return (
        <div style={{
            /* position:"fixed", */
            display:"flex",
            flexWrap:"wrap",
            width:"100vw",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            gap:"40px",
            height:"100vh",
            backgroundColor:"#CAF2FF"
            }}>
            
            
            <Modalcito img="https://i.ibb.co/m9XxwSV/00011-556346363-gigapixel-standard-scale-4-00x.jpg"/>
            <Modalcito img="https://i.ibb.co/N6Dq3Cv/00005-3354756848346-gigapixel-standard-scale-4-00x-gigapixel-standard-scale-1-00x.jpg" />
            
            <Modalcito img="https://i.ibb.co/Ld3BcR5/00019-88805685333-gigapixel-standard-scale-6-00x.jpg" redit="https://i.ibb.co/Ld3BcR5/00019-88805685333-gigapixel-standard-scale-6-00x.jpg" />
            
            <Modalcito img="https://i.ibb.co/bPFj1QK/pibita-mayor-calidad-1-1.png" />
        </div>
    );
    };

    export default Bio;
