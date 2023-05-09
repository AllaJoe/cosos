import { Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import '../Styles/cards.css';

const CardChica = () => {
  return (
    <div className="cardChica">
      <motion.div
        className="imageContainer"
        initial={{ scale: 1, opacity: 1, y: -180, x: 80 }}
        whileHover={{ scale: 2, opacity: 1, y: -200, x: 0, transition: 'easeInOut'   }}
        transition={{ type: "Inertia", stiffness: 1000}}
        
      >
        <img
          className="imgCardChica"
          src="https://i.ibb.co/zXZ9DCB/Frame-527-2.png"
          alt="00055-5555636378"
          border="0"
        />
      </motion.div>
      <motion.div
        className="content"
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
          SOBRE MI
        </Text>
        <Text color="#FFF3E5" fontSize="14px" fontFamily="IBMPlexMono-Regular">
          Te cuento un poco sobre mi, mis intereses y formacion.
        </Text>
      </motion.div>
    </div>
  );
};

export default CardChica;










