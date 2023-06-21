import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
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


import ListItemButton from '@mui/material/ListItemButton';
import { Grid, colors } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



<meta name="viewport" content="initial-scale=1, width=device-width" />


export default function ViewUser() {

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

    const [user,setUser] = useState({

        name:"",
        username:"",
        email:""
    })

    const {id} = useParams();

    useEffect(()=>{
        loadUsers()

    },[])

    const loadUsers = async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return (

    
    <div className='container mw-100 '>



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
            <Typography sx={{mt:'30px',ml:'-100px'}}>
            UI/UX Designer responsibilities include gathering user requirements, designing graphic elements and building navigation components. To be successful in this role, you should have experience with design software and wireframe tools. 
            If you also have a portfolio of professional design projects that includes work with web/mobile applications, we’d like to meet you.
            UI/UX Designer responsibilities include gathering user requirements, designing graphic elements and building navigation components. To be successful in this role, you should have experience with design software and wireframe tools. 
            If you also have a portfolio of professional design projects that includes work with web/mobile applications, we’d like to meet you.
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
        
    <div className='  border  rounded    shadow' style={{maxHeight:'550px',minHeight:'120px',height:'600px'}} >
    
    <List >
    <ListItem alignItems="flex-start">
        
        
        <React.Fragment>
        <Typography sx={{ display: 'inline' }} maxWidth={'100%'} variant='container'>
        <div className='card-header'>
                        Details of user id:  {user.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name:</b>
                                {user.name}
                            </li>
                            <li className='list-group-item'>
                                <b>Username:</b>
                                {user.username}
                            </li>
                            <li className='list-group-item'>
                                <b>Email:</b>
                                {user.email}
                            </li>
                        </ul>
                    </div>
        </Typography>
        </React.Fragment>
             
    
    </ListItem>

    
    </List>
</div>
    </Box>
  </Grid>


 
</Grid>

        

        
           
        
        
        
    
      
        

       
    






        {/* <div className='Row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'  >
                <h2 className='text-center m-4'>User Details</h2>
                <div className='card'>
                    <div className='card-header'>
                        Details of user id:  {user.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name:</b>
                                {user.name}
                            </li>
                            <li className='list-group-item'>
                                <b>Username:</b>
                                {user.username}
                            </li>
                            <li className='list-group-item'>
                                <b>Email:</b>
                                {user.email}
                            </li>
                        </ul>
                    </div>
                </div>

                <Link className='btn btn-primary my-2' to={"/"}>
                    Back to Home
                </Link>
            
            </div>
        </div> */}
        
    </div>
  )
}


