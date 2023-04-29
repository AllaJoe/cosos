import { ChakraProvider } from '@chakra-ui/react' 
import PropTypes from 'prop-types';



const ChakraComp = ({children} ) => {
    return(
    <ChakraProvider>
        {children}
    </ChakraProvider>
    )
}

ChakraComp.propTypes = {
    children: PropTypes.element
        
    
};

export default ChakraComp