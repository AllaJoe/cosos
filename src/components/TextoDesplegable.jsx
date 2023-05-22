import PropTypes from 'prop-types';

import { useTrail, a } from '@react-spring/web';



const TextoDesplegable = ({ open, children }) => {
  const items = [...children];
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  
  const estilo = {
    backgroundColor: "rgba(255, 215, 235,0.5)",
    fontFamily: "Gilroy-ExtraBold",
    fontSize: "4rem",
    
  }
  
  return (
    <div style={estilo}>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index}  style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

TextoDesplegable.propTypes = {
    open: PropTypes.string,
    children: PropTypes.string
  }


export default TextoDesplegable;