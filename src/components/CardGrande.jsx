import {Box, Image, Text} from '@chakra-ui/react';
import '../Styles/cards.css'


const CardGrande = () => {
    return (
        <div className='cardGrande'>
                <Box display="flex" justifyContent="center" width="100%">
                    <Image className='imgCardGrande' width="70vw" height="20vh" src="https://i.ibb.co/8cHcgxY/00055-5555636378.png" alt="00055-5555636378" border="0" />
                </Box>
                <Box>
                    <Text color="white" fontSize="16px" fontWeight="bold" fontFamily="IBMPlexMono-Medium">Tituluto arriba</Text>
                    <Text color="#FFF3E5" fontSize="14px" fontFamily="IBMPlexMono-Regular">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, praesentium dolore delectus dolorem quis blanditiis fuga ex illo dolor dolores.</Text>
                </Box>
        </div>
    );
}

export default CardGrande;
