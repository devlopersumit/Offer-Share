// @ts-nocheck
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Signup = () => {
  const { signup, user, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(email, password, role, name);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="flex justify-center items-center min-h-[60vh]">Loading...</div>;
  if (user) return <div className="flex flex-col items-center min-h-[60vh] justify-center text-lg">Already signed up. <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded" onClick={() => navigate('/dashboard')}>Go to Dashboard</button></div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-8 w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-2 text-center">Sign Up</h2>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <input type="text" placeholder="Name" className="border rounded px-3 py-2" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" className="border rounded px-3 py-2" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="border rounded px-3 py-2" value={password} onChange={e => setPassword(e.target.value)} required />
        <select className="border rounded px-3 py-2" value={role} onChange={e => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="business">Business</option>
        </select>
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded">Sign Up</button>
        <div className="text-center text-sm mt-2">Already have an account? <a href="/login" className="text-yellow-600 hover:underline">Login</a></div>
        <div className="text-xs text-gray-500 text-center mt-2">By signing up, you agree to our <a href="/privacy" className="underline hover:text-yellow-600">Privacy Policy</a>.</div>
      </form>
    </div>
  );
};

export default Signup; 