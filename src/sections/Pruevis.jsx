
import Formulario from "../components/Formulario";
import Teleprompter from "../components/RuedaTexto";


const Pruevis = () => {

    const texts = ['DEJAME', 'TU', 'MENSAJE 😊'];
    const speed = 1500;



    return (
        <div style={{ }}>
        
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            
            }}
        >
            <div style={{width:"100%", height:"40vh", overflow: 'hidden', fontSize: '3em', fontFamily: 'IBMPlexMono-Light', /* color: '#FF4CA5' */ color:"rgba(255,232,243,1)" }}>
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
