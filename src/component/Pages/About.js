import { Box, Typography} from '@mui/material'
import React from 'react'
import '../../Styles/AboutStyle.css'
//import  picture from '../../Images/fas2.jpg'


const About = () => {
  return (
    <>
  <div className="about" >
   
        <Box sx={{my:15, textAlign:'center',p:'2',
      '& h4':{
        fontWeight:'bold',
        color:'',
        my:'10',
        fontSize:'2rem'
      },
      '& p':{
        marginTop:'20px',
        color:'black',
        fontWeight:'lighter',
        fontSize:'20px',
        textAlign:'justify',
        margin:'20px'
      }
      }}>
          <Typography variant='h4'>
            Welcome to F@shion-Inst@
          </Typography>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempora non doloribus iure sequi aliquid, aperiam veniam quae alias, officia est repellat mollitia quisquam quibusdam dignissimos. Fugit quod placeat ullam ducimus itaque dolores nam reprehenderit repellendus accusantium, corporis iste cupiditate, voluptates, sunt hic totam inventore voluptatibus porro labore? Vitae, eum!</p>
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, a veritatis eligendi fugit totam earum maxime labore animi eaque quae modi illo non nobis quis praesentium voluptatem doloremque quod, sunt beatae quo iusto deleniti corporis dicta. Non unde voluptas doloribus. Quo harum praesentium autem mollitia laborum quidem voluptatem accusantium exercitationem.</p>

        </Box>
        </div>
    </>
  )
}

export default About