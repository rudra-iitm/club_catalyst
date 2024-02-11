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

  const { access_token } = getToken();
  const [data, setData] = useState({ club: 'saic', email: "abc@gmail.com", name: 'Xyz', role: "secretery", username: 'a', amount: 5000, totalApprovedAmount: 90 });

  useEffect(() => {
    axios({
      method: 'get',
      headers: {
        'token': access_token
      },
      url: 'https://club-catalyst.onrender.com/api/v1/user/details',
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('An error occurred:', error.message);
        // Handle error gracefully
      });
  }, [access_token]);

  console.log(data);

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
                    <Text color={'white'} as={'h6'}>Expenses : {data.amount}</Text>
                    <Text color={'white'} as={'h6'}>{data.username}</Text>
                    <Text color={'white'} as={'h6'}>{data.username}</Text>
                    <Text color={'white'} as={'h6'}>{data.username}</Text>
                  </VStack>
                  <HStack width={windowSize.width * 0.25}>
                    <Image src={logo3} h={50} w={50} />
                  </HStack>
                </VStack>
              </Box>
            </Center>
            <Center>
              <Box bgcolor={'white'} height={windowSize.height * 0.97} width={windowSize.width * 0.75} right={15} position={'fixed'} top={10} sx={{ flexGrow: 1 }} borderRadius={10}>
                <HStack p={10} justifyContent={"space-around"} verticalAlign={"center"}>
                  <VStack>
                    <h1>345678</h1>
                  </VStack>
                  <VStack>
                    <h1>345678</h1>
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

export default Dashboard