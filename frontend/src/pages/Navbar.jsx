import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope,faPhone } from "@fortawesome/free-solid-svg-icons";
import logo2 from '../images/img2.jpg'
import logo4 from '../images/img4.jpg'
const Navbar=()=>{
  return (
    <Box
    position="fixed"
    top={0}
    left={0}
    right={0}
    translateY={0}
    transitionProperty="transform"
    transitionDuration=".3s"
    transitionTimingFunction="ease-in-out"
    backgroundColor="white"
  >
    <Box color="white" maxWidth="1280px" margin="0 auto">
      <HStack
        px={10}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <nav>
          <HStack spacing={9}>
          
            <Image src={logo2} h={50} w={55}></Image>
            <Text color={"black"} fontWeight="bold" fontFamily={"unset"}>Gymkhana IIT Mandi</Text>
          
          </HStack>
        </nav>
        <nav>
          <HStack spacing={8}>
          <a href="https://www.iitmandi.ac.in/"><Image src={logo4} h={14} w={100}/></a>
          </HStack>
        </nav>
        <nav>
          <HStack spacing={8}>
               <Button w={70} backgroundColor="#F5F1FE">Log in</Button>
               <Button w={70} backgroundColor="#6D31ED">Sign Up</Button>
          </HStack>
        </nav>

      </HStack>
    </Box>
  </Box>

  )
};
export default Navbar;