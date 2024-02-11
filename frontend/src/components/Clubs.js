import * as React from 'react'
import { Center, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { Box } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Cards from '../features/Cards.js';

import logo1 from '../images/img1.png'
// import logo2 from '../images/img2.jpg'
import logo3 from '../images/img3_.png'
import logo4 from '../images/img4.jpg'
import { useEffect, useState } from 'react'

const Club=()=>{
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  
 
  return(<>
    <Box sx={{ flexGrow: 1 }}  bgcolor={"#6D31ED"} height={900}>
        <HStack>
        <Box width={windowSize.width} p={3}>
          <Center>
          <VStack>
          <Box borderRadius={10} >
          <Cards HeadText="ABCD" Descrip="asdfghjkjhfghjkjhgfdfghjkgf" Imgsrc={logo3}></Cards>
          </Box>
          <Card variant="outlined">{card}</Card>
          {/* <Card variant="outlined">{card}</Card> */}
          </VStack>
          </Center>
        </Box>
        <Box width={windowSize.width}>
          <Center>
            <VStack>
            <Card variant="outlined">{card}</Card>
            <Card variant="outlined">{card}</Card>
            </VStack>
          </Center>
        </Box>
        <Box width={windowSize.width} p={3}>
          <Center>
          <VStack>
          <Card variant="outlined">{card}</Card>
          <Card variant="outlined">{card}</Card>
          </VStack>
          </Center>
        </Box>
        </HStack>
      </Box>
      
      
  </>)
}
export default Club