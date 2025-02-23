// pages/SignUp.jsx
import React from 'react';
import { Box, Typography, TextField, Button, Link, Container, Paper } from '@mui/material';

const SignUp = () => {
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
          Create an account to get started.
        </Typography>

        {/* Sign Up Form */}
        <Box component="form" sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Name"
            type="text"
            variant="outlined"
            sx={{ mb: 3 }}
            required
          />
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
            Sign Up
          </Button>
        </Box>

        {/* Log In Link */}
        <Typography variant="body2" sx={{ color: '#666666' }}>
          Already have an account?{' '}
          <Link href="/login" underline="hover" sx={{ color: '#1a1a1a', fontWeight: 'bold' }}>
            Log In
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUp;