import { Center, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { Box } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
// import logo1 from '../images/img1_.png'
// import logo2 from '../images/img2.jpg'
import logo3 from '../images/img3_.png'
import logo4 from '../images/img4.jpg'
import React, { useEffect, useState } from 'react'

const Home = () => {
  
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

  return (
    
    <>
      <Box sx={{ flexGrow: 1 }}  bgcolor={"#6D31ED"} height={500}>
        <HStack>
        <Box width={windowSize.width}>
          <Center>
          <VStack>
            <Text as={"h1"} color={'white'} paddingLeft={100} paddingRight={100} paddingTop={100} align={'center'} fontWeight={'bold'}>
              Welcome to Student Gymkhana
            </Text>
            <Text as={"h7"} color={'white'} padding={10} align={'center'} fontWeight={'bold'}>
            Payment processing platform that facilitates transactions between faculty advisors and dean with club coordinators and secretaries.
            </Text>          
          </VStack>
          </Center>
        </Box>
        <Box width={windowSize.width}>
        <Center>
          <Image src={logo3 } h={400} w={400} mt={30}/>
          </Center>
          </Box>
        </HStack>
      </Box>
      <Box sx={{ flexGrow: 1 }}  bgcolor={"white"} height={250}>
      <HStack>
        <Box width={windowSize.width}>
          <Image src={logo4 } h={200} w={230} mt={10} ml={40}/>
        </Box>
        <Box width={windowSize.width}>
          <Center>
          <VStack>
            <Text as={"h3"} color={'black'} paddingLeft={10} paddingRight={10} paddingTop={10} align={'center'} fontWeight={'bold'}>
              Contact Us
            </Text>
            <HStack pl={42}>
              <PhoneIcon/>
              <Text as={"h6"} color={'black'}  paddingRight={10} paddingTop={10} align={'center'} >
              Phone : 0000000001
            </Text>
            </HStack>
            <HStack pl={60}>
              <EmailIcon/>
              <Text as={"h6"} color={'black'}  paddingRight={10} paddingTop={10} align={'center'} >
              Email : abc@gmai.com
            </Text>
            </HStack>
            {/* <Text as={"h7"} color={'black'} padding={10} align={'center'} fontWeight={'bold'}>
            Payment processing platform that facilitates transactions between faculty advisors and dean with club coordinators and secretaries.
            </Text>           */}
          </VStack>
          </Center>
        </Box>
        </HStack>
      </Box>
      <Box sx={{ flexGrow: 1 }}  bgcolor={"black"} height={100}>
        <Center>
          <Text as={"h6"} color={'white'} pt={38}>
            Copyright © 2024 - Digital & Computing Services, IIT Mandi
          </Text>
        </Center>
      </Box>
    </>
  )
}

export default Home