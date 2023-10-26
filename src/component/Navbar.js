import { AppBar,  Box, Toolbar, Typography } from '@mui/material'
import AllOutOutlinedIcon from '@mui/icons-material/AllOutOutlined';
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/NavStles.css'
const Navbar = () => {
  return (
    <>
    <Box>
        
        <AppBar
          component={"Nav"}
          sx={{ backgroundColor: "pink", color: "black", fontWeight:"bold",}}
        >
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: "1" }}>
              <AllOutOutlinedIcon/>
             Fast-Pro
            </Typography>
            <Box>
              <ul className="nav">
                <li>
                  <NavLink activeclassname='active' to={'/'} >Home</NavLink>
                </li>
                <li>
                  <NavLink  to={'/about'} >About</NavLink>
                </li>
                <li>
                  <NavLink to={'/products'} >Products</NavLink>
                </li>
                <li>
                    <NavLink to={'/service'} >Service</NavLink>
                </li>
                <li>
                  <NavLink  to={'/login'} >Login</NavLink>
                </li>
                <li>
                  <NavLink  to={'/signup'} >Signup</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
       
         </Box>
        <Box>
        <Toolbar/>
        </Box>
         
        
         
      
     

    </>
  )
}

export default Navbar