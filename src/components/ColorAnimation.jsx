
import { motion } from 'framer-motion';
import '../Styles/color-animation.css';

const ColorAnimation = () => {
  return (
    <motion.div
      className="color-animation"
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
    />
  );
};

export default ColorAnimation;

