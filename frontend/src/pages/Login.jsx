// pages/Login.jsx
import React from 'react';
import { Box, Typography, TextField, Button, Link, Container, Paper } from '@mui/material';

const Login = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: '32px',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
          backgroundColor: '#ffffff',
        }}
      >
        {/* Header */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#1a1a1a' }}>
          BitShift Bulletin
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: '#666666' }}>
          Welcome back! Please sign in to continue.
        </Typography>

        {/* Login Form */}
        <Box component="form" sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            sx={{ mb: 3 }}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            sx={{ mb: 3 }}
            required
          />
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mb: 2,
              backgroundColor: '#1a1a1a',
              '&:hover': { backgroundColor: '#333333' },
            }}
          >
            Sign In
          </Button>
        </Box>

        {/* Forgot Password Link */}
        <Link href="#" underline="hover" sx={{ display: 'block', mb: 2, color: '#666666' }}>
          Forgot Password?
        </Link>

        {/* Sign Up Link */}
        <Typography variant="body2" sx={{ color: '#666666' }}>
          Don't have an account?{' '}
          <Link href="/signup" underline="hover" sx={{ color: '#1a1a1a', fontWeight: 'bold' }}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;