import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import DashboardIcon from '@mui/icons-material/Dashboard';

const HomePage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  let role = null;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      role = decoded.role;
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  const navigateToResumeAnalyzer = () => {
    if (token) {
      try {
        jwtDecode(token);
        navigate('/resume-analyzer');
      } catch (error) {
        console.error('Error decoding token:', error);
        navigate('/login', { state: { from: '/resume-analyzer' } });
      }
    } else {
      navigate('/login', { state: { from: '/resume-analyzer' } });
    }
  };

  const navigateToDashboard = () => {
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.role === 'Admin') {
        navigate('/admin-dashboard');
      } else if (decoded.role === 'Student') {
        navigate('/student-dashboard');
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      navigate('/login');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0A0A23, #0057A0)',
        color: '#fff',
        textAlign: 'center',
        px: 3,
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontFamily: "'Roboto', sans-serif",
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
          fontSize: '3rem',
        }}
      >
        Welcome to HireGenius
      </Typography>

      <Typography
        variant="h6"
        sx={{
          maxWidth: '600px',
          fontStyle: 'italic',
          fontSize: '1.2rem',
          marginBottom: '20px',
          opacity: 0.8,
        }}
      >
        AI-Powered Resume Scanner & Job Matching Platform
      </Typography>

      {/* Only show Resume Analyzer button if user is a Student */}
      {role === 'Student' && (
        <Button
          onClick={navigateToResumeAnalyzer}
          variant="contained"
          sx={{
            mt: 3,
            background: 'linear-gradient(45deg, #FF4081, #F50057)',
            '&:hover': {
              background: 'linear-gradient(45deg, #F50057, #FF4081)',
              transform: 'scale(1.05)',
              boxShadow: '0px 8px 40px rgba(0, 0, 0, 0.3)',
            },
            paddingX: 4,
            paddingY: 1.5,
            fontSize: '1.1rem',
            textTransform: 'none',
            borderRadius: '30px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          Resume Analyzer
        </Button>
      )}

      {/* Show Dashboard button for both Admin and Student */}
      {role && (
        <Button
          onClick={navigateToDashboard}
          variant="contained"
          startIcon={<DashboardIcon />}
          sx={{
            mt: 3,
            background: 'linear-gradient(45deg, #4CAF50, #2E7D32)',
            '&:hover': {
              background: 'linear-gradient(45deg, #2E7D32, #4CAF50)',
              transform: 'scale(1.05)',
              boxShadow: '0px 8px 40px rgba(0, 0, 0, 0.3)',
            },
            paddingX: 4,
            paddingY: 1.5,
            fontSize: '1.1rem',
            textTransform: 'none',
            borderRadius: '30px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          Dashboard
        </Button>
      )}
    </Box>
  );
};

export default HomePage;
