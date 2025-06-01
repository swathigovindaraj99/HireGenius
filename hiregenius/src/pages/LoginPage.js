import React, { useState } from 'react';
import { Box, Card, TextField, Button, Typography, Snackbar, Alert, Link } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const from = location.state?.from || '/';  // Where user wanted to go before login

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setSnackbarMessage('Email and password are required!');
      setOpenSnackbar(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      // Save token in localStorage
      localStorage.setItem('token', response.data.token);

      console.log('Login successful', response.data);

      // Redirect to intended page after login, if any
      if (from && from !== '/') {
        navigate(from, { replace: true });
      } else {
        // Otherwise redirect based on role
        if (response.data.role === 'Student') {
          navigate('/student-dashboard', { replace: true });
        } else if (response.data.role === 'Admin') {
          navigate('/admin-dashboard', { replace: true });
        } else {
          navigate('/', { replace: true });
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
      setSnackbarMessage(error.response?.data?.message || 'Login failed');
      setOpenSnackbar(true);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Card sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>Login</Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
            Login
          </Button>
        </form>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Don’t have an account?{' '}
            <Link component="button" variant="body2" onClick={() => navigate('/register')}>
              Register here
            </Link>
          </Typography>
        </Box>
      </Card>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="error">{snackbarMessage}</Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginPage;
