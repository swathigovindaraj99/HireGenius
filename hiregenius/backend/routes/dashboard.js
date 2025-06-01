const express = require('express');
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');

const router = express.Router();

// Student Dashboard
router.get('/student-dashboard', authenticateToken, authorizeRole('student'), (req, res) => {
  res.json({ message: `Welcome to the student dashboard, ${req.user.id}` });
});

// Admin Dashboard
router.get('/admin-dashboard', authenticateToken, authorizeRole('admin'), (req, res) => {
  res.json({ message: `Welcome to the admin dashboard, ${req.user.id}` });
});

module.exports = router;
