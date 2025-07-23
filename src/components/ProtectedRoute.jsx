// @ts-nocheck
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const ProtectedRoute = ({ children, role }) => {
  const { user, loading, getRole } = useAuth();

  if (loading) return <div className="flex justify-center items-center min-h-[60vh]">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (role && getRole() !== role) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute; 