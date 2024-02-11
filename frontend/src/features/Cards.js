import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { Center, Image } from '@chakra-ui/react';
export default function Cards({HeadText,Descrip,Imgsrc}) {
  return (
    <Card sx={{ maxWidth: 460, p:1 , m: 5}}>
      <Center>
        <Box><Image src={Imgsrc} h={100} w={100}/></Box>
      </Center>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {HeadText}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Descrip}
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={NavLink} to='/request'>Raise Request</Button>
      </CardActions>
    </Card>
  );
}