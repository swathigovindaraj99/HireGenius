const jwt = require('jsonwebtoken');

// Middleware to verify the token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];  // Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify JWT token
    req.user = decoded;  // Store user information in req.user
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

// Middleware to check if the user is an Admin
const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {  // Check if the user's role is 'admin'
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
  next();  // Proceed if the user is an admin
};

// Export both middlewares
module.exports = { verifyToken, isAdmin };
