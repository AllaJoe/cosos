import PropTypes from 'prop-types';
import '../Styles/Modalcito.css';


const Cardsita = (props) => {
    return (
        <div className='cardsita1'>
            <div className='img_div'>
                <img src={props.img} alt="" />
            </div>
            <div className='divTextoCard'> 
                <div className='h3_div'>
                    <h3>{props.h3}</h3>
                </div>
                <div className='p_div'>
                    <p>{props.p}</p>
                </div>
            </div>
        </div>
    );
}

Cardsita.propTypes = {
    img: PropTypes.any,
    h3: PropTypes.string,
    p: PropTypes.string,
    text1: PropTypes.string,

  };

export default Cardsita;
