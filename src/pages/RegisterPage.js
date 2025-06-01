import React, { useState } from 'react';
import { Box, Card, TextField, Button, Typography, MenuItem, Snackbar, Alert, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password || !role) {
      setSnackbarMessage('All fields are required!');
      setOpenSnackbar(true);
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/register', {
        name, email, password, role: role.toLowerCase()
      });

      alert('Registration Successful!');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Card sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>Register</Typography>

        <TextField fullWidth label="Full Name" margin="normal"
          value={name} onChange={(e) => setName(e.target.value)} />

        <TextField fullWidth label="Email" margin="normal"
          value={email} onChange={(e) => setEmail(e.target.value)} />

        <TextField fullWidth label="Password" type="password" margin="normal"
          value={password} onChange={(e) => setPassword(e.target.value)} />

        <TextField
          select
          fullWidth
          label="Select Role"
          margin="normal"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Student">Student</MenuItem>
        </TextField>

        <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleRegister}>
          Register
        </Button>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Already have an account?{' '}
            <Link component="button" variant="body2" onClick={() => navigate('/login')}>
              Login here
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

export default RegisterPage;
