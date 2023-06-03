
import '../Styles/otra.css';




const Otra = () => {
    return (
        <div className="otra_container">

            <div className='cont_cards1'>
                <div className='h_card1'>
                    <h1>CARD 1</h1>
                </div>
                <div className='h_card2'>
                    
                    <div className='dark_frame' style={{position:"absolute", zIndex:"1000", top:"0%", width:"100%", height:"100%", backgroundColor:"#000000", display:"flex", justifyContent:"center", alignItems:"center"}} /* style={{fontFamily:"Montserrat-Thin", position:"absolute", zIndex:"1000", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#000000", width:"100%", height:"100%"}} */>
                        <h1 style={{fontSize:"40px"}}>PORTFOLIO</h1>
                    </div>
                    
                    <img src="https://i.ibb.co/c6jhJJv/Frame-607.png" alt="" />
                </div>
            </div>

            <div className='cont_cards2'>
                <div className='h_card2'>
                    <h1>CARD 3</h1>
                </div>
                <div className='h_card1'>
                    <h1>CARD 4</h1>
                </div>
            </div>

        </div>
    );
}

export default Otra;
