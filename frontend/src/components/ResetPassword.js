import React, { useState } from "react";
import {Box,Text, Center, VStack } from "@chakra-ui/react";
import Alert from '@mui/material/Alert'
import { useResetPasswordMutation } from "../services/userAuthApi";
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [server_error, setServerError] = useState({})
  const [resetPassword,{isLoading}]=useResetPasswordMutation()
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("")
  const navigate=useNavigate();
  const { id, token } = useParams();

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConpassChange = (e) => {
    setConpassword(e.target.value);
  };
  
  const handleReset = async(e) => {
    console.log(password,conpassword);
    e.preventDefault();
    const actualData={
      password:password,
      conpassword:conpassword
    }
    if(password==="" || conpassword==="")
    {
      setServerError({'non_field_errors':['Fields may not be blank']})
      console.log(12)
      console.log(server_error.non_field_errors);
    }
    else{
    const res = await resetPassword({actualData,id,token})
    // console.log(server_error)
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      // console.log(res.error.data.errors)
      setServerError({'non_field_errors':['Password and confrim password should be same']})
    }
    // console.log(server_error)
    if (res.data) {
      // console.log(typeof (res.data))
      // console.log(res.data)
      setServerError({'non_field_errors':['Password changed successfully']})
      navigate('/sign-in')
    }
  }
  };
  return (
    <Center>
    <Box height={350} width={470} marginTop={100} bgColor='#ACCDF3' border="GrayText" borderRadius={10} p={28}>
    <form>
    <Center><h3><b>Reset Password</b></h3></Center>
        <div className="mb-3">
        <VStack spacing={10} align="flex-start">
          <label><Text mb={1} as="b">Password</Text></label>
          
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handlePassChange}
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
            onChange={handleConpassChange}
          />
          </VStack>
        </div>
         <div className="d-grid">
           <button type="button" className="btn btn-primary" onClick={handleReset}>
             Submit
           </button>
         </div>
    </form>
    <Box mt={10}>
    {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : <Alert severity="info">{"Fill above information then click Submit"}</Alert>}
    </Box>
    </Box>
    </Center>
  )
}

export default ResetPassword