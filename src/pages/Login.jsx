// @ts-nocheck
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Login = () => {
  const { login, loginWithGoogle, user, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    setError('');
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="flex justify-center items-center min-h-[60vh]">Loading...</div>;
  if (user) return <div className="flex flex-col items-center min-h-[60vh] justify-center text-lg">Already logged in. <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded" onClick={() => navigate('/dashboard')}>Go to Dashboard</button></div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-8 w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <input type="email" placeholder="Email" className="border rounded px-3 py-2" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="border rounded px-3 py-2" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded">Login</button>
        <button type="button" onClick={handleGoogle} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded flex items-center justify-center gap-2">
          <span>Sign in with Google</span>
        </button>
        <div className="text-center text-sm mt-2">Don't have an account? <a href="/signup" className="text-yellow-600 hover:underline">Sign up</a></div>
      </form>
    </div>
  );
};

export default Login; 