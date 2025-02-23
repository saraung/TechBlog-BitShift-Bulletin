// components/NavBar.jsx
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './SideDrawer'; // Import the SideDrawer component
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control the drawer

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)} // Open the drawer on click
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px' }}
          >
            BitShift Bulletin
          </Typography>
          <Link to="/login">
  <Button 
    color="inherit" 
    sx={{ textTransform: 'none', fontSize: '1rem', color: 'white' }}
  >
    Login
  </Button>
</Link>

        </Toolbar>
      </AppBar>

      {/* Use the SideDrawer component */}
      <SideDrawer isOpen={isDrawerOpen} onClose={toggleDrawer(false)} />
    </Box>
  );
};

export default NavBar;