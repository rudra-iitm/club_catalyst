import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo3 from '../images/img3_.png'
import Alert from '@mui/material/Alert'
import { useLoginUserMutation } from "../services/userAuthApi";
import { Box, Text, Center, HStack, VStack, Image } from "@chakra-ui/react";
import { getToken, storeToken } from "../services/localStorageServices";
import { useDispatch } from "react-redux";
import { setUserToken } from "../features/authslice";
import axios from "axios";
// import st

const Login = () => {

  const dispatch = useDispatch();
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const actualData = {
      username: username,
      password: password,
    }
    if (username === "" || password === "") {
      setServerError({ 'non_field_errors': ['Fields may not be blank'] })
      console.log(12)
      console.log(server_error.non_field_errors);
    }
    else {
      const res = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_BACKEND_URI}/api/v1/user/login`,
        data: actualData,
      })
      // console.log(server_error)
      if (res.error) {
        // console.log(typeof (res.error.data.errors))
        console.log(res.error.data.errors)
        // console.log(res.error.data.errors)
        setServerError({ 'non_field_errors': ['Username or Password is not Valid'] })
      }
      // console.log(server_error)
      if (res.data) {
        // console.log(typeof (res.data))
        storeToken(res.data.token)
        let { access_token } = getToken()
        dispatch(setUserToken({ access_token: access_token }))
        navigate('/dashboard')
      }
    }
  };
  let { access_token } = getToken()
  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }))
  }, [access_token, dispatch])

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
if(windowSize.width>650)
  {
    return (
    <><Box width={windowSize.width} bgColor={"#6D31ED"} >
      <Box sx={{ flexGrow: 1 }} height={windowSize.height*0.893} pb={30} width={windowSize.width}>
        <HStack>
          <Box width={windowSize.width / 2}>
            <Center>
              <Image src={logo3} h={400} w={400} mt={30} />
            </Center>
          </Box>

          <Box height={'hvh'} width={560} marginTop={40} ml={30} mr={20} bgColor='#B9B2FE' border="GrayText" borderRadius={10} p={36}>
            <form>
              <Center><h3><b>Sign In</b></h3></Center>
              <div className="mb-3">
                <VStack spacing={10} align="flex-start">
                  <label><Text mb={1} as="b">User name</Text></label>
                  <input
                    type="name"
                    className="form-control"
                    placeholder="Enter username"
                    onChange={handleUsernameChange}
                  />
                </VStack>
              </div>
              <div className="mb-3">
                <VStack spacing={10} align="flex-start">
                  <label><Text mb={1} as="b">Password</Text></label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={handlePasswordChange}
                  />
                </VStack>
              </div>
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <HStack spacing={10}>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                      <Text mb={1} as="b">Remember me</Text>
                    </label>
                  </HStack>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                  Sign In
                </button>
              </div>
              <HStack spacing={30}>
                <Text as="b" mt={8}>
                  Don't have account <a href="/sign-up">sign up?</a>
                </Text>
                <Text as="b" mt={8}>
                  Forget<a href="/sent-reset-link"> Password?</a>
                </Text>
              </HStack>
            </form>
            <Box mt={10}>
              {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : <Alert severity="info">{"Fill above information then click to SignIn"}</Alert>}
            </Box>

          </Box>
        </HStack>
      </Box>
    </Box>
    </>
  )
}
else if(windowSize.width>100){
  return(
    <>
    <Box width={windowSize.width} bgColor={"#6D31ED"} p={10} py={60} >
     <Box height={'hvh'} width={'full'} marginTop={40} ml={30} mr={20} bgColor='#B9B2FE' border="GrayText" borderRadius={10} p={36}>
            <form>
              <Center><h3><b>Sign In</b></h3></Center>
              <div className="mb-3">
                <VStack spacing={10} align="flex-start">
                  <label><Text mb={1} as="b">User name</Text></label>
                  <input
                    type="name"
                    className="form-control"
                    placeholder="Enter username"
                    onChange={handleUsernameChange}
                  />
                </VStack>
              </div>
              <div className="mb-3">
                <VStack spacing={10} align="flex-start">
                  <label><Text mb={1} as="b">Password</Text></label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={handlePasswordChange}
                  />
                </VStack>
              </div>
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <HStack spacing={10}>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                      <Text mb={1} as="b">Remember me</Text>
                    </label>
                  </HStack>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                  Sign In
                </button>
              </div>
              <HStack spacing={30}>
                <Text as="b" mt={8}>
                  Don't have account <a href="/sign-up">sign up?</a>
                </Text>
                <Text as="b" mt={8}>
                  Forget<a href="/sent-reset-link"> Password?</a>
                </Text>
              </HStack>
            </form>
            <Box mt={10}>
              {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : <Alert severity="info">{"Fill above information then click to SignIn"}</Alert>}
            </Box>
          </Box>
          </Box>
    </>
  )
}
else{return<></>}
}
 
export default Login