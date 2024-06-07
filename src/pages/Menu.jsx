import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../data/data'
import ShoppingBag from '@mui/icons-material/ShoppingBag'
import Call from '@mui/icons-material/Call'


const Menu = () => {
  return (
    <Layout>
        <Box sx={{display:'flex' , flexWrap:'wrap',justifyContent:'center'}}>
          {
            MenuList.map((menu)=>(
              <Card  sx={{maxWidth:'390px',m:2}}>
                <CardActionArea>
                  <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name} />
                  <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'}>
                      {menu.name}
                    </Typography>
                    <Typography variant='body2'>
                      {menu.description}
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                      
                    <Button  color='success' variant='contained' sx={{mt:2}}>Order Now <Call sx={{ml:1}}/></Button>
                    <Button  color='warning' variant='contained' sx={{mt:2}}>Add To Cart <ShoppingBag sx={{ml:1}}/></Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
        </Box>
    </Layout>
  )
}

export default Menu
