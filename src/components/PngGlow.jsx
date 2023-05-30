import PropTypes from 'prop-types';
import '../Styles/Logo.css';
import { motion } from 'framer-motion';

const PngGlow = (props) => {
    return (
        <div className="logo-container">
            
            <div className='h2_1' style={{width:props.width}}>
            <motion.span
            style={{ }}
            className="glow"
            initial={{ color: '#FC62AD' }}
            animate={{ color: '#36C4F4' }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            >
                DAMIAN
            </motion.span>    
            </div>

            <div className='h2_2'>
            <motion.span
            className="glow"
            initial={{ color: '#FC62AD' }}
            animate={{ color: '#36C4F4' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            >
                HEREDIA
            </motion.span>
            </div>

            <h2 className='h2_3'>ux designer</h2>
        </div>
    );
}

PngGlow.propTypes = {
    size: PropTypes.number,
    width: PropTypes.string,
  }

export default PngGlow;
