import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert'
import { useSentResetLinkMutation } from "../services/userAuthApi";
import {Box,Text, Center, HStack, VStack } from "@chakra-ui/react";

const ForgetPass = () => {
  const [server_error, setServerError] = useState({})
  const navigate=useNavigate();
  const [sentResetLink,{isLoading}]=useSentResetLinkMutation()
  const [email, setEmail] = useState("")
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleReset = async(e) => {
    console.log(email);
    e.preventDefault();
    const actualData={
      email:email,
    }
    if(email==="")
    {
      setServerError({'non_field_errors':['Fields may not be blank']})
      console.log(12)
      console.log(server_error.non_field_errors);
    }
    else{
    const res = await sentResetLink(actualData)
    // console.log(server_error)
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      // console.log(res.error.data.errors)
      setServerError({'non_field_errors':['Email is not Valid']})
    }
    // console.log(server_error)
    if (res.data) {
      // console.log(typeof (res.data))
      // console.log(res.data)
      navigate('/sign-in')
    }
  }
  };

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
    <Box width={'hvw'} height={windowSize.height*0.892} bgColor={"#6D31ED"} p={20}>
    <Center>
    <Box height={'full'} width={'full'} marginTop={110} bgColor='#ACCDF3' border="GrayText" borderRadius={10} p={26}>
    <form>
    <Center><h3><b>Reset Password</b></h3></Center>
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
    
         <div className="d-grid">
           <button type="button" className="btn btn-primary" onClick={handleReset}>
             Sent Reset Link
           </button>
         </div>
    </form>
      <Box mt={10}>
    {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : <Alert severity="info">{"Fill above information then click Sent Reset Link"}</Alert>}
    </Box>
    </Box>
    </Center>
    </Box>
  )
}

export default ForgetPass