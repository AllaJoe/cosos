
import PropTypes from 'prop-types';
import { Card, CardBody } from '@chakra-ui/react'
/* import { Button } from '@chakra-ui/react' */
import { Image, Text, Heading, Stack, Divider,/*  CardFooter, ButtonGroup  */} from '@chakra-ui/react'





const MyCard = (props) => {
    return( 
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={props.img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      {/* <Text color='blue.600' fontSize='2xl'>
        $450
      </Text> */}
    </Stack>
  </CardBody>
  <Divider />
  {/* <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter> */}
</Card>

    )
}

MyCard.propTypes = {
  img: PropTypes.string
}



export default MyCard;

