import Calculador from "../components/Calculador";
import { useState } from 'react';
/* import DivGenerator from "../components/Generador"; */
/* import Medida from "../components/Medida"; */

import TextoDesplegable from "../components/TextoDesplegable";
import PngGlow from "../components/PngGlow";


const Pruevis = () => {

    /* const estilos = {
        
        backgroundColor:"green",
        display:"flex",
        justifyContent:"space-evenly",
    }

    const div1 = {
        backgroundColor:"grey",
        height:"50vh"
    }

    const div2 = {
        backgroundColor:"lightblue",
        height:"50vh",
    }

    const div3 = {
        backgroundColor:"yellow",
        height:"50vh",
    } */

    const [open, set] = useState(true);

    return (
        <>
        {/* <div style={estilos}>
            <div>
                <h2>ESTO ES UN GENERADOR</h2>
                <DivGenerator />
            </div>
            <div style={div1} >
                <h2>ESTE ES EL DIV 1</h2>
            </div>
            <div style={div2}>
            <h2>ESTE ES EL DIV 2</h2>
            </div>
            <div style={div3}>
            <h2>ESTE ES EL DIV 3</h2>
            </div>

        </div> */}
        
        {/* <Medida /> */}
        <div style={{display:"flex", flexDirection:"column"}}  onClick={() => set((state) => !state)}>
          <TextoDesplegable open={open}>
            <Calculador scaleLength="25.5" frets="24" />
            <span>
                <img style={{width:"20%"}} src="https://i.ibb.co/vxKP113/nuevo-logo.png" alt="" />
            </span>
            <span>Lorem</span>
            <span>Ipsum</span>
            <span>Dolor</span>
            <span>Sit</span>
          </TextoDesplegable>
          <PngGlow />
      
        </div>
        </>
    );
}

export default Pruevis;
