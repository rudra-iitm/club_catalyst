import * as React from 'react'
import { Center, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { Box } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Cards from '../features/Cards.js';

import sae from '../images/saelogo.png'
import stac from '../images/stac_logo-removebg-preview.png'
import yantrik from '../images/yantrik Logo.png'
import saic from '../images/saic logo.png'
import mtb from '../images/mtb_logo-removebg-preview.png'
import robo from '../images/robo_logo-removebg-preview.png'
import sntc from '../images/sntccc.png'
import kp from '../images/kp_logo-removebg-preview.png'
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
 if(windowSize.width>600)
  {
    return(<>
    <Box sx={{ flexGrow: 1 }}  bgcolor={"#6D31ED"} height={'lvh'} width={'lvw'}>
        <VStack>
        <Box width={windowSize.width*0.98} >
          <Center>
          <HStack justifyContent={"space-between"}>
          <Box borderRadius={10}>
          <Cards HeadText="Kamand Prompt" Descrip="The KamandPrompt club organise Programming Contests, Hackathons and Coding Classes to prepare students for events like ACM ICPC and GSoC and bring out the best in them." Imgsrc={kp}></Cards>
          </Box>
          <Box borderRadius={10}>
          <Cards HeadText="Yantrik Club" Descrip="Yantrik conducts various interesting events, make amazing projects, teaches a lot to get the learnings into action." Imgsrc={yantrik}></Cards>
          </Box>
          </HStack>
          </Center>
        </Box>
        <Box width={windowSize.width*0.98} >
          <Center>
          <HStack justifyContent={"space-between"}>
          <Box borderRadius={10}>
          <Cards HeadText="Science and Technology Council" Descrip="The technical society of IIT Mandi or Science and Technology Council (SNTC) IIT Mandi consists of technical clubs for programming, Bioengineering, robotics,etc." Imgsrc={sntc}></Cards>
          </Box>
          <Box borderRadius={10}>
          <Cards HeadText="MTB Club" Descrip="The Mountain Biking Club(MtB) of IIT Mandi, since it's inception in the year 2017, back when we had started from 4 cycles and 5 members, has seen a constant growth." Imgsrc={mtb}></Cards>
          </Box>
          </HStack>
          </Center>
        </Box>
        <Box width={windowSize.width*0.98} >
          <Center>
          <HStack justifyContent={"space-between"}>
          <Box borderRadius={10}>
          <Cards HeadText="Society of Automative Engineers" Descrip="SAE IIT Mandi is a enthusiastic, motivated and passionate team of engineers whose interest resides in gears, suspensions, engines, brakes etc., talking in a nutshell an automobile." Imgsrc={sae}></Cards>
          </Box>
          <Box borderRadius={10}>
          <Cards HeadText="Space Technology and Astronomy Cell" Descrip="STAC is a club where one can explore every corner of the technical knowledge he/she has ! The club enables students to not only enhance their knowledge about the different aspects related to astronomy and astrophysics but also use the technologies available to develop their skills that will help them in future." Imgsrc={stac}></Cards>
          </Box>
          </HStack>
          </Center>
        </Box>
        <Box width={windowSize.width*0.98} >
          <Center>
          <HStack justifyContent={"space-between"}>
          <Box borderRadius={10}>
          <Cards HeadText="System Administration and Infosec Cel" Descrip="S.A.I.C. was created under the Programming Club, IIT Mandi to fullfil the need of a dedicated club for cybersecurity and other information security related events and activities" Imgsrc={saic}></Cards>
          </Box>
          <Box borderRadius={10}>
          <Cards HeadText="Robotronics Club" Descrip="Robotics + Electronics = Robotronics. This club works in the field of both robotics and electronics. In electronics domain, it works on analog and digital electronics helping in developing practical skills in building and designing circuits." Imgsrc={robo}></Cards>
          </Box>
          </HStack>
          </Center>
        </Box>
        </VStack>
      </Box>
  </>
  )}
  else if(windowSize.width>260){
    return(
      <>
          <Box sx={{ flexGrow: 1 }}  bgcolor={"#6D31ED"} height={'lvh'} width={'lvw'} pt={10}>
        <VStack>
        <Box width={windowSize.width*0.98} >
          <Center>
          <HStack justifyContent={"space-between"}>
          <Box borderRadius={10}>
          <Cards HeadText="Kamand Prompt" Descrip="The KamandPrompt club organise Programming Contests, Hackathons and Coding Classes to prepare students for events like ACM ICPC and GSoC and bring out the best in them." Imgsrc={kp}></Cards>
          </Box>
          </HStack>
          </Center>
        </Box>
        <Box width={windowSize.width*0.98} >
          <Center>
          <HStack justifyContent={"space-between"}>
          <Box borderRadius={10}>
          <Cards HeadText="Yantrik Club" Descrip="Yantrik conducts various interesting events, make amazing projects, teaches a lot to get the learnings into action." Imgsrc={yantrik}></Cards>
          </Box>
          </HStack>
          </Center>
        </Box>
        <Box width={windowSize.width*0.98} >
          <Center>
          <HStack justifyContent={"space-between"}>
          <Box borderRadius={10}>
          <Cards HeadText="Science and Technology Council" Descrip="The technical society of IIT Mandi or Science and Technology Council (SNTC) IIT Mandi consists of technical clubs for programming, Bioengineering, robotics,etc." Imgsrc={sntc}></Cards>
          </Box>
          </HStack>
          </Center>
        </Box>
        <Box width={windowSize.width*0.98} >
          <Center>
          <HStack justifyContent={"space-between"}>
          <Box borderRadius={10}>
          <Cards HeadText="MTB Club" Descrip="The Mountain Biking Club(MtB) of IIT Mandi, since it's inception in the year 2017, back when we had started from 4 cycles and 5 members, has seen a constant growth." Imgsrc={mtb}></Cards>
          </Box>
          </HStack>
          </Center>
        </Box>

        <Box width={windowSize.width*0.98} >
          <Center>
          <HStack justifyContent={"space-between"}>
          <Box borderRadius={10}>
          <Cards HeadText="Society of Automative Engineers" Descrip="SAE IIT Mandi is a enthusiastic, motivated and passionate team of engineers whose interest resides in gears, suspensions, engines, brakes etc., talking in a nutshell an automobile." Imgsrc={sae}></Cards>
          </Box>
          </HStack>
          </Center>
        </Box>
        <Box width={windowSize.width*0.98} >
          <Center>
          <HStack justifyContent={"space-between"}>
          <Box borderRadius={10}>
          <Cards HeadText="Space Technology and Astronomy Cell" Descrip="STAC is a club where one can explore every corner of the technical knowledge he/she has ! The club enables students to not only enhance their knowledge about the different aspects related to astronomy and astrophysics but also use the technologies available to develop their skills that will help them in future." Imgsrc={stac}></Cards>
          </Box>
          </HStack>
          </Center>
        </Box>        
        <Box width={windowSize.width*0.98} >
          <Center>
          <HStack justifyContent={"space-between"}>
          <Box borderRadius={10}>
          <Cards HeadText="System Administration and Infosec Cel" Descrip="S.A.I.C. was created under the Programming Club, IIT Mandi to fullfil the need of a dedicated club for cybersecurity and other information security related events and activities" Imgsrc={saic}></Cards>
          </Box>
          </HStack>
          </Center>
        </Box>
        <Box width={windowSize.width*0.98} >
          <Center>
          <HStack justifyContent={"space-between"}>
          <Box borderRadius={10}>
          <Cards HeadText="Robotronics Club" Descrip="Robotics + Electronics = Robotronics. This club works in the field of both robotics and electronics. In electronics domain, it works on analog and digital electronics helping in developing practical skills in building and designing circuits." Imgsrc={robo}></Cards>
          </Box>
          </HStack>
          </Center>
        </Box>

        </VStack>
      </Box>
      </>
    )
  }
  else{
    return(
      <>
      <Box sx={{ flexGrow: 1 }}  bgcolor={"#6D31ED"} height={windowSize.height} width={windowSize.width} pt={10}>
        <center><h1>Welcome</h1></center>
      </Box>
      </>
    )}
  }

export default Club