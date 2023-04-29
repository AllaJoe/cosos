
import { Container, Box } from '@chakra-ui/react'
/* import AnimatedTypingH1 from './TextoAnimado'; */
import { useState } from 'react';


const Prueba = () => {

    const [showPoner, setPoner]=useState(false);
    const handleClick = () => {
        setPoner(true)
    }

    const estilitos = {
        color: 'white',
        w:"30vw",
        fontWeight: 'bold',
        textAlign: 'center',
        background:"green.200",
        marginTop: "20px",
        ':hover': {
            transform: 'translateY(10%) scale(1.04)',
            background:"green.300",
            transition:"400ms ease-out",
        }
    }
    const estilitosDos = {
        color: 'white',
        w:"30vw",
        fontWeight: 'bold',
        textAlign: 'center',
        background:"blue.200",
        marginTop: "20px",
        ':hover': {
            background:"yellow.400",
            transition:"700ms ease-out",
            color: 'black',
            transform: 'translateY(10%) scale(1.04)',

        }
    }
    
    const banner = {
        transition:"700ms ease-out",
    }


    return(
        <>
        <Box display="flex" width="100%" justifyContent="center" textAlign="center" marginTop="100px">
            <Box w="500px" height="100px" display="flex" >
            <Box width="95%" sx={banner}>
                {showPoner && <img src="https://i.ibb.co/x5dXXdS/Frame-23.png" alt="Frame-23" border="0" />}
            </Box>
            </Box>
        </Box>
        
        <Container marginTop="100px" as="section">
            
            <Box sx={estilitosDos} >
                <h1>HOOOOOOLALAAA</h1>
            </Box>
            <Box onClick={handleClick}>
                <Box sx={estilitos} >
                    <h1>1111ESTE ES UN ESTILITO</h1>
                </Box>
                
            </Box>
        </Container>
        </>
    )
}

export default Prueba;