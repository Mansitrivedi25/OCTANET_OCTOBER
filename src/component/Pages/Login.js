
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import '../../Styles/LoginStyle.css'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const Login = () => {
 const paperStyle={
  width:'350px',
  height:'80vh',
  margin:'10px auto',
  padding:'20px',
 
 }
 
  return (
    <>

  <div className="log" >
    <Box>
     <Grid p={5}>
          <Paper elevation={10} style={paperStyle}  >
            <Grid align='center'>
              <Avatar sx={{backgroundColor:'green'}}><AccountBalanceIcon/></Avatar>
              <h1>Login Here</h1>
              </Grid>
            
            <TextField
           
             sx={{marginTop:"10px",}}
            label='Username ' required
            type='text'
            placeholder='Enter your name'
            variant='standard'
            fullWidth
             />
             <TextField 
             sx={{marginTop:"10px"}}
            label='Email' required
            type='email'
            placeholder='Enter your email'
            variant='standard'
            fullWidth
             />
             <TextField 
             sx={{marginTop:"10px" }}
            label='Password ' required
            type='password'
            placeholder='Enter your password'
            variant='standard'
            fullWidth
             />
            <FormControlLabel 
            sx={{marginTop:"10px"}}
            control={
              <Checkbox
              name='checkbox'
              color='primary'/>
            }
            label='Remember me'
            />
            <Button sx={{marginTop:"10px"}} variant='contained' fullWidth>Submit</Button>
            <Typography sx={{marginTop:"10px"}}>
              <Link href='#'>Forget Password ?</Link>
            </Typography>
            <Typography sx={{marginTop:"10px"}}>Do you have an account?
              <Link href='#'>SignUp</Link>
            </Typography>
            <Box marginTop={'48px'} textAlign='center' >
              <Box sx={{ '& svg':{
                fontSize:'25px',mr:2 },
                '& svg:hover':{
                  bgcolor:'goldenrod',
                  fontSize:'34px'
                }
                }}>
            <InstagramIcon/>
            <TwitterIcon/>
            <GoogleIcon/>
            <FacebookIcon/>
            <GitHubIcon/>
            </Box>
            </Box>
          </Paper>
        </Grid>
        </Box>
        </div>  
        
        
    </>
  )
}

export default Login