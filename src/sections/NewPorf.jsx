import NewCarsBio from "../components/NewCardBio";
import '../Styles/NewCardBio.css'



const NewPorf = () => {
    return (
        <div style={{width:"100%", /* height:"100svh", */ gap:"20px", display:"flex", backgroundColor:"", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"150px"}}>

            <div className="contBioCards1">
                
                <div className="cardsSizes" style={{}}>
                    <NewCarsBio 
                    titleCard="CARD 1"
                    pCard="Initially built to create lifelike portraits of characters"
                    img="https://i.ibb.co/bJKcJx9/Frame-619.png"
                    />
                </div>
                <div className="cardsSizes" /* style={{width:"700px", height:"500px", backgroundColor:"pink"}} */>
                    <NewCarsBio 
                    titleCard="CARD2"
                    pCard="Initially built to create lifelike portraits of characters"
                    img="https://i.ibb.co/ys1RBFs/Pantallazo-11-05-2023-01-36-09.png"
                    />
                </div>
                
            </div>

            <div className="contBioCards2">
                <div className="cardsSizes">
                    <NewCarsBio 
                    titleCard="CARD3"
                    pCard="Initially built to create lifelike portraits of characters"
                    img="https://i.ibb.co/RzXQk39/00054-5555636377.png"
                    />
                </div>
                <div className="cuartaCard">
                    {/* <NewCarsBio 
                    titleCard="CARD4"
                    /> */}
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"100%", backgroundColor:"rgba(0,0,0,0.0)", border:"2px solid white"}}>
                        <h2 style={{fontSize:"3rem", fontFamily:"SharpGrotesk-Thin20", color:"white"}}>MAS PRONTO</h2>
                    </div>
                </div>
                
                    
                
            </div>

        </div>
    );
}

export default NewPorf;
