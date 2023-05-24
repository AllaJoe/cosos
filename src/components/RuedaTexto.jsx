

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Teleprompter = ({ texts, speed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [texts, speed]);

  return (
    <div style={{ height: '30vh',marginTop:"10vh", overflow: 'hidden', backgroundColor:"rgba(0, 0, 0, 1)" }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0.2, y: '0%' }}
          animate={{ opacity: 0, y: '100%', rotate: 10 }}
          exit={{ opacity: 5, y: '-8%', /* x: '10%' */ }}
          transition={{ duration: 0.9, type: 'spring', stiffness: 80, /* bounce: 0.25 */  }}
          style={{ width: '100%', overflow: 'hidden' }}
        >
          <h1 style={{overflow:"hidden", textAlign:"center"}}>{texts[currentIndex]}</h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

Teleprompter.propTypes = {
    
    texts: PropTypes.string,
    speed: PropTypes.string,
  }

export default Teleprompter;


