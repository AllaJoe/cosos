import { Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import '../Styles/cards.css';

const CardGrande = () => {
  return (
    <div className="cardGrande">
      <motion.div
        className="imageContainerG"
        /* initial={{ scale: 1 }}
        whileHover={{ scale: 1.3 }} */
      >
        <Image
          className="imgCardGrande"
          src="https://i.ibb.co/8cHcgxY/00055-5555636378.png"
          alt="00055-5555636378"
          border="0"
        />
      </motion.div>
      <motion.div
        className="contentG"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Text
          color="white"
          fontSize="20px"
          fontWeight="bold"
          fontFamily="IBMPlexMono-Medium"
        >
          PORTFOLIO
        </Text>
        <Text color="#FFF3E5" fontSize="14px" fontFamily="IBMPlexMono-Regular">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quis. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit.
        </Text>
      </motion.div>
    </div>
  );
};

export default CardGrande;


