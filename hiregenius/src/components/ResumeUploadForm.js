import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function ResumeUploadForm() {
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (event) => {
    setResume(event.target.files[0]);
  };
  

  const handleSubmit = () => {
    // Send resume to backend for NLP processing
  };

  return (
    <div className="upload-form">
      <TextField
        label="Full Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <input
        type="file"
        accept=".pdf, .docx"
        onChange={handleResumeUpload}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Upload Resume
      </Button>
    </div>
  );
}

export default ResumeUploadForm;
