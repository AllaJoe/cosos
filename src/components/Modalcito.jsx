import { useState } from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import '../Styles/Modalcito.css';
/* import TextoDeColor from './TextoDeColor'; */
import { Link } from 'react-router-dom';
import Cardsita from './Cardsita';



const Modalcito = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const modalAnimation = useSpring({
    transform: showModal ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)',
    from: { transform: 'translate(-50%, -150%)' },
    config: { tension: 100, friction: 25 },
  });

  return (
    <> 
      <div  onClick={handleOpenModal}>
        <Cardsita
        img={props.img1}
        h3={props.h3}
        p={props.p}
        />
      </div>  
      {/* <div className="card" onClick={handleOpenModal}>
        <h3>Título de la tarjeta</h3>
        <p>Descripción de la tarjeta</p>
      </div> */}
      {showModal && (
        <animated.div className="modal" style={modalAnimation} >
          <div className="modal-content">
          <div style={{display:"flex", gap:"10vw",}}> 
              <Link to={props.redit} target="_blank">
                ☝
              </Link>
              <div onClick={handleCloseModal}
              style={{cursor:"pointer"}}
              >
                ❌ 
              </div>
          </div>   
            <img src={props.img} alt="modalimg" />
          </div>
        </animated.div>
      )}
    </>
  );
};

Modalcito.propTypes = {
  img: PropTypes.any,
  redit:PropTypes.any,
  img1: PropTypes.any,
  h3: PropTypes.string,
  text1: PropTypes.string,
  p: PropTypes.string,
};

export default Modalcito;
