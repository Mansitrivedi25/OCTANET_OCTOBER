import React from 'react'
import '../../Styles/Ser.css'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material'
const Service = () => {
  return (
    <>
    <div className="ser">
      
        <Box sx={{my:10,ml:10, '& p':{
          fontSize:'20px',
          fontWeight:'lighter'
        },
        '& h4':{
          fontSize:'bold',
          mb:2,
        }
        }}>
<Typography variant='h4'>Contact Here 24/7</Typography>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, a voluptate! Necessitatibus temporibus nostrum adipisci quam natus placeat vero qui.</p>
        </Box>
        <Box sx={{m:2,width:'600px', ml:10}}>
          <TableContainer component={Paper}>
            <Table area-aria-label='contact-table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{backgroundColor:'black', color:'white'}} align='center'>
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  
                    <TableCell>
                    <SupportAgentIcon sx={{color:'red',pt:1}} />1800-00-0000(toolfree)
                    </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <EmailIcon sx={{color:'blue',pt:1}} /> singhelpdesk@gmail.com
                    </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{color:'green',pt:1}} />1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        </div>
    </>
  )
}

export default Service