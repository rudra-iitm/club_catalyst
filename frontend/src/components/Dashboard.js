import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { Box, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getToken, removeToken } from '../services/localStorageServices'
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authslice';
import { useDispatch } from 'react-redux';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import axios from 'axios';

const Dashboard = () => {

  const { access_token } = getToken();
  const [data, setData] = useState({});

  useEffect(() => {
    axios({
      method: 'get',
      headers: {
        'token': access_token
      },
      url: 'http://localhost:3001/api/v1/user/details',
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('An error occurred:', error.message);
        // Handle error gracefully
      });
  }, [access_token]);

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

  // Store User Data in Local State
  // useEffect(() => {
  //   if (data && isSuccess) {
  //     setUserData({
  //       email: data.email,
  //       name: data.name,
  //     })
  //   }
  // }, [data, isSuccess])

  return (
    <>
      <CssBaseline />
      <center>
        <Grid container>
          <Grid item sm={12} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
            <h1>Dashboard</h1>
            {/* <Typography variant='h5'>Email: {userData.email}</Typography>
        <Typography variant='h6'>Name: {userData.name}</Typography> */}
            <Button variant='contained' color='warning' size='large' onClick={handlelogout} sx={{ mt: 8 }}>Logout</Button>
          </Grid>

        </Grid>
      </center>
    </>
  )
}

export default Dashboard