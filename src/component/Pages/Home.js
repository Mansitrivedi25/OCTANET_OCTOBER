

import { Box, Typography } from "@mui/material";
import React from "react";
import {Link} from 'react-router-dom';
import '../../Styles/HomeStyle.css'
import Picture from '../../Images/fas1.jpg'

const Home = () => {

  
  return (
    <>
    {/* <Box component={'container'} align='center' color={'green'} p={2}>
<Typography variant='h2'sx={{border:'2px solid blue',}}>
Welcome to Clothes Brand
</Typography>
<Typography component={'p'}>
<p>Lorem ipsum dolor sit amet consectetur adipis
  icing elit. Quasi delectus similique asperiores 
  aperiam, placeat deleniti veritatis dignissimos ad!</p>
</Typography>
    </Box> */}
   {/* <Box p={5} bgcolor={'pink'} sx={{height:'100vh'}}>
    <Box component={'container'} align='center' color={'green'} p={2}>
<Typography variant='h2'sx={{border:'2px solid blue',}}>
Welcome to Clothes Brand
</Typography>
<Typography component={'p'}>
<p>Lorem ipsum dolor sit amet consectetur adipis
  icing elit. Quasi delectus similique asperiores 
  aperiam, placeat deleniti veritatis dignissimos ad!</p>
</Typography>
    </Box>
    </Box> */}
    <div className="home" style={{backgroundImage:`url(${Picture})`}}>
      <div className="header">
        <h1>Be yourself in a Luxury Style</h1>
        <p>Make your own style</p>
        <Link to='/Products'>
        <button>Shop Now</button>
        </Link>
        </div>     
    </div>
    </>
  );
};

export default Home;
