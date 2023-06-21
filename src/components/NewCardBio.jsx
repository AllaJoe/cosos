import PropTypes from "prop-types";
import '../Styles/newCardBio.css'

const NewCarsBio = (props) => {
    return (
        <div className="CardsBio">
            <div style={{position:"absolute", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img className="imgCardBio" src={props.img} alt="" />
            </div>
            <div className='blackDiv'>
                <h2 className="h2Blackdiv">{props.titleCard} </h2>
                <p>{props.pCard} </p>
            </div>
            
            
        </div>
    )
}

NewCarsBio.propTypes = {  
    titleCard: PropTypes.string, 
    pCard: PropTypes.string, 
    img: PropTypes.string, 

}  
export default NewCarsBio;