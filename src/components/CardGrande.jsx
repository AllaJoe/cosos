import {Box, Flex, Image, Text} from '@chakra-ui/react';
import '../Styles/cards.css'


const CardGrande = () => {
    return (
        <Flex className='cardGrande' width="500px" height="300px" direction="column" bg="blue.400" p="1vw">
                <Box display="flex" justifyContent="center" width="100%">
                    <Image className='imgCardGrande' width="70vw" height="20vh" objectFit='cover' src="https://i.ibb.co/8cHcgxY/00055-5555636378.png" alt="00055-5555636378" border="0" />
                </Box>
                <Box>
                    <Text fontSize="xl" fontWeight="bold">Tituluto arriba</Text>
                    <Text fontSize="sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, praesentium dolore delectus dolorem quis blanditiis fuga ex illo dolor dolores.</Text>
                </Box>
        </Flex>
    );
}

export default CardGrande;
