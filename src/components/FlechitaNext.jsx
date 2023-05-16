import PropTypes from 'prop-types';
import { motion } from 'framer-motion'

const FlechitaNext = (props) => {
    return (
        <motion.svg
      width="34"
      height="80"
      viewBox="0 0 34 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ stroke: 'pink', filter: 'drop-shadow(0 0 8px pink)' }} // Estado inicial del SVG
      animate={{
        stroke: ['pink', 'blue', 'pink'], // Lista de colores para el cambio
        filter: ['drop-shadow(0 0 8px pink)', 'drop-shadow(0 0 8px blue)', 'drop-shadow(0 0 8px pink)'], // Lista de efectos de glow
      }}
      transition={{
        duration: props.duration, // Duración de cada transición
        repeat: Infinity, // Repetición infinita
        repeatType: 'reverse', // Invierte la lista para el cambio de color
        ease: 'easeInOut',
      }}
    >
      <motion.path
        d="M4.5 4L29.5 38L4.5 76"
        stroke="pink"
        /* opacity="20%" */
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
    );
}

FlechitaNext.propTypes = {
    duration: PropTypes.number
  };

export default FlechitaNext;
