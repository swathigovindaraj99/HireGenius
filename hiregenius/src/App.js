import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import QuizPage from './pages/QuizPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Chatbot from './components/Chatbot';
import { ScoreProvider } from './context/ScoreContext';

function App() {
  return (
    <ScoreProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </ScoreProvider>
  );
}

export default App;
