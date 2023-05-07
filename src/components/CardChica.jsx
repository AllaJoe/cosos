import {Box, Image, Text} from '@chakra-ui/react'
import '../Styles/cards.css'



const CardChica = () => {
    return (
        <div className='cardChica'>
                <Box /* width="50%" */>
                    <Image className='imgCardChica' src="https://i.ibb.co/8cHcgxY/00055-5555636378.png" alt="00055-5555636378" border="0" />
                </Box>
                <Box padding="1vw">
                    <Text color="white" fontSize="16px" fontWeight="bold" fontFamily="IBMPlexMono-Medium">Tituluto arriba</Text>
                    <Text color="#FFF3E5" fontSize="14px" fontFamily="IBMPlexMono-Regular">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
                </Box>
        </div>
    );
}

export default CardChica;

