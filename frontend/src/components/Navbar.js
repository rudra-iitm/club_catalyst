import React, { useEffect, useState } from 'react'

// import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/localStorageServices';
import {Image } from '@chakra-ui/react';
// import logo1 from '../images/img1.jpg'
import logo2 from '../images/img2.jpg'
// import logo3 from '../images/img3.jpg'
import logo4 from '../images/img4.jpg'
const Navbar = () => {
  const { access_token } = getToken();

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

 if(windowSize.width > 1250) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
          <Image src={logo2} h={40} w={45}/>
            <Typography variant='h5' component="div" sx={{ flexGrow: 1 ,p:2,fontWeight:"bold"}}>Gymkhana IIT Mandi</Typography>
            <a href='https://www.iitmandi.ac.in/'><Image src={logo4} h={59} w={65} ml={240} mr={360}/></a>
            <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6D31ED' : '#D9C8FF' ,color: isActive?  'white' : 'black' } }} sx={{textTransform: 'none', margin:1 }}>Home</Button>

            <Button component={NavLink} to='/clubs' style={({ isActive }) => { return { backgroundColor: isActive ? '#6D31ED' : '#D9C8FF' ,color: isActive?  'white' : 'black' } }} sx={{ color: 'black', textTransform: 'none' }}>Club</Button>
            {
              access_token
              ?  
              <Button component={NavLink} to='/dashboard' type="submit"  style={({ isActive }) => { return { backgroundColor: isActive ? '#6D31ED' : '#D9C8FF' ,color: isActive?  'white' : 'black'  } }} sx={{ color: 'black', textTransform: 'none',margin:1 }}>Account</Button>
              :
              <Button component={NavLink} to='/sign-in' type="submit" style={({ isActive }) => { return { backgroundColor: isActive ? '#6D31ED' : '#D9C8FF' ,color: isActive?  'white' : 'black'  } }} sx={{ color: 'black', textTransform: 'none',margin:1 }}>Account</Button>
            }

          </Toolbar>
        </AppBar>
    </Box>
    </>
  )}
  else
  {
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="inherit">
            <Toolbar>
            <Image src={logo2} h={40} w={45}/>
              <Typography variant='h5' component="div" sx={{ flexGrow: 1 ,p:2,fontWeight:"bold"}}>Gymkhana IIT Mandi</Typography>
              <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6D31ED' : '#D9C8FF' ,color: isActive?  'white' : 'black' } }} sx={{textTransform: 'none', margin:1 }}>Home</Button>
  
              <Button component={NavLink} to='/clubs' style={({ isActive }) => { return { backgroundColor: isActive ? '#6D31ED' : '#D9C8FF' ,color: isActive?  'white' : 'black' } }} sx={{ color: 'black', textTransform: 'none' }}>Club</Button>
              {
                access_token
                ?  
                <Button component={NavLink} to='/dashboard' type="submit"  style={({ isActive }) => { return { backgroundColor: isActive ? '#6D31ED' : '#D9C8FF' ,color: isActive?  'white' : 'black'  } }} sx={{ color: 'black', textTransform: 'none',margin:1 }}>Account</Button>
                :
                <Button component={NavLink} to='/sign-in' type="submit" style={({ isActive }) => { return { backgroundColor: isActive ? '#6D31ED' : '#D9C8FF' ,color: isActive?  'white' : 'black'  } }} sx={{ color: 'black', textTransform: 'none',margin:1 }}>Account</Button>
              }
  
            </Toolbar>
          </AppBar>
      </Box>
      </>
    )
  }
}

export default Navbar