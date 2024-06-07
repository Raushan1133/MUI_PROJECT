import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import MailIcon from '@mui/icons-material/Mail'
import CallIcon from '@mui/icons-material/Call'
const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:10,ml:10}}>
          <Typography variant='h4' fontWeight={'bold'} mb={2}>
            Contact My Restaurant
          </Typography>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat? Quae quia ut tempora. Consequatur alias cumque, harum magnam numquam modi porro laboriosam sunt maxime fuga dolores dolore inventore aliquid.</p>
        </Box>
        <Box m={3} width={'600px'} ml={5} sx={{"@media (max-width:00px)":{
          width:"300px",
        }}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white',}} align='center' >Contact Details</TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'red',pt:1}}/> 6299755934
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <MailIcon sx={{color:'skyblue',pt:1}}/> raushan@example.com
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <CallIcon sx={{color:'green',pt:1}}/> 6299755934
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact
