
import { motion } from 'framer-motion';
import Modalcito from '../components/Modalcito';
/* import NuevaCard from '../components/PracticaAnimacion'; */



const Bio = () => {
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
        

        <motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
    
        style={{
            /* position:"fixed", */
            display:"flex",
            flexWrap:"wrap",
            marginTop:"200px",
            width:"1100px",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            gap:"20px",
            height:"100%",
            backgroundColor:"#171717"
            }}>
             
            <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
            <Modalcito  
            img1="https://i.ibb.co/bJKcJx9/Frame-619.png"
            img="https://i.ibb.co/bJKcJx9/Frame-619.png"
            h3="REDISEÑO APP MEDIFÉ"
            /* width="500px" */
            p="Textito para la card que va abajo de la imagen y el titulo que se rellena con lo que sea y asi lo estoy hacieno"
            />

            <Modalcito  
            img1="https://i.ibb.co/ys1RBFs/Pantallazo-11-05-2023-01-36-09.png"
            img="https://i.ibb.co/N6Dq3Cv/00005-3354756848346-gigapixel-standard-scale-4-00x-gigapixel-standard-scale-1-00x.jpg" 
            h3="TITULONCITO CARD 2"
            imgWid="110%"
            /* width="500px" */
            p="Textito para la card que va abajo de la imagen y el titulo que se rellena con lo que sea y asi lo estoy hacieno"
            />
            </div>
            
            
            <Modalcito  
            img1="https://i.ibb.co/8cHcgxY/00055-5555636378.png"
            img="https://i.ibb.co/Ld3BcR5/00019-88805685333-gigapixel-standard-scale-6-00x.jpg" redit="https://i.ibb.co/Ld3BcR5/00019-88805685333-gigapixel-standard-scale-6-00x.jpg"
            h3="TITULONCITO CARD 3"
           /*  width="500px" */
            p="Textito para la card que va abajo de la imagen y el titulo que se rellena con lo que sea y asi lo estoy hacieno"
            />
            
            <div style={{display:"flex", justifyContent:"center", fontFamily:"Montserrat-Thin", fontSize:"1.5rem", border:"1px solid white", alignItems:"center", color:"white", width:"500px", height:"50vh", backgroundColor:"#171717"}}>
                <h2>MAS PRONTO</h2>
            </div>

            {/* <Modalcito  
            img1=""
            colorBg="#202020"
            img="https://i.ibb.co/ys1RBFs/Pantallazo-11-05-2023-01-36-09.png" 
            h3="MAS PRONTO"
            border="1px solid white"
            p="Textito para la card que va abajo de la imagen y el titulo que se rellena con lo que sea y asi lo estoy hacieno"           
            opacity="100%"
            bgDiv="#202020"
            
            /> */}

            <div style={{width:"300px", height:"50vh"}}>

            </div>
            <div style={{width:"300px", height:"50vh"}}>

            </div>

            
        </motion.div>
        {/* <NuevaCard /> */}
        </div>
    );
    };

    export default Bio;
