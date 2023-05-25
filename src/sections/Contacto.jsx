import { motion } from 'framer-motion';
import Formulario from "../components/Formulario";
import Teleprompter from "../components/RuedaTexto";
import '../Styles/formulario.css'

const Contacto = () => {

    const formVariant = {
        hidden: { y: 150, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay:2.5, type: "Inertia", stiffness: 250 } }
    };
    

    const texts = ['DEJAME', 'TU', 'MENSAJE 😊'];
    const speed = 1500;

    return (
        <div style={{width:"100vw", height:"200vh"}}>
        
        <motion.div
        variants={formVariant}
        initial="hidden"
        animate="visible"
        
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            
            }}
        >
            <div className="tele_style" >
            <Teleprompter texts={texts} speed={speed} />
            </div>
            <div>
            <Formulario />
            </div>
            
        </motion.div>
        </div>
    );
}

export default Contacto;
