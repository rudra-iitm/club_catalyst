import { ListItem, ListItemButton } from '@mui/material';
import { Button, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { Box, } from '@mui/material'
import logo2 from '../images/logogo.png'
import logo3 from '../images/logoggo.png'
import React, { useEffect, useState } from 'react'
import { getToken, removeToken } from '../services/localStorageServices'
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authslice';
import { useDispatch } from 'react-redux';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import axios from 'axios';
import { Center, HStack, Image, Text, VStack } from '@chakra-ui/react';

const Dashboard = () => {
  const [bool1, setBool1] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [bool3, setBool3] = useState(false);

  const { access_token } = getToken();
  const [data, setData] = useState({});

  useEffect(() => {
    axios({
      method: 'get',
      headers: {
        'token': access_token
      },
      url: 'https://club-catalyst.onrender.com/api/v1/user/details',
    })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error('An error occurred:', error.message);
        // Handle error gracefully
      });
  }, [access_token]);

  console.log(data);
  console.log(data.email, data.username);

  const appClickHand1 = (e) => {
    setBool1(true);
  }
  const appClickHand2 = (e) => {
    setBool3(true)
  }
  const appClickHand3 = (e) => {
    setBool3(true)
  }
  const reqClickHand = (e) => {
    navigate('/request')
  }
  const handlelogout = (e) => {
    console.log(access_token);
    removeToken();

    dispatch(unSetUserToken({ access_token: null }))
    navigate('/sign-in')
  }
  // const { data, isSuccess } = useGetLoggedUserQuery(access_token)
  // const [userData, setUserData] = useState({
  //   email: "",
  //   name: ""
  // })
  // console.log(data)
  const dispatch = useDispatch()
  const navigate = useNavigate();
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

  if (data.role === 'secretery') {
    return (
      <>
        <CssBaseline />
        <center>
          <Box bgcolor={'#6D31ED'} height={windowSize.height} sx={{ flexGrow: 1 }}>
            <HStack>
              <Center>
                <Box bgcolor={'#6D31ED'} height={windowSize.height} width={windowSize.width * 0.25} sx={{ flexGrow: 1 }} position={'fixed'} top={0} left={0} justifyContent={"space-between"} >
                  <VStack height={windowSize.height} width={windowSize.width * 0.25} left={0} top={0} justifyContent={"space-between"} verticalAlign={"center"}>
                    <HStack width={windowSize.width * 0.25}>
                      <Image src={logo2} h={50} w={50} />
                    </HStack>
                    <VStack>
                      <Text color={'white'} as={'h3'} fontWeight={"bold"}>{data.name}</Text>
                      <Text color={'white'} as={'h6'}>{data.email}</Text>
                      {/* <Text color={'white'} as={'h6'}>Total expenses this month : {data.totalApprovedAmount}</Text> */}
                      <Text color={'white'} as={'h6'}>{data.club}</Text>
                      <Text color={'white'} as={'h6'}>{data.role}</Text>
                    </VStack>
                    <HStack width={windowSize.width * 0.25}>
                      <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={100} alignContent={'center'} borderRadius={10}>
                        <ListItemButton onClick={handlelogout} alignContent={'center'} >Log out</ListItemButton>
                      </Box>
                    </HStack>
                  </VStack>
                </Box>
              </Center>
              <Center>
                <Box bgcolor={'white'} height={windowSize.height * 0.97} width={windowSize.width * 0.75} right={15} position={'fixed'} top={10} sx={{ flexGrow: 1 }} borderRadius={10}>
                  <HStack p={20} justifyContent={"space-around"} verticalAlign={"center"} top={40} position={'fixed'} right={0} left={windowSize.width * 0.25}>
                    <VStack spacing={30}>
                      <Text as={'h4'} fontWeight={'bold'}>Upcoming Events</Text>
                      <Box border={"ButtonFace"} boxShadow={10} borderRadius={3} p={1}>
                        <Text as={'h6'} fontWeight={'bold'}>Event XYZ</Text>
                        <Text fontSize={10}>Event Detail:This event is to be happening very soon</Text>
                        <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={190} alignContent={'center'} borderRadius={10}>
                          <ListItemButton onClick={reqClickHand} alignContent={'center'}>Raise Fund Request</ListItemButton>
                        </Box>
                      </Box>
                      <Box border={"ButtonFace"} boxShadow={10} borderRadius={3} p={1}>
                        <Text as={'h6'} fontWeight={'bold'}>Event XYZ</Text>
                        <Text fontSize={10}>Event Detail:This event is to be happening very soon</Text>
                        <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={190} alignContent={'center'} borderRadius={10}>
                          <ListItemButton onClick={reqClickHand} alignContent={'center'}>Raise Fund Request</ListItemButton>
                        </Box>
                      </Box>
                      <Box border={"ButtonFace"} boxShadow={10} borderRadius={3} p={1}>
                        <Text as={'h6'} fontWeight={'bold'}>Event XYZ</Text>
                        <Text fontSize={10}>Event Detail:This event is to be happening very soon</Text>
                        <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={190} alignContent={'center'} borderRadius={10}>
                          <ListItemButton onClick={reqClickHand} alignContent={'center'}>Raise Fund Request</ListItemButton>
                        </Box>
                      </Box>
                    </VStack>
                    <VStack spacing={30}>
                      <Text as={'h4'} fontWeight={'bold'}>Pending Request</Text>
                      <Box border={"ButtonFace"} boxShadow={10} borderRadius={3} p={1}>
                        <Text as={'h6'} fontWeight={'bold'}>Event XYZ</Text>
                        <Text fontSize={10}>Event Detail:This event is to be happening very soon</Text>
                        <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={85} alignContent={'center'} borderRadius={10}>
                          <ListItem alignContent={'center'}>Waiting</ListItem>
                        </Box>
                      </Box>
                      <Box border={"ButtonFace"} boxShadow={10} borderRadius={3} p={1}>
                        <Text as={'h6'} fontWeight={'bold'}>Event XYZ</Text>
                        <Text fontSize={10}>Event Detail:This event is to be happening very soon</Text>
                        <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={85} alignContent={'center'} borderRadius={10}>
                          <ListItem alignContent={'center'}>Waiting</ListItem>
                        </Box>
                      </Box>
                      <Box border={"ButtonFace"} boxShadow={10} borderRadius={3} p={1}>
                        <Text as={'h6'} fontWeight={'bold'}>Event XYZ</Text>
                        <Text fontSize={10}>Event Detail:This event is to be happening very soon</Text>
                        <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={85} alignContent={'center'} borderRadius={10}>
                          <ListItem alignContent={'center'}>Waiting</ListItem>
                        </Box>
                      </Box>
                    </VStack>
                  </HStack>
                </Box>
              </Center>
            </HStack>
          </Box>
        </center>
      </>
    )
  }
  else {
    return (
      <>
        <CssBaseline />
        <center>
          <Box bgcolor={'#6D31ED'} height={windowSize.height} sx={{ flexGrow: 1 }}>
            <HStack>
              <Center>
                <Box bgcolor={'#6D31ED'} height={windowSize.height} width={windowSize.width * 0.25} sx={{ flexGrow: 1 }} position={'fixed'} top={0} left={0} justifyContent={"space-between"} >
                  <VStack height={windowSize.height} width={windowSize.width * 0.25} left={0} top={0} justifyContent={"space-between"} verticalAlign={"center"}>
                    <HStack width={windowSize.width * 0.25}>
                      <Image src={logo2} h={50} w={50} />
                    </HStack>
                    <VStack>
                      <Text color={'white'} as={'h3'} fontWeight={"bold"}>{data.name}</Text>
                      <Text color={'white'} as={'h6'}>{data.email}</Text>
                      {/* <Text color={'white'} as={'h6'}>Expenses : {data.amount}</Text> */}
                      <Text color={'white'} as={'h6'}>{data.role}</Text>
                      <Text color={'white'} as={'h6'}>{data.username}</Text>
                    </VStack>
                    <HStack width={windowSize.width * 0.25}>
                      <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={100} alignContent={'center'} borderRadius={10}>
                        <ListItemButton onClick={handlelogout} alignContent={'center'} >Log out</ListItemButton>
                      </Box>
                      {/* <Button onClick={handlelogout} bgcolor={'blue'}>Log out</Button> */}
                      {/* <Image src={logo3} h={50} w={50} /> */}
                    </HStack>
                  </VStack>
                </Box>
              </Center>
              <Center>
                <Box bgcolor={'white'} height={windowSize.height * 0.97} width={windowSize.width * 0.75} right={15} position={'fixed'} top={10} sx={{ flexGrow: 1 }} borderRadius={10}>
                  <HStack p={20} justifyContent={"space-around"} verticalAlign={"center"} top={40} position={'fixed'} right={0} left={windowSize.width * 0.25}>
                    <VStack spacing={30}>
                      <Text as={'h4'} fontWeight={'bold'}>Expenses</Text>
                      <Box border={"ButtonFace"} boxShadow={10} borderRadius={3} p={1}>
                        <Text as={'h6'} fontWeight={'bold'}>Event XYZ</Text>
                        <Text fontSize={10}>Event Detail:This event is to be happening very soon</Text>
                        <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={75} alignContent={'center'} borderRadius={10}>
                          <ListItem alignContent={'center'}>Done</ListItem>
                        </Box>
                      </Box>
                      <Box border={"ButtonFace"} boxShadow={10} borderRadius={3} p={1}>
                        <Text as={'h6'} fontWeight={'bold'}>Event XYZ</Text>
                        <Text fontSize={10}>Event Detail:This event is to be happening very soon</Text>
                        <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={75} alignContent={'center'} borderRadius={10}>
                          <ListItem alignContent={'center'}>Done</ListItem>
                        </Box>
                      </Box>
                      <Box border={"ButtonFace"} boxShadow={10} borderRadius={3} p={1}>
                        <Text as={'h6'} fontWeight={'bold'}>Event XYZ</Text>
                        <Text fontSize={10}>Event Detail:This event is to be happening very soon</Text>
                        <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={75} alignContent={'center'} borderRadius={10}>
                          <ListItem alignContent={'center'}>Done</ListItem>
                        </Box>
                      </Box>
                    </VStack>
                    <VStack spacing={30}>
                      <Text as={'h4'} fontWeight={'bold'}>Pending Request</Text>
                      <Box border={"ButtonFace"} boxShadow={10} borderRadius={3} p={1}>
                        <Text as={'h6'} fontWeight={'bold'}>Event XYZ</Text>
                        <Text fontSize={10}>Event Detail:This event is to be happening very soon</Text>
                        <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={95} alignContent={'center'} borderRadius={10}>
                          {!bool1 ? <ListItemButton onClick={appClickHand1} alignContent={'center'}>Approve</ListItemButton> : <ListItem alignContent={'center'}>Approved</ListItem>}
                        </Box>
                      </Box>
                      <Box border={"ButtonFace"} boxShadow={10} borderRadius={3} p={1}>
                        <Text as={'h6'} fontWeight={'bold'}>Event XYZ</Text>
                        <Text fontSize={10}>Event Detail:This event is to be happening very soon</Text>
                        <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={95} alignContent={'center'} borderRadius={10}>
                          {!bool2 ? <ListItemButton onClick={appClickHand2} alignContent={'center'}>Approve</ListItemButton> : <ListItem alignContent={'center'}>Approved</ListItem>}
                        </Box>
                      </Box>
                      <Box border={"ButtonFace"} boxShadow={10} borderRadius={3} p={1}>
                        <Text as={'h6'} fontWeight={'bold'}>Event XYZ</Text>
                        <Text fontSize={10}>Event Detail:This event is to be happening very soon</Text>
                        <Box border={"ButtonFace"} boxShadow={20} bgcolor={'#ACCDF3'} width={95} alignContent={'center'} borderRadius={10}>
                          {!bool3 ? <ListItemButton onClick={appClickHand2} alignContent={'center'}>Approve</ListItemButton> : <ListItem alignContent={'center'}>Approved</ListItem>}
                        </Box>
                      </Box>

                    </VStack>
                  </HStack>
                </Box>
              </Center>
            </HStack>
          </Box>
        </center>
      </>
    )
  }
}

export default Dashboard