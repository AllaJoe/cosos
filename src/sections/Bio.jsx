
import { motion } from 'framer-motion';
import Modalcito from '../components/Modalcito';
import { Link } from 'react-router-dom';
/* import NuevaCard from '../components/PracticaAnimacion'; */



const Bio = () => {
    return (
        <div style={{display:"flex", justifyContent:"center",/*  flexDirection:"column", */ alignItems:"center",marginTop:"150px"}}>
        

        <motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
    
        style={{
            /* position:"fixed", */
            display:"flex",
            flexWrap:"wrap",
            /* marginTop:"200px", */
            width:"1500px",
            /* flexDirection:"column", */
            justifyContent:"center",
            alignItems:"center",
            gap:"20px",
            height:"100%",
            marginBottom:"30px",
            backgroundColor:"#171717"
            }}>
             
             
            <div style={{display:"flex", gap:"20px", flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>
            <Link to="https://www.behance.net/gallery/142252339/Medif-UXUI-project-Rediseno-de-app">   
            <Modalcito  
            img1="https://i.ibb.co/bJKcJx9/Frame-619.png"
            img="https://i.ibb.co/bJKcJx9/Frame-619.png"
            h3="REDISEÑO APP MEDIFÉ"
            /* width="700px"
            height="500px" */
            p="Textito para la card que va abajo de la imagen y el titulo que se rellena con lo que sea y asi lo estoy hacieno"
            />
            </Link> 
            
            <Link to="https://www.behance.net/gallery/142209749/Indienac-app-design">
            <Modalcito  
            display="none"
            img1="https://i.ibb.co/ys1RBFs/Pantallazo-11-05-2023-01-36-09.png"
            img="" 
            h3="TITULONCITO CARD 2"
            /* imgWid="110%" */
            /* width="700px"
            height="500px" */
            p="Textito para la card que va abajo de la imagen y el titulo que se rellena con lo que sea y asi lo estoy hacieno"
            />
            </Link>
            </div>
            
            <div style={{display:"flex", gap:"20px", flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>
            <Modalcito  
            img1="https://i.ibb.co/8cHcgxY/00055-5555636378.png"
            img="https://i.ibb.co/Ld3BcR5/00019-88805685333-gigapixel-standard-scale-6-00x.jpg" redit="https://i.ibb.co/Ld3BcR5/00019-88805685333-gigapixel-standard-scale-6-00x.jpg"
            h3="TITULONCITO CARD 3"
            /* width="700px"
            height="500px" */
            p="Textito para la card que va abajo de la imagen y el titulo que se rellena con lo que sea y asi lo estoy hacieno"
            />
            
            <div className='cardsita2' style={{display:"flex", justifyContent:"center", fontFamily:"Montserrat-Thin", fontSize:"1.5rem", border:"1px solid white", alignItems:"center", color:"white", /* width:"700px", height:"500px", */ backgroundColor:"#171717"}}>
                <h2>MAS PRONTO</h2>
            </div>

            </div>

            {/* <div style={{display:"flex", width:"300px", height:"50vh"}}>

            </div>
            <div style={{display:"flex", width:"300px", height:"50vh"}}>

            </div> */}

            
        </motion.div>
        {/* <NuevaCard /> */}
        </div>
    );
    };

    export default Bio;
