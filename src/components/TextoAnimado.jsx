
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

const AnimatedTypingH1 = ({ text, duration, element, style, loop }) => {
    const [animatedText, setAnimatedText] = useState('');
    const [animationComplete, setAnimationComplete] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
  
    useEffect(() => {
      const fullText = text;
      let intervalId;
  
      if (animationComplete && loop) {
        intervalId = setInterval(() => {
          setAnimatedText('');
          setAnimationComplete(false);
          setShowCursor(true);
        }, duration);
      } else {
        intervalId = setInterval(() => {
          setAnimatedText((prevText) => {
            if (prevText === fullText) {
              setAnimationComplete(true);
              return prevText;
            } else {
              return fullText.substring(0, prevText.length + 1);
            }
          });
          setShowCursor((prevShowCursor) => !prevShowCursor);
        }, 50);
      }
  
      return () => clearInterval(intervalId);
    }, [text, duration, animationComplete, loop]);
  
    const textProps = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 1000 },
      fontSize: "180%",
      color: '#FFE8FE',
      ...style,
    });
  
    const cursorProps = useSpring({
      opacity: showCursor ? 1 : 0,
      from: { opacity: 0 },
      config: { duration: 300, /* easing: "easeOut" */ },
      delay: 500,
      loop: false,
    });
  
    const Element = element || 'h1';
  
    const AnimatedElement = animated[Element];

  return (
    <AnimatedElement style={textProps}>
      {animatedText}
      <animated.span style={cursorProps}>|</animated.span>
    </AnimatedElement>
  );
};

AnimatedTypingH1.propTypes = {
    text: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    element: PropTypes.string,
    style: PropTypes.object,
    loop: PropTypes.bool
}


export default AnimatedTypingH1;

