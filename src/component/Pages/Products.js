import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import {ProductList} from '../../data/data'

const Products = () => {
  return (
    <>
   
    <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}} >
       {
        ProductList.map(product=>(
            <Card sx={{maxWidth:'300px', m:2}}>
                <CardActionArea>
                    <CardMedia sx={{minHeight:'400px'}} component={'img'} src={product.image} alt={product.name}/>
                </CardActionArea>
                <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'} >
                        {product.name}
                    </Typography>
                    <Typography variant='body2' >
                        {product.description}
                    </Typography>
                    <Typography varaiant='h1' fontSize={'30px'}>
                        {product.price}
                    </Typography>
                </CardContent>
            </Card>
        ))
       }
    </Box>
    
    </>
  )
}

export default Products