import PropTypes from 'prop-types';
import  { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import '../Styles/Scrollito.css';

const ScrollToTop = (props) => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 1,
    transform: `perspective(10000px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 0.1, tension: 1500, friction: 10 },
  });

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <animated.div className="card" style={{ transform }}>
        <div className="front">
           <div className='frontPantalla' style={{position:"absolute", zIndex:"1000", top:"0%", width:"100%", height:"100%", backgroundColor:"#000000", display:"flex", justifyContent:"center", alignItems:"center"}}><h1 style={{zIndex:10000, fontFamily:"Montserrat-Thin"}}>ESTO ES UNA CARD</h1> </div>

          <img style={{width:props.width, height: props.height, margin:"0"}} src={props.img} alt="" />
          <video src={props.video} autoPlay loop muted></video>
        </div>
        <animated.div className="back" style={{ opacity }}>
          <img style={{width:props.width2}} src={props.img2} alt="" />
          <video src={props.video2} autoPlay loop muted></video>
        </animated.div>
      </animated.div>
    </div>
  );
};

ScrollToTop.propTypes = {
    img: PropTypes.string,
    width: PropTypes.number,
    width2: PropTypes.number,
    height: PropTypes.number,
    img2: PropTypes.string,
    video: PropTypes.string,
    video2: PropTypes.string,
  }

export default ScrollToTop;
