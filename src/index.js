import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles/global.css';

const theme = createTheme({
  palette: {
    primary: { main: '#0A0A23' },
    secondary: { main: '#1976d2' },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
