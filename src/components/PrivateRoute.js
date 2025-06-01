import React from 'react';
import { Navigate } from 'react-router-dom'; // Use Navigate for redirects
import { getCurrentUser } from '../services/authService';

function PrivateRoute({ element: Component }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        await getCurrentUser();
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Component />;
}

export default PrivateRoute;
