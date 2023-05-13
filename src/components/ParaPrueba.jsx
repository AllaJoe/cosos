import PropTypes from 'prop-types';
import '../Styles/estilitos.css'
import AnimatedTypingH1 from '../components/TextoAnimado'

const ParaPrueba = () => {
    return (
        
         
      
    <div style={{
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
            backgroundColor:"rgba(30, 30, 30, 90%)", 
            display:"flex", 
            flexDirection:"column", 
            justifyContent:"center", 
            alignItems:"center",
            textAlign:"center", 
            border:"3px solid #F815E1",
            borderRadius:"15px",
            paddingTop:"90px",
            
            
            }}>      

            <div>
                <img style={{width:"30vw", opacity:"90%"}} src="https://i.ibb.co/HPL9LHy/Frame-50.png" alt="Frame-50" border="0" />
            </div>
        <div style={{width:"30vw", height:"50vh"}}>
            <AnimatedTypingH1
                      text="😊 Hola, me llamo Damián, soy diseñador UX/UI. Entrá a mi web 👇"
                      duration={2000}
                      element="h1"
                      style={{ color: "#FFE8FE", fontFamily: 'IBMPlexMono-Light'}}
            /> 
        </div>

        </div>
    </div> 
        
    );
}

ParaPrueba.propTypes = {
    background: PropTypes.string,
    img: PropTypes.string
}

export default ParaPrueba;





