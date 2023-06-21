import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { borders } from '@mui/system';
import { shadows } from '@mui/system';
import TextField from '@mui/material/TextField';



import ListItemButton from '@mui/material/ListItemButton';
import { Container, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, Toolbar, colors } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { grey } from '@mui/material/colors';



<meta name="viewport" content="initial-scale=1, width=device-width" />

export default function() {
  return (
    <>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 1 }}>
            <Grid container spacing={3}>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={4}> 
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 540,
                    maxHeight:'1500px',
                    
                  }}
                
                >
                  <React.Fragment>
        <Typography sx={{ display: 'inline' }} maxWidth={'100%'} variant='container'>
        <Typography textAlign={'left'} ml={5}>Name</Typography>
        <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{m:1}} defaultValue={'Kapilan'}/>
        <TextField id="outlined-basic" label="Middle Name" variant="outlined" sx={{m:1}}/>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{m:1}} defaultValue={'Srikaran'}/>

        <Typography textAlign={'left'} ml={5}>Address</Typography>
        <TextField id="outlined-basic" label="No 39, Waddukoddai" variant="outlined" sx={{m:1}} defaultValue={'Kapilan'}/>
        <TextField id="outlined-basic" label="Aralli" variant="outlined" sx={{m:1}}/>
        <TextField id="outlined-basic" label="Jaffan" variant="outlined" sx={{m:1}} defaultValue={'Srikaran'}/>
        <br />
  
        
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
   
                lllllllllllllllllllllllllll lllllllllllllLists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.
                llllllllllllllllllllllll llllllllllllllllLists are a continuous group of text or images. They a re composed of items containing primary and supplemental actions, which are represented by icons and text
                llllllllllllllllllllllll llllllllllllllllLists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text end
                </Typography>
        </React.Fragment>
                  
                </Paper>
              </Grid>



              {/* Chart */}
              <Grid item xs={12} md={8} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  Ker
                </Paper>
              </Grid>

              
              </Grid>
              </Container>
  



   {/* <Grid container direction="row" justifyContent='start' sx={{ minHeight: '100vh' }} spacing={2}>
    <Grid item xs={12} alignItems="center" justifyContent="center">
      <Typography>Letter Generator</Typography>
    </Grid>

    <Grid item xs={6} alignItems="center" justifyContent="center">
      <Box sx={{ boxShadow: 3 ,width:300}}>
        <Box sx={{backgroundColor:'primary' , width:300}} >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Divider></Divider>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>

      </Box>
    </Grid>


    <Grid item xs={6} alignItems="center" justifyContent="center">
      <Box sx={{ boxShadow: 3 ,width:300}}>
        <Box sx={{backgroundColor:'primary' , width:300}} >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Divider></Divider>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>

      </Box>
    </Grid>



   </Grid> */}
   </>
  
  )
}
