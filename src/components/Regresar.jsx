import { Link } from "react-router-dom";



const Regresar = () => {
    return (
     <div style={{position:"relative", zIndex:10000, top:50, left:50}}>
    <Link to="/Home">
    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9375 22.2222H24.0625V35.5556H30.625V15.5556L17.5 5.55556L4.375 15.5556V35.5556H10.9375V22.2222ZM0 40V13.3333L17.5 0L35 13.3333V40H0Z" fill="white"/>
</svg>

    </Link>   
    </div> 
    );
}

export default Regresar;
