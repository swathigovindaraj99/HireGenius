import React from 'react';
import { Box, Card, TextField, Button, Typography } from '@mui/material';

const ContactPage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Card sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>Contact Us</Typography>
        <TextField fullWidth label="Your Name" margin="normal" />
        <TextField fullWidth label="Your Email" margin="normal" />
        <TextField fullWidth label="Message" margin="normal" multiline rows={4} />
        <Button fullWidth variant="contained" sx={{ mt: 2 }}>Send Message</Button>
      </Card>
    </Box>
  );
};

export default ContactPage;
