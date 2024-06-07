import {React , useState} from 'react'
import { AppBar, Box, Toolbar, Typography,IconButton, Drawer, Divider } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood'
import { NavLink } from 'react-router-dom';
import '../../../src/styles/HeaderStyle.css'
import MenuIcon from '@mui/icons-material/Menu';
// import Logo from '../../images/logo.svg'

const Navbar = () => {
  const [mobileOpen , setMobileOpen] =useState(false);
  const handledrawerToggle = () =>{
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <Box onClick = {handledrawerToggle} sx={{textAlign:'center'}}>
         <Typography color='goldenrod' variant='h6' component='div' sx={{flexGrow:1,my:2}}>
        <FastfoodIcon />
          My Restaurant
        </Typography>
        <Divider/>
          <ul className='mobile-navigation'>
            <li>
              <NavLink to='/' activeClassName='active'>Home</NavLink>
            </li>

            <li>
              <NavLink to='/menu' >Menu</NavLink>
            </li>

            <li>
              <NavLink to='/about' >About</NavLink>
            </li>

            <li>
              <NavLink to='/contact' >Contact</NavLink>
            </li>

          </ul>

    </Box>
  )
  return (
    <>
    <Box>
      <AppBar component='nav' sx={{bgcolor:'black'}}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2, display:{sm:'none'} }} onClick={handledrawerToggle}>
            <MenuIcon />
          </IconButton>
        <Typography color='goldenrod' variant='h6' component='div' sx={{flexGrow:1}}>
        <FastfoodIcon />
          My Restaurant
        </Typography>
        <Box sx={{ display: {xs:'none' , sm:'block' }}}>
          <ul className='navigation-menu'>
            <li>
              <NavLink activeClassName='active' to='/' >Home</NavLink>
            </li>

            <li>
              <NavLink to='/menu' >Menu</NavLink>
            </li>

            <li>
              <NavLink to='/about' >About</NavLink>
            </li>

            <li>
              <NavLink to='/contact' >Contact</NavLink>
            </li>

          </ul>
        </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer variant='temporary' open={mobileOpen} onClose={handledrawerToggle} sx={{display:{sm:'none',xs:'block'}, "& .MuiDrawer-paper":{boxSizing:'border-box',width:'240px'}}}>
          {drawer}
        </Drawer>
      </Box>
      <Box>
      <Toolbar />
      </Box>
    </Box>
    </>
  )
}

export default Navbar
