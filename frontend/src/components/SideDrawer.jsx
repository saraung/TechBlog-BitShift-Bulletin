// components/SideDrawer.jsx
import React from 'react';
import { Drawer as MuiDrawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, Info, Article, ContactMail, Settings } from '@mui/icons-material';

const SideDrawer = ({ isOpen, onClose }) => {
  const menuItems = [
    { text: 'Home', icon: <Home />, link: '/' },
    { text: 'About', icon: <Info />, link: '/about' },
    { text: 'Blog', icon: <Article />, link: '/blog' },
    { text: 'Contact', icon: <ContactMail />, link: '/contact' },
  ];

  const settingsItems = [
    { text: 'Settings', icon: <Settings />, link: '/settings' },
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
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component="a" href={item.link}>
            <ListItemIcon sx={{ color: '#ffffff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: '#444' }} />
      <List>
        {settingsItems.map((item) => (
          <ListItem button key={item.text} component="a" href={item.link}>
            <ListItemIcon sx={{ color: '#ffffff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};

export default SideDrawer;