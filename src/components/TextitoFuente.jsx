import "../Styles/fonts.css"
import {Box} from '@chakra-ui/react';

const TextitoFuente = () => {

    const stilitos = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px',
        /* backgroundColor: 'black' */
    }

    return(
        <Box sx={stilitos}>
        <h1 className="funete-practica"> HOLA ME LLAMO DAMIAN</h1>
        </Box>
    )
}

export default TextitoFuente;