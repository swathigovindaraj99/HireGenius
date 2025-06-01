import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Card, Grid, IconButton, Collapse, Link } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import CloseIcon from '@mui/icons-material/Close';
import { jwtDecode } from 'jwt-decode';

ChartJS.register(ArcElement, Tooltip, Legend);

const StudentDashboard = () => {
  const [results, setResults] = useState([]);
  const [showBadge, setShowBadge] = useState(true);
  const [studentEmail, setStudentEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const userEmail = decoded.email;
        setStudentEmail(userEmail);
        const storedResults = JSON.parse(localStorage.getItem('quizResults')) || [];
        const userResults = storedResults.filter(result => result.email === userEmail);
        setResults(userResults);
      } catch (err) {
        console.error('Token decode failed', err);
      }
    }
  }, []);

  const handleReset = () => {
    const allResults = JSON.parse(localStorage.getItem('quizResults')) || [];
    const updatedResults = allResults.filter(r => r.email !== studentEmail);
    localStorage.setItem('quizResults', JSON.stringify(updatedResults));
    setResults([]);
    setShowBadge(false);
  };

  const averageScore = results.length
    ? (results.reduce((acc, curr) => acc + curr.score, 0) / results.length).toFixed(2)
    : 0;

  const highScore = results.length ? Math.max(...results.map(r => r.score)) : 0;
  const lowScore = results.length ? Math.min(...results.map(r => r.score)) : 0;

  const latestScore = results.length ? results[results.length - 1].score : null;
  const badgeMessage = latestScore !== null
    ? latestScore >= 12 ? "🎉 Crushing it!"
    : latestScore >= 8 ? "👍 Good work, keep going!"
    : "🚀 Time to level up!"
    : null;

  const handleDownloadResults = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(results, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "quizResults.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const sortByScore = () => {
    const sorted = [...results].sort((a, b) => b.score - a.score);
    setResults(sorted);
  };

  const sortByDate = () => {
    const sorted = [...results].sort((a, b) => new Date(b.date) - new Date(a.date));
    setResults(sorted);
  };

  return (
    <Box sx={{ padding: 4, background: 'linear-gradient(135deg, #0a0f33, #1565C0)', minHeight: '100vh', color: '#fff' }}>
      <Typography variant="h4" gutterBottom>📊 Dashboard</Typography>

      <Typography variant="h6">Average Score: {averageScore}</Typography>
      <Typography variant="h6">Highest Score: {highScore}</Typography>
      <Typography variant="h6">Lowest Score: {lowScore}</Typography>

      <Collapse in={badgeMessage && showBadge}>
        {badgeMessage && (
          <Box sx={{ mt: 3, p: 2, backgroundColor: '#4caf50', borderRadius: '8px', textAlign: 'center', position: 'relative' }}>
            <Typography variant="h6" sx={{ color: '#fff' }}>
              {badgeMessage}
            </Typography>
            <IconButton
              size="small"
              onClick={() => setShowBadge(false)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: '#fff',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        )}
      </Collapse>

      <Button variant="contained" color="secondary" sx={{ mt: 3, mr: 2 }} onClick={handleReset}>
        Reset History
      </Button>
      <Button variant="outlined" sx={{ mt: 3, mr: 2 }} onClick={handleDownloadResults}>
        Download Results
      </Button>
      <Button variant="contained" sx={{ mt: 3, mr: 2 }} onClick={sortByScore}>
        Sort by Score
      </Button>
      <Button variant="contained" sx={{ mt: 3 }} onClick={sortByDate}>
        Sort by Date
      </Button>

      <Grid container spacing={3} sx={{ mt: 5 }}>
        {results.map((res, idx) => {
          const correct = res.score;
          const incorrect = res.totalQuestions - res.score;
          const percentage = ((correct / res.totalQuestions) * 100).toFixed(2);

          const data = {
            labels: ['Correct', 'Incorrect'],
            datasets: [
              {
                label: 'Quiz Breakdown',
                data: [correct, incorrect],
                backgroundColor: ['#4caf50', '#f44336'],
                borderColor: ['#388e3c', '#d32f2f'],
                borderWidth: 1,
              },
            ],
          };

          return (
            <Grid item xs={12} md={6} lg={4} key={idx}>
              <Card sx={{ p: 2, backgroundColor: '#f5f5f5', color: '#333' }}>
                <Typography variant="subtitle1">📅 {res.date}</Typography>
                {res.studentName && (
                  <Typography variant="subtitle2">👤 {res.studentName}</Typography>
                )}
                <Pie data={data} />
                <Typography variant="subtitle2" sx={{ mt: 1 }}>Score: {correct}/{res.totalQuestions}</Typography>
                <Typography variant="subtitle2">Percentage: {percentage}%</Typography>
                {res.resumeUrl && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    📄 <Link href={res.resumeUrl} target="_blank" rel="noopener noreferrer">View Resume</Link>
                  </Typography>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default StudentDashboard;
