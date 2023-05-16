import PropTypes from 'prop-types';
import { motion  } from 'framer-motion';
import '../Styles/estilitos.css'

import AnimatedTypingH1 from '../components/TextoAnimado'
import TextoDeColor from './TextoDeColor';


const ParaPrueba = (props) => {
    return (
        
         
      
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
        style={{
            width:"100vw",
            height:"90vh", 
            display:"flex", 
            flexDirection:"column", 
            justifyContent:"center", 
            alignItems:"center",
            /* backgroundColor:"black", */
            
            
            

            }}>
        <div style={{
            width:"40vw",
            height:"85vh", 
            backgroundColor:"rgba(30, 30, 30, 40%)", 
            display:"flex", 
            flexDirection:"column", 
            justifyContent:"center", 
            alignItems:"center",
            textAlign:"center", 
            /* border:"3px solid #F815E1", */
            borderRadius:"25px",
            /* paddingTop:"30px", */
            
            
            }}>      

            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            >
                <img style={{width:props.width, /* opacity:"90%" */}} src={props.img} alt="Frame-50" border="0" />
            </motion.div>
        <div style={{width:"30vw", height:"50vh"}}>
            <TextoDeColor 
            text1={props.text1} 
            size={props.size}
            color1={props.color1}
            textShadow={props.textShadow}
            color2={props.color2}
            textShadow2={props.textShadow2}
            color3={props.color3}
            textShadow3={props.textShadow3}
            fontFamily={props.fontFamily}
            />
            <AnimatedTypingH1
                    text= {props.text}
                    duration={2000}
                    element={props.element}
                    loop={props.loop}
                    style={{ color: "#FFE8FE", fontFamily: 'IBMPlexMono-Light', fontSize: "1.5rem" }}
            /> 
            
        </div>

        </div>
    </motion.div> 
        
    );
}

ParaPrueba.propTypes = {
    background: PropTypes.string,
    img: PropTypes.string,
    text: PropTypes.string,
    element: PropTypes.string,
    loop: PropTypes.bool,
    width: PropTypes.number,
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

export default ParaPrueba;





