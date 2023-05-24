
import Formulario from "../components/Formulario";
import Teleprompter from "../components/RuedaTexto";
import '../Styles/formulario.css'

const Pruevis = () => {

    const texts = ['DEJAME', 'TU', 'MENSAJE 😊'];
    const speed = 1500;



    return (
        <div style={{width:"100vw", /* backgroundColor:"red", */ height:"200vh"}}>
        
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                /* height: '100%', */
                /* width:"100%", */
                /* backgroundColor:"white" */
            
            }}
        >
            <div className="tele_style" /* style={{width:"100%", height:"40vh", overflow: 'hidden', fontSize: '3em', fontFamily: 'IBMPlexMono-Light', color:"rgba(255,232,243,1)" }} */>
            <Teleprompter texts={texts} speed={speed} />
            </div>
            <div>
            <Formulario />
            </div>
            
        </div>
        </div>
    );
}

export default Pruevis;
