
import PropTypes from 'prop-types';
import './container-div.css';
import {Container, Heading, Text} from '@chakra-ui/react'



const ContainerDiv = ({children} ) => {
    
    return(
        <div style={{backgroundColor:"green"} }>
            <Container maxW="1500px" mt="0" bg="pink.500">
                    <div className='container-div'>
                    <div style={{display:"flex", flexDirection:"column", width:"1500px", backgroundColor:"yellow", textAlign:"center", alignItems:"center"} }>   
                    <Heading className='cont-chakra' as='' size='lg' mt="50px">HOOOOLLAAAA GENTEEEE</Heading>
                    <Text maxW="500px" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non saepe nobis optio cupiditate eos iusto consequatur, in nostrum? Totam.</Text>
                    </div> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia nemo sit accusamus temporibus ea reiciendis aliquam dolore! Numquam necessitatibus at maxime! Odit iure quisquam architecto. Quasi beatae obcaecati id.
                        {children}                    
                    </div>                                   
            </Container>
        </div>
    )
}

ContainerDiv.propTypes = {
    children: PropTypes.element
        
    
};

export default ContainerDiv