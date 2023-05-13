import { motion } from 'framer-motion';
import '../Styles/circulos.css';

const CirculosAnimados = () => {
  return (
    <div className="contenedor">
      <motion.div
        className="circulo"
        animate={{
          x: ['-250%', '250%', '250%', '-250%', '-250%'],
          y: ['-250%', '-250%', '250%', '250%', '-250%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'spring',
          type: "spring"
        }}
      />
      <motion.div
        className="circulo"
        animate={{
          x: ['1250%', '-1250%', '1250%', '1250%', '-1250%'],
          y: ['1250%', '1250%', '-1250%', '1250%', '1250%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default CirculosAnimados;
