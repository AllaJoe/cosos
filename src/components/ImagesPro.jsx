/* import { motion } from "framer-motion"; */


import { Box, Flex, SimpleGrid, Image } from "@chakra-ui/react";

function CardGrid() {
  return (
    <Box p="5">
      <SimpleGrid columns={[1, 2, 3]} spacing={5}>
        <Flex direction="column" boxShadow="md" rounded="md">
        <Image src='https://i.ibb.co/fQmPYdt/00056-5555636379.png' alt='imagen-bedroom1' boxSize='100%' h="30vh"
        objectFit='fill' />
          <Box p="3">
            <Box mb="2" fontSize="lg" fontWeight="bold">
              Card Title
            </Box>
            <Box fontSize="md" color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Box>
          </Box>
        </Flex>
        <Flex direction="column" boxShadow="md" rounded="md">
        <Image src='https://i.ibb.co/fQmPYdt/00056-5555636379.png' alt='imagen-bedroom1' boxSize='100%' h="30vh"
        objectFit='fill' />
          <Box p="3">
            <Box mb="2" fontSize="lg" fontWeight="bold">
              Card Title
            </Box>
            <Box fontSize="md" color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Box>
          </Box>
        </Flex>
        <Flex direction="column" boxShadow="md" rounded="md">
        <Image src='https://i.ibb.co/fQmPYdt/00056-5555636379.png' alt='imagen-bedroom1' boxSize='100%' h="30vh"
        objectFit='fill' />
          <Box p="3">
            <Box mb="2" fontSize="lg" fontWeight="bold">
              Card Title
            </Box>
            <Box fontSize="md" color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Box>
          </Box>
        </Flex>
        <Flex direction="column" boxShadow="md" rounded="md">
        <Image src='https://i.ibb.co/fQmPYdt/00056-5555636379.png' alt='imagen-bedroom1' boxSize='100%' h="30vh"
        objectFit='fill' />
          <Box p="3">
            <Box mb="2" fontSize="lg" fontWeight="bold">
              Card Title
            </Box>
            <Box fontSize="md" color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Box>
          </Box>
        </Flex>
        <Flex direction="column" boxShadow="md" rounded="md">
        <Image src='https://i.ibb.co/fQmPYdt/00056-5555636379.png' alt='imagen-bedroom1' boxSize='100%' h="30vh"
        objectFit='fill' />
          <Box p="3">
            <Box mb="2" fontSize="lg" fontWeight="bold">
              Card Title
            </Box>
            <Box fontSize="md" color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Box>
          </Box>
        </Flex>
        <Flex direction="column" boxShadow="md" rounded="md">
        <Image src='https://i.ibb.co/fQmPYdt/00056-5555636379.png' alt='imagen-bedroom1' boxSize='100%' h="30vh"
        objectFit='fill' />
          <Box p="3">
            <Box mb="2" fontSize="lg" fontWeight="bold">
              Card Title
            </Box>
            <Box fontSize="md" color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

export default CardGrid;