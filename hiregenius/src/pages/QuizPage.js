import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import questionsBank from '../data/questionsBank';
import { jwtDecode } from 'jwt-decode';

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { skills, studentName } = location.state || { skills: [], studentName: 'Anonymous' };

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [submitted, setSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);

  useEffect(() => {
    const selectedQuestions = [];
    skills.forEach(skill => {
      if (questionsBank[skill]) {
        selectedQuestions.push(...questionsBank[skill]);
      }
    });
    const shuffled = selectedQuestions.sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, 15));
  }, [skills]);

  useEffect(() => {
    if (timeLeft <= 0 && !submitted) {
      toast.warn("⏰ Time’s up! Submitting your quiz...");
      handleSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: selectedOption
    }));
  };

  const handleSubmit = () => {
    if (submitted) return;

    if (!resumeFile) {
      toast.error("Please upload your resume before submitting!");
      return;
    }

    setSubmitted(true);

    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (answers[idx] === q.answer) {
        score++;
      }
    });

    const totalQuestions = quizQuestions.length;
    const token = localStorage.getItem('token');

    let email = 'unknown@example.com';
    if (token) {
      try {
        const decoded = jwtDecode(token);
        email = decoded.email;
      } catch (err) {
        console.error('Token decode failed', err);
      }
    }

    const resumeUrl = URL.createObjectURL(resumeFile);

    const existingResults = JSON.parse(localStorage.getItem('quizResults')) || [];
    existingResults.push({
      studentName,
      email,
      date: new Date().toLocaleString(),
      score,
      totalQuestions,
      percentage: ((score / totalQuestions) * 100).toFixed(2),
      resumeUrl
    });
    localStorage.setItem('quizResults', JSON.stringify(existingResults));

    toast.success("✅ Quiz submitted successfully!");
    navigate('/student-dashboard');
  };

  return (
    <Box sx={{ padding: 4, background: 'linear-gradient(135deg, #0a0f33, #1565C0)', minHeight: '100vh', color: '#fff' }}>
      <Typography variant="h4" gutterBottom>Quiz for {studentName}</Typography>
      <Typography variant="h6">Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</Typography>

      {quizQuestions.map((q, idx) => (
        <Card key={idx} sx={{ p: 2, mt: 2, backgroundColor: '#f5f5f5', color: '#333' }}>
          <Typography><strong>{idx + 1}. {q.question}</strong></Typography>
          <RadioGroup
            value={answers[idx] || ''}
            onChange={(e) => handleAnswerChange(idx, e.target.value)}
          >
            {q.options.map((option, optionIdx) => (
              <FormControlLabel
                key={optionIdx}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </Card>
      ))}

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">Upload Your Resume:</Typography>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResumeFile(e.target.files[0])}
        />
      </Box>

      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleSubmit}>
        Submit Quiz
      </Button>

      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </Box>
  );
};

export default QuizPage;
