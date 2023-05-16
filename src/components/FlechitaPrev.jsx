import PropTypes from 'prop-types';
import { motion } from 'framer-motion';



const FlechitaPrev = (props) => {
    return (
        <motion.svg
      width="34"
      height="81"
      viewBox="0 0 34 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ stroke: 'pink' }}
      animate={{
        stroke: ['pink', 'blue', 'pink'], 
        filter: ['drop-shadow(0 0 8px pink)', 'drop-shadow(0 0 8px blue)', 'drop-shadow(0 0 8px pink)'], // Lista de efectos de glow
      }}
      transition={{
        duration: props.duration,
        repeat: Infinity, 
        repeatType: 'reverse',
        ease: 'easeInOut',
        
      }}
      style={{ filter: 'drop-shadow(0 0 8px pink)' }} 
    >
      <path
        d="M29.0173 76.5L4 41.649L29.5249 3.99983"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
    );
}

FlechitaPrev.propTypes = {
    duration: PropTypes.number
  };

export default FlechitaPrev;
