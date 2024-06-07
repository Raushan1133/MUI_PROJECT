import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'white'}}>
        <Box sx={{py:3, "& svg":{fontSize:"60px",cursor:"pointer",mr:2} , "& svg:hover":{color:'goldenrod',transform:'translateX(5px)',transition:'all 400ms ease-in-out'}} }>
            <InstagramIcon />
            <XIcon />
            <GitHubIcon />
            <YouTubeIcon />
        </Box>
        <Typography variant='h5' sx={{"@media (max-width:600)":{fontSize:'1rem'}}}>
            All Rights Reserved &copy; Raushan
        </Typography>
    </Box>
  )
}

export default Footer
