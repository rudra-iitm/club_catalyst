import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Text, Center, VStack } from "@chakra-ui/react";
import Alert from '@mui/material/Alert'
import { useRegisterUserMutation } from "../services/userAuthApi";
import axios from "axios";

const GenReq = () => {
  // return(<h1>fghjk</h1>)
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)
  const [club, setClub] = useState("");
  const [file, setFile] = useState(null)
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleFileChange = (e) => {
    setFile(e.target.value);
  };
  const handleClubChange = (e) => {
    setClub(e.target.value);
  };
  const handleRequest = async (e) => {
    e.preventDefault();
    console.log(club, description, amount);
    const actualData = {
      club: club,
      description: description,
      amount: amount,
      attachment: file,
    }
    if (club === "" || description === "" || amount === 0) {
      setServerError({ 'non_field_errors': ['Fields may not be blank'] })
      console.log(12)
      console.log(server_error.non_field_errors);
    }
    else {
      // const res = await registerUser(actualData)
      const res = await axios({
        method: 'post',
        url: 'https://club-catalyst.onrender.com/api/v1/requests/submit',
        data: actualData,
      })
      // console.log(server_error)
      if (res.error) {
        // console.log(typeof (res.error.data.errors))
        // console.log(res.error.data.errors)
        // console.log(res.error.data.errors)
        setServerError({ 'non_field_errors': ['User with this Email already exists.'] })
      }
      // console.log(server_error)
      if (res.data) {
        // console.log(typeof (res.data))
        navigate('/dashboard')
      }
    }
  };
  return (
    <Center>
      <Box height={580} width={470} marginTop={10} bgColor='#ACCDF3' border="GrayText" borderRadius={10} p={36}>
        <form id="register">
          <Center><h3><b>Request</b></h3></Center>
          <div className="mb-3">
            <VStack spacing={10} align="flex-start">
              <label><Text mb={1} as="b">Club</Text></label>
              <input
                type="name"
                className="form-control"
                placeholder="Enter Club"
                onChange={handleClubChange}
              />
            </VStack>
          </div>
          <div className="mb-3">
            <VStack spacing={10} align="flex-start">
              <label><Text mb={1} as="b">Description</Text></label>
              <input
                type="name"
                className="form-control"
                placeholder="Enter Description"
                onChange={handleDescriptionChange}
              />
            </VStack>
          </div>
          <div className="mb-3">
            <VStack spacing={10} align="flex-start">
              <label><Text mb={1} as="b">Amount</Text></label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Amount"
                onChange={handleAmountChange}
              />
            </VStack>
          </div>
          <div className="mb-3">
            <VStack spacing={10} align="flex-start">
              <label><Text mb={1} as="b">Attachment</Text></label>
              <input
                type="file"
                className="form-control"
                onChange={handleFileChange}
              />
            </VStack>
          </div>
          <div className="d-grid">
            <button type="button" className="btn btn-primary" onClick={handleRequest}>
              Raise Request
            </button>
          </div>
        </form>
        <Box mt={10}>
          {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : <Alert severity="info">{"Fill above information then click SignUp"}</Alert>}
        </Box>
      </Box>
    </Center>
  );
}
export default GenReq