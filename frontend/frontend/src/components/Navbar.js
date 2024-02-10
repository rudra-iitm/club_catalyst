import React, { useState } from 'react'

// import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/localStorageServices';

const Navbar = () => {
  const { access_token } = getToken();
  console.log(access_token)
  // console.log(access_token)
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Task Manager</Typography>

            <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#8DB7E6' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

            <Button component={NavLink} to='/todo' style={({ isActive }) => { return { backgroundColor: isActive ? '#8DB7E6' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Todo</Button>
            {
              access_token
              ?  
              <Button component={NavLink} to='/dashboard' type="submit"  style={({ isActive }) => { return { backgroundColor: isActive ? '#8DB7E6' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Account</Button>
              :
              <Button component={NavLink} to='/sign-in' type="submit" style={({ isActive }) => { return { backgroundColor: isActive ? '#8DB7E6' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Account</Button>
            }

          </Toolbar>
        </AppBar>
    </Box>
    </>
  )
}

export default Navbar