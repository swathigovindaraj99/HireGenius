import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem('quizResults')) || [];
    setResults(storedResults);
  }, []);

  const handleClearResults = () => {
    localStorage.removeItem('quizResults');
    setResults([]);
  };

  const handleDownloadCSV = () => {
    if (results.length === 0) return;

    const header = [
      'Date',
      'Score',
      'Total Questions',
      'Percentage'
    ];

    const csvRows = [
      header.join(','),
      ...results.map(r =>
        [
          r.date,
          r.score,
          r.totalQuestions,
          r.percentage
        ]
          .map(field => `"${field}"`)
          .join(',')
      )
    ];

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'quiz_results.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadResume = (resumeUrl) => {
    if (!resumeUrl) return;
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'resume';
    a.click();
  };

  return (
    <Box sx={{ padding: 4, background: 'linear-gradient(135deg, #0a0f33, #1565C0)', minHeight: '100vh', color: '#fff' }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <Typography variant="h6" gutterBottom>Student Quiz Records</Typography>

      <Paper sx={{ mt: 3, overflow: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Total Questions</TableCell>
              <TableCell>Percentage (%)</TableCell>
              <TableCell>Download CV</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5}>No quiz records found.</TableCell>
              </TableRow>
            ) : (
              results.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.score}</TableCell>
                  <TableCell>{record.totalQuestions}</TableCell>
                  <TableCell>{record.percentage}%</TableCell>
                  <TableCell>
                    {record.resumeUrl ? (
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => handleDownloadResume(record.resumeUrl)}
                      >
                        Download CV
                      </Button>
                    ) : (
                      'No CV'
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>

      <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClearResults}
        >
          Clear All Records
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={handleDownloadCSV}
          disabled={results.length === 0}
        >
          Download CSV
        </Button>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
