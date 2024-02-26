import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Text, Center, VStack, SelectField } from "@chakra-ui/react";
import Alert from '@mui/material/Alert'
import { useRegisterUserMutation } from "../services/userAuthApi";
import axios from "axios";

const Register = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [club, setClub] = useState("");
  const [role, setRole] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleClubChange = (e) => {
    setClub(e.target.value);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(name, username, email, password, club, role);
    const actualData = {
      name: name,
      username: username,
      email: email,
      password: password,
      club: club,
      role: role
    }
    if (username === "" || email === "" || password === "" || role === "" || club === "" || name === "") {
      setServerError({ 'non_field_errors': ['Fields may not be blank'] })
      console.log(12)
      console.log(server_error.non_field_errors);
    }
    else {
      // const res = await registerUser(actualData)
      const res = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_BACKEND_URI}/api/v1/user/register`,
        data: actualData,
      })
      localStorage.setItem('token', res.data.token)
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
  if(windowSize.width>550){
  return (
    <Box width={'hvw'} bgColor={"#6D31ED"} p={20} py={30}>
    <Center display={"flex"} flexDirection={"row"} left={'37%'}>
      <Box height={'full'} width={'full'} marginTop={10} bgColor='#ACCDF3' border="GrayText" borderRadius={10} p={36} display={"flex"} flexDirection={"column"} m={10}>
        <form id="register">
          <Center><h3><b>Sign Up</b></h3></Center>
          <div className="mb-3">
            <VStack spacing={10} align="flex-start">
              <label><Text mb={1} as="b">Name</Text></label>
              <input
                type="name"
                className="form-control"
                placeholder="Enter Name"
                onChange={handleNameChange}
              />
            </VStack>
          </div>
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
              <label><Text mb={1} as="b">Club/Society name</Text></label>
              <SelectField w={400} h={40} borderRadius={10} onChange={handleClubChange}>
                <option value="gdsc">GDSC</option>
                <option value="sntc">SNTC</option>
                <option value="saic">SAIC</option>
                <option value="stac">STAC</option>
                <option value="mtbc">MTB Club</option>
                <option value="robotic">Robotics Club</option>
                <option value="kamandpromptc">Programming Club</option>
                <option value="yantrikc">Yantrik Club</option>
                <option value="saec">SAE Club</option>
                <option value="culturals">Cultural Society</option>
                <option value="literarys">Literary Society</option>
                <option value="sports">Sports Society</option>
                <option value="researchs">Research Society</option>

              </SelectField>
            </VStack>
          </div>
          <div className="mb-3">
            <VStack spacing={10} align="flex-start">
              <label><Text mb={1} as="b">Role</Text></label>
              <SelectField w={400} h={40} borderRadius={10} onChange={handleRoleChange}>
                <option value="secretary">Secretary</option>
                <option value="clubfa">Club FA</option>
                <option value="societyfa">Society FA</option>
                <option value="chairsap">Chair SAP</option>
                <option value="studentoffice">Students Office</option>
                <option value="deanstudent">Dean Students</option>
              </SelectField>
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
    </Box>
  )
  }
  else{return(<>    <Box width={'hvw'} bgColor={"#6D31ED"} p={20} py={100}>
  <Center display={"flex"} flexDirection={"row"} left={'37%'}>
    <Box height={'full'} width={'full'} marginTop={10} bgColor='#ACCDF3' border="GrayText" borderRadius={10} p={36} display={"flex"} flexDirection={"column"} m={10}>
      <form id="register">
        <Center><h3><b>Sign Up</b></h3></Center>
        <div className="mb-3">
          <VStack spacing={10} align="flex-start">
            <label><Text mb={1} as="b">Name</Text></label>
            <input
              type="name"
              className="form-control"
              placeholder="Enter Name"
              onChange={handleNameChange}
            />
          </VStack>
        </div>
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
            <label><Text mb={1} as="b">Club/Society name</Text></label>
            <SelectField w={'full'} h={40} borderRadius={10} onChange={handleClubChange}>
              <option value="gdsc">GDSC</option>
              <option value="sntc">SNTC</option>
              <option value="saic">SAIC</option>
              <option value="stac">STAC</option>
              <option value="mtbc">MTB Club</option>
              <option value="robotic">Robotics Club</option>
              <option value="kamandpromptc">Programming Club</option>
              <option value="yantrikc">Yantrik Club</option>
              <option value="saec">SAE Club</option>
              <option value="culturals">Cultural Society</option>
              <option value="literarys">Literary Society</option>
              <option value="sports">Sports Society</option>
              <option value="researchs">Research Society</option>

            </SelectField>
          </VStack>
        </div>
        <div className="mb-3">
          <VStack spacing={10} align="flex-start">
            <label><Text mb={1} as="b">Role</Text></label>
            <SelectField w={'full'} h={40} borderRadius={10} onChange={handleRoleChange}>
              <option value="secretary">Secretary</option>
              <option value="clubfa">Club FA</option>
              <option value="societyfa">Society FA</option>
              <option value="chairsap">Chair SAP</option>
              <option value="studentoffice">Students Office</option>
              <option value="deanstudent">Dean Students</option>
            </SelectField>
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
  </Box>
</>)}
}

export default Register
