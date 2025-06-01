const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const User = require('../models/User');
const TestResult = require('../models/TestResult'); // Assuming you have a separate model for quiz/test results

// Get all users (Admin only)
router.get('/users', verifyToken, isAdmin, async (req, res) => {
  try {
    // Fetch all users along with their test results
    const users = await User.find({}, '-password');  // Exclude password field

    // Populate each user with their associated test results (assuming you have a reference to TestResult in User model)
    const populatedUsers = await Promise.all(users.map(async (user) => {
      const testResults = await TestResult.find({ userId: user._id }); // Assuming TestResult has a `userId` field
      return { ...user.toObject(), testResults }; // Merge user data with test results
    }));

    res.json(populatedUsers); // Send the combined data of users with test results
  } catch (error) {
    console.error('Fetch users error:', error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

module.exports = router;
