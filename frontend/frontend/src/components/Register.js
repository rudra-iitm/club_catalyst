import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Box,Text, Center, VStack } from "@chakra-ui/react";
import Alert from '@mui/material/Alert'
import { useRegisterUserMutation } from "../services/userAuthApi";

const Register = () => {
  const [server_error, setServerError] = useState({})
  const navigate=useNavigate();
  const [registerUser,{isLoading}]=useRegisterUserMutation()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConPasswordChange = (e) => {
    setConpassword(e.target.value);
  };
  const handleRegister = async(e) => {
    e.preventDefault();
    console.log(username,email, password,conpassword);
    const actualData={
      name:username,
      email:email,
      password:password,
      conpassword:conpassword,
      tc:"True"
    }
    if(username==="" || email==="" || password==="" || conpassword==="")
    {
      setServerError({'non_field_errors':['Fields may not be blank']})
      console.log(12)
      console.log(server_error.non_field_errors);
    }
    else if(password!==conpassword)
    {
      setServerError({'non_field_errors':['Password and Confirm Password should match']})
      console.log(13)
      console.log(server_error.non_field_errors);
    }
    else{
    const res = await registerUser(actualData)
    // console.log(server_error)
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      // console.log(res.error.data.errors)
      setServerError({'non_field_errors':['User with this Email already exists.']})
    }
    // console.log(server_error)
    if (res.data) {
      // console.log(typeof (res.data))
      // console.log(res.data)
      navigate('/sign-in')
    }
  }
  };
  return (
    <Center>
    <Box height={540} width={470} marginTop={10} bgColor='#ACCDF3' border="GrayText" borderRadius={10} p={36}>
    <form id="register">
    <Center><h3><b>Sign Up</b></h3></Center>
        <div className="mb-3">
          <VStack spacing={10} align="flex-start">
          <label><Text mb={1} as="b">Username</Text></label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter Username"
            onChange={handleUsernameChange}
            />
            </VStack>
        </div>
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
        <VStack spacing={10} align="flex-start">
          <label><Text mb={1} as="b">Confirm Password</Text></label>
          
          <input
            type="password"
            className="form-control"
            placeholder="Enter Confirm password"
            onChange={handleConPasswordChange}
          />
          </VStack>
        </div>
         <div className="d-grid">
           <button type="button" className="btn btn-primary" onClick={handleRegister}>
             Sign Up
           </button>
         </div>
    </form>
    <Box mt={10}>
    {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : <Alert severity="info">{"Fill above information then click SignUp"}</Alert>}
    </Box>
    </Box>
    </Center>
  )
}

export default Register