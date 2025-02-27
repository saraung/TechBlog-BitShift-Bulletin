// components/SideDrawer.jsx
import React from 'react';
import { Drawer as MuiDrawer, List, ListItem, ListItemIcon, ListItemText, Divider, Avatar, Box, Typography } from '@mui/material';
import { Home, AccountCircle, Logout,Article } from '@mui/icons-material';

const SideDrawer = ({ isOpen, onClose }) => {
  const menuItems = [
    { text: 'Home', icon: <Home />, link: '/' },
    { text: 'Blogs', icon: <Article />, link: '/blogs' },
    { text: 'Account', icon: <AccountCircle />, link: '/account' },
    { text: 'Logout', icon: <Logout />, link: '/logout' },
  ];

  return (
    <MuiDrawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 250,
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        },
      }}
    >
      <Box>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} component="a" href={item.link}>
              <ListItemIcon sx={{ color: '#ffffff' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: '#ffffff' }} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ textAlign: 'center', padding: 2 }}>
        <Avatar sx={{ width: 56, height: 56, margin: 'auto' }} src="/path/to/dummy-avatar.jpg" />
        <Typography variant="body1" sx={{ color: '#ffffff', marginTop: 1 }}>John Doe</Typography>
      </Box>
    </MuiDrawer>
  );
};

export default SideDrawer;
