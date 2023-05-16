import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';


const TextoDeColor = (props) => {
    const styles = useSpring({
        from: { color: props.color1, textShadow: props.textShadow },
        to: [
          { color: props.color2, textShadow: props.textShadow2 },
          { /* color: 'green', textShadow: '0 0 8px green' */ },
          { color: props.color3, textShadow: props.textShadow3 }
        ],
        config: { duration: 2000 },
        loop: { reverse: true },
      });


    return (
        <animated.span
      style={{
        /* backgroundColor: 'white', */
        fontSize: props.size,
        /* fontFamily: 'Gilroy-ExtraBold', */
        fontFamily:props.fontFamily,
        ...styles,
      }}
    >
      {props.text1}
    </animated.span>
    );
}

TextoDeColor.propTypes = {
  background: PropTypes.string,
  text1: PropTypes.string,
  size: PropTypes.number,
  color1: PropTypes.string,
  color2: PropTypes.string,
  color3: PropTypes.string,
  color4s: PropTypes.string,
  textShadow : PropTypes.bool,
  textShadow2 : PropTypes.bool,
  textShadow3 : PropTypes.bool,
  fontFamily: PropTypes.string,

}

export default TextoDeColor;
