import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  const user = JSON.parse(atob(token.split('.')[1])); // quick decode

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
