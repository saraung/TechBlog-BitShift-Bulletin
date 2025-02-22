// components/Footer.jsx
import React from 'react';
import { Box, Container, Grid, Typography, Link, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        padding: '40px 0',
        marginTop: 'auto', // Ensures footer sticks to the bottom
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                Home
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                About Us
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                Blog
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Contact Us
            </Typography>
            <Box>
              <Typography sx={{ mb: 1 }}>Email: info@techblog.com</Typography>
              <Typography sx={{ mb: 1 }}>Phone: +1 (123) 456-7890</Typography>
              <Typography sx={{ mb: 1 }}>
                Address: 123 Tech Street, Silicon Valley, CA
              </Typography>
            </Box>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" color="inherit">
                <Facebook fontSize="large" />
              </Link>
              <Link href="#" color="inherit">
                <Twitter fontSize="large" />
              </Link>
              <Link href="#" color="inherit">
                <Instagram fontSize="large" />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn fontSize="large" />
              </Link>
            </Box>
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Newsletter
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Subscribe to our newsletter for the latest updates.
            </Typography>
            <Box
              component="form"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  flex: 1,
                }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ borderRadius: '4px' }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box
          sx={{
            borderTop: '1px solid #444',
            paddingTop: '20px',
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Tech Blog. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;