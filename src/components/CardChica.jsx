import { Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import '../Styles/cards.css';
import PropTypes from 'prop-types';



const CardChica = (props) => {
  return (
    <div className="cardChica">
      <motion.div
        className="imageContainer"
        initial={{ scale: 1, opacity: 1, /* y: -180, x: 80 */ }}
        whileHover={{ scale: 1, opacity: 1, /* y: -200, x: 0, */ transition: 'easeInOut'   }}
        transition={{ type: "Inertia", stiffness: 1000}}
        
      >

        <img
          style={{width:props.width}}
          className="imgCardChica"
          src={props.img}
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
          {props.title}
        </Text>
        <Text color="#FFF3E5" fontSize={props.fontSize} fontFamily="IBMPlexMono-Regular">
        {props.text}
        </Text>
      </motion.div>
    </div>
  );
};

CardChica.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    fontSize: PropTypes.string,
    width: PropTypes.number,
};

export default CardChica;










