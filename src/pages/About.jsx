import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15 ,textAlign:'center',"& h4":{fontWeight:'bold',my:2,fontSize:'2rem'},"& p":{textAlign:'justify'},p:2 ,"@media (max-width:600px)":{mt:0,"& h4":{fontSize:'1.5rem'}}}}>
        <Typography variant='h4'>
          Welcome To My Restaurant
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero adipisci quas quisquam nam perferendis enim doloremque, voluptatem quod, esse ut asperiores maxime, saepe sint excepturi. Saepe debitis ut quibusdam similique cum ex vitae beatae eveniet, quaerat sit tenetur aperiam laborum minima, iusto ipsum nulla atque repellendus nobis cupiditate eligendi itaque incidunt repellat impedit. Iste, blanditiis excepturi iusto eveniet quidem doloremque quos, aliquam quibusdam illo quis cum, veritatis voluptatem omnis in temporibus. Quam iusto nesciunt, quis nam pariatur provident iure modi molestias hic magnam tenetur perferendis necessitatibus voluptatem eligendi nihil dolore expedita consectetur a officia voluptate quod totam ea! Nihil, illum.</p>
      </Box>
      <br />
      <p style={{paddingBottom:'52px'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit et ipsum minima, dolorum ut in, magni doloribus provident cum vel sunt fugiat maxime, quasi laborum aliquid dolor reprehenderit aperiam commodi. Eligendi id quia eaque, doloremque aliquid est quod omnis iste alias minima velit accusamus ratione. Molestiae eos ipsam asperiores esse est quas itaque fugit, inventore dolore fuga quae excepturi mollitia soluta animi tempore temporibus possimus vitae odio eligendi eaque! Nostrum itaque repellat commodi ad ratione cumque vel at deleniti quae saepe, accusamus sequi, velit sit voluptatum excepturi vero laborum eius blanditiis esse atque numquam? Ab fugiat obcaecati repudiandae corporis tempore.</p>
    </Layout>
  )
}

export default About
