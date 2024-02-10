import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert'
import { useLoginUserMutation } from "../services/userAuthApi";
import {Box,Text, Center, HStack, VStack } from "@chakra-ui/react";
import { getToken, storeToken } from "../services/localStorageServices";
import { useDispatch } from "react-redux";
import { setUserToken } from "../features/authslice";
// import st

const Login = () => {
  
  const dispatch=useDispatch();
  const [server_error, setServerError] = useState({})
  const navigate=useNavigate();
  const [loginUser,{isLoading}]=useLoginUserMutation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async(e) => {
    e.preventDefault();
    console.log(email, password);
    const actualData={
      email:email,
      password:password,
    }
    if(email==="" || password==="")
    {
      setServerError({'non_field_errors':['Fields may not be blank']})
      console.log(12)
      console.log(server_error.non_field_errors);
    }
    else{
    const res = await loginUser(actualData)
    // console.log(server_error)
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      // console.log(res.error.data.errors)
      setServerError({'non_field_errors':['Email or Password is not Valid']})
    }
    // console.log(server_error)
    if (res.data) {
      // console.log(typeof (res.data))
      console.log(res.data)
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

  return (
    <Center>
    <Box height={440} width={480} marginTop={40} bgColor='#ACCDF3' border="GrayText" borderRadius={10} p={36}>
    <form>
    <Center><h3><b>Sign In</b></h3></Center>
        <div className="mb-3">
          <VStack spacing={10} align="flex-start">
          <label><Text mb={1} as="b">Email address</Text></label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleEmailChange}
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
    {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : <Alert severity="info">{"Fill above information then click SignUp"}</Alert>}
    </Box>
    </Box>
    </Center>
  )
}

export default Login