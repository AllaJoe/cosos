import Generador from "../components/Generador";



const Pruevis = () => {

    const estilos = {
        
        backgroundColor:"green",
        display:"flex",
        justifyContent:"space-evenly",
    }

    /* const div1 = {
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

    return (
        <div style={estilos}>
            <div>
                <h2>ESTO ES UN GENERADOR</h2>
                <Generador />
            </div>
           {/*  <div style={div1} >
                <h2>ESTE ES EL DIV 1</h2>
            </div>
            <div style={div2}>
            <h2>ESTE ES EL DIV 2</h2>
            </div>
            <div style={div3}>
            <h2>ESTE ES EL DIV 3</h2>
            </div> */}

        </div>
    );
}

export default Pruevis;
