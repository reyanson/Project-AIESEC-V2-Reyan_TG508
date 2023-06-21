import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link ,useNavigate, useParams} from "react-router-dom"
import Upside from './Upside';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { borders } from '@mui/system';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';



import ListItemButton from '@mui/material/ListItemButton';
import { Grid, colors } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';



<meta name="viewport" content="initial-scale=1, width=device-width" />


export default function EditUser() {

    const [profilePicture, setProfilePicture] = useState(null);

    const handlePictureChange = (event) => {
      const file = event.target.files[0];
      setProfilePicture(file);
    };
  
    const uploadPicture = async () => {
      if (profilePicture) {
        const formData = new FormData();
        formData.append('profilePicture', profilePicture);
        console.log(profilePicture.name)
  
        try {
          const response = await fetch('http://localhost:8080/upload', {
            method: 'POST',
            body: formData,
          });
  
          if (response.ok) {
            console.log('Profile picture uploaded successfully!');
            // Perform any additional actions after successful upload
          } else {
            console.error('Failed to upload profile picture.');
            // Handle upload failure
          }
        } catch (error) {
          console.error('Error occurred during profile picture upload:', error);
          // Handle upload error
        }
      }
    }

    //text are start
    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
      };
    
      const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
        700: '#424a53',
        800: '#32383f',
        900: '#24292f',
      };
    
      const StyledTextarea = styled(TextareaAutosize)(
        ({ theme }) => `
        width: 320px;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 24px ${
          theme.palette.mode === 'dark' ? blue[900] : blue[100]
        };
      
        &:hover {
          border-color: ${blue[400]};
        }
      
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        }
      
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      );


    //text area finish

     // for loop for experience

     const seasons = ["Spring", "Summer", "Autumn", "Winter"];
     const seasons2 = ["Spring1", "Summer2", "Autumn3", "Winter4"];
 
   let seasonsList = [];
 
   seasons.forEach((season,index,seasons2, index2) => {
     seasonsList.push(<li className='list-group-item' key={index}>{season}<p key={index2}>{seasons2}</p></li>);
   });
 
 
         const [selectedIndex, setSelectedIndex] = React.useState(1);
         const handleListItemClick = (
         event: React.MouseEvent<HTMLDivElement, MouseEvent>,
         index: number,) => {setSelectedIndex(index);};

    let navigate = useNavigate();

    const {id} = useParams()

    const [user,setUser] = useState({

        name:"",
        username:"",
        email:"",
        dp:""
    })

    const{name,username,email,dp}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }

    useEffect(()=>{
        loadUsers();
    },[]);

    const onSubmit =async(e)=>{
        e.preventDefault(); //did not show wired URL
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/")
    };

    const loadUsers = async ()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return (
    <div className='container mw-100'>

<Grid container spacing={2} >
  <Grid item xs={12} >
    <Box >
    <div className=' border  rounded mt-3    shadow' >
    
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' ,paddingLeft:'20px',paddingRight:'5px'}}>
    <ListItem alignItems="flex-start">
        
        <ListItemAvatar sx={{width:'100px',height:'100px'}}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{width:'100px',height:'100px' }}  />
        
        </ListItemAvatar>
        
        <ListItemText
            sx={{ml:'10px',mt:'20px'}}
        primary={
            <React.Fragment>
                <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h4"
                color="text.primary"
            >
            
                {user.name}
            </Typography>
            
            </React.Fragment>
        }
        
        secondary={
            <React.Fragment>
            <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h6"
                color="text"
            >
                BD R&D TeamLeader
            </Typography>

            <Box
                mt={-7}
                //margin
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                >
                <Button variant="contained" color="primary" sx={{ height: 40 }}>
                    Save Bio
                </Button>
            </Box>

            

            <Typography sx={{mt:'35px',ml:'-100px'}}  borderRadius={2}>
            <TextField id="outlined-basic" variant="outlined"  fullWidth multiline maxRows={4}
                defaultValue="UI/UX Designer responsibilities include gathering user requirements, designing graphic elements and building navigation components. To be successful in this role, you should have experience with design software and wireframe tools. 
                If you also have a portfolio of professional design projects that includes work with web/mobile applications, we’d like to meet you.
                UI/UX Designer responsibilities include gathering user requirements, designing graphic elements and building navigation components. To be successful in this role, you should have experience with design software and wireframe tools. 
                If you also have a portfolio of professional design projects that includes work with web/mobile applications, we’d like to meet you.
    "

            />
            </Typography> 
            
            {/* " — I' your neighborhood doing errands this…" */}
            </React.Fragment>

        }
        />
    </ListItem>

    
    </List>
</div>
    </Box>


  </Grid>


  <Grid item xs={1.3}>
    <Box >
    <div className=' border  rounded  shadow ' style={{maxWidth:'250px',minWidth:'120px'}} >
                            <Box sx={{ maxWidth:'250px',minWidth:'120px'}}>

                            <List component="nav" aria-label="secondary mailbox folder">
                                <ListItemButton 
                                    selected={selectedIndex === 1}
                                    onClick={(event) => handleListItemClick(event, 1)}
                            
                                >
                                    <ListItemText primary="Experience"  />

                                </ListItemButton>

                                <ListItemButton
                                    color='success'
                                    selected={selectedIndex === 2}
                                    onClick={(event) => handleListItemClick(event, 2)}
                                    >
                                    <ListItemText primary="Skill" />
                                </ListItemButton>

                                <ListItemButton
                                    selected={selectedIndex === 3}
                                    onClick={(event) => handleListItemClick(event, 3)}
                                    >
                                    <ListItemText primary="Education" />
                                </ListItemButton>

                                <ListItemButton
                                    selected={selectedIndex === 4}
                                    onClick={(event) => handleListItemClick(event, 4)}
                                    
                                    >
                                    <ListItemText primary="Contact" />
                                </ListItemButton>

                                <ListItemButton
                                    selected={selectedIndex === 5}
                                    onClick={(event) => handleListItemClick(event, 5)}
                                    >
                                    <ListItemText primary="Language" />
                                </ListItemButton>

                            </List>

                            </Box>
                
                        </div>
    </Box>
  </Grid>



  <Grid item xs={10.7}>
    <Box sx={{ml:'90px'}}>
    <div className='  border  rounded    shadow' style={{maxHeight:'550px',minHeight:'120px',height:'500px'}}  >
    
    <List >
    <ListItem alignItems="flex-start">
        
        
        <React.Fragment>
        <Typography sx={{ display: 'inline' }} maxWidth={'100%'} variant='container' >
        <form onSubmit={(e)=> onSubmit(e)}>
            {/* <div className="row g-3 align-items-center">
  <div className="col-1">
  <label htmlFor='Name' className='form-label'>
                    Name
                </label>
  </div><br />
  <div className="col-auto">
    Name<br/><br/><input type="password" id="inputPassword6" className="form-control" aria-labelledby="passwordHelpInline" />
    
  </div>
  <div className="col-auto">
    <span id="passwordHelpInline" className="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div> */}
            <div className='mb-3' >
                <label htmlFor='Name' className='form-label'>
                    Name
                </label>
                Name <input type={"text"} className='form-control' placeholder='Enter your Name' name='name' value={name} onChange={(e)=>onInputChange(e)} required/>
            </div>


            {/* user name */}
            <div className='mb-3'>
                <label htmlFor='Username' className='form-label'>
                    Username
                </label>
                <input type={"text"} className='form-control' placeholder='Enter your Username' name='username' value={username} onChange={(e)=>onInputChange(e)} required/>
            </div>

            {/* Email */}
            <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>
                    Email
                </label>
                <input type={"email"} className='form-control' placeholder='Enter your Email' name='email'  value={email} onChange={(e)=>onInputChange(e)} required />
                 
            </div>
            <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>
                    Profile
                </label>
                <input type="file" accept="image/*" onChange={handlePictureChange} value={dp}/>
                    <button onClick={uploadPicture}>Upload</button>
                {/* <input type='file' name='dp' value={dp} onChange={(e)=>onInputChange(e)} /> */}
                 
            </div>
            <button type='submit' className='btn btn-outline-primary' >Submit</button>
            <Link  className='btn btn-outline-danger mx-2' to='/' >Cancel</Link>
            </form>
                </Typography>
        </React.Fragment>
             
    
    </ListItem>

    
    </List>
</div>
    </Box>
  </Grid>
  {/* <Grid item xs={1.3}>
    <Box >
    <div className=' border  rounded  shadow ' style={{maxWidth:'250px',minWidth:'120px'}} >
                            <Box sx={{ maxWidth:'250px',minWidth:'120px'}}>

                            <List component="nav" aria-label="secondary mailbox folder">
                                <ListItemButton 
                                    selected={selectedIndex === 6}
                                    onClick={(event) => handleListItemClick(event, 6)}
                            
                                >
                                    <ListItemText primary="Contact"  />

                                </ListItemButton>

                                <ListItemButton
                                    color='success'
                                    selected={selectedIndex === 7}
                                    onClick={(event) => handleListItemClick(event, 7)}
                                    >
                                    <ListItemText primary="Password" />
                                </ListItemButton>

                                

                            </List>

                            </Box>
                
                        </div>
    </Box>
  </Grid> */}
  <Grid  item xs={4}>
  <div>
      <h1>Profile Page</h1>
      <div>
        <h2>Profile Picture</h2>
        {profilePicture ? (
          <img src={URL.createObjectURL(profilePicture)} alt="Profile" />
        ) : (
          <p>No profile picture selected {}</p>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handlePictureChange}
        />
        <button onClick={uploadPicture}>Upload</button>
      </div>
    </div>
  </Grid>


 
</Grid>






        {/* <div className='col-md-10 offset-md-2 border rounded p-4 mt-2 shadow'  >
            <form onSubmit={(e)=> onSubmit(e)}>
            {/* <div className="row g-3 align-items-center">
  <div className="col-1">
  <label htmlFor='Name' className='form-label'>
                    Name
                </label>
  </div><br />
  <div className="col-auto">
    Name<br/><br/><input type="password" id="inputPassword6" className="form-control" aria-labelledby="passwordHelpInline" />
    
  </div>
  <div className="col-auto">
    <span id="passwordHelpInline" className="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div> 
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                    Name
                </label>
                Name <input type={"text"} className='form-control' placeholder='Enter your Name' name='name' value={name} onChange={(e)=>onInputChange(e)} required/>
            </div>


            {/* user name *
            <div className='mb-3'>
                <label htmlFor='Username' className='form-label'>
                    Username
                </label>
                <input type={"text"} className='form-control' placeholder='Enter your Username' name='username' value={username} onChange={(e)=>onInputChange(e)} required/>
            </div>

            {/* Email *
            <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>
                    Email
                </label>
                <input type={"email"} className='form-control' placeholder='Enter your Email' name='email'  value={email} onChange={(e)=>onInputChange(e)} required />
                 
            </div>
            <button type='submit' className='btn btn-outline-primary' >Submit</button>
            <Link  className='btn btn-outline-danger mx-2' to='/' >Cancel</Link>
            </form>
        </div>*/}
        
    </div> 
  )
}
