import {Box, Flex, Image, Text} from '@chakra-ui/react'

const CardChica = () => {
    return (
        <Flex width="300px" height="300px" direction="column" bg="pink.200" p="1vw">
                <Box width="50%">
                    <Image src="https://i.ibb.co/8cHcgxY/00055-5555636378.png" alt="00055-5555636378" border="0" />
                </Box>
                <Box>
                    <Text fontSize="xl" fontWeight="bold">Tituluto arriba</Text>
                    <Text fontSize="sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
                </Box>
        </Flex>
    );
}

export default CardChica;

