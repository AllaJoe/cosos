import PropTypes from 'prop-types';
import '../Styles/Modalcito.css';


const Cardsita = (props) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width:"500px", 
            height:props.height, 
            backgroundColor: props.colorBg,
            border:props.border,

            }} className='cardsita1'>
            <div style={{opacity:props.opacity, backgroundColor:props.bgDiv}} className='divTextoCard'> 
                <div className='h3_div'>
                    <h3>{props.h3}</h3>
                </div>
                <div className='p_div'>
                    <p>{props.p}</p>
                </div>
            </div>

            <div className='img_div'>
                <img style={{width:props.imgWid}} src={props.img} alt="" />
            </div>
            
        </div>
    );
}

Cardsita.propTypes = {
    img: PropTypes.any,
    h3: PropTypes.string,
    width: PropTypes.number,
    p: PropTypes.string,
    text1: PropTypes.string,
    height: PropTypes.number,
    colorBg: PropTypes.string,
    border: PropTypes.bool,
    opacity: PropTypes.number,
    textOpacity: PropTypes.number,
    bgDiv: PropTypes.string,
    imgWid: PropTypes.number,
  };

export default Cardsita;
