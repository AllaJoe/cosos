/* import React, { useState } from 'react';
import { motion, Motion, spring } from 'framer-motion';
import { useEffect } from 'react';

function Card() {
  const [scale, setScale] = useState(1);

  React.useEffect(() => {
    const animate = () => {
      setScale(scale * 2);
      requestAnimationFrame(animate);
    };
    animate();
  }, [scale]);

  return (
    <motion.div
      initial={{
        transform: {
          scale: 1
        }
      }}
      animate={{
        transform: {
          scale: scale,
        }
      }}
      exit={{
        transform: {
          scale: 1 / scale
        }
      }}
      spring
      from={{ scale: 1, x: 0, y: 0 }}
      to={{ scale: 2, x: 0, y: 0 }}
      mass={2}
      stiffness={100}
      damping={0.9}
      overshoot={0.1}
    >
      <div className="card">
        <p>Hola!</p>
        <p>¡Bienvenido a la card con animaciones bonitas!</p>
      </div>
    </motion.div>
  );
}

export default Card; */
