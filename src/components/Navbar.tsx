// @ts-nocheck
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-yellow-600">
          <span className="text-2xl">🏷️</span>
          OfferShare
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/offers" className="text-gray-700 hover:text-yellow-600 font-medium transition">Offers</Link>
          <Link to="/add" className="text-gray-700 hover:text-yellow-600 font-medium transition">Add Offer</Link>
          {!loading && !user && (
            <>
              <Link to="/login" className="text-gray-700 hover:text-yellow-600 font-medium transition">Login</Link>
              <Link to="/signup" className="text-gray-700 hover:text-yellow-600 font-medium transition">Sign Up</Link>
            </>
          )}
          {!loading && user && (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-yellow-600 font-medium transition">Dashboard</Link>
              <button onClick={handleLogout} className="text-gray-700 hover:text-yellow-600 font-medium transition bg-transparent border-none cursor-pointer">Logout</button>
            </>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-700 hover:text-yellow-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 py-2 flex flex-col gap-2">
          <Link to="/offers" className="text-gray-700 hover:text-yellow-600 font-medium py-2 border-b border-gray-100" onClick={() => setMenuOpen(false)}>Offers</Link>
          <Link to="/add" className="text-gray-700 hover:text-yellow-600 font-medium py-2 border-b border-gray-100" onClick={() => setMenuOpen(false)}>Add Offer</Link>
          {!loading && !user && (
            <>
              <Link to="/login" className="text-gray-700 hover:text-yellow-600 font-medium py-2 border-b border-gray-100" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/signup" className="text-gray-700 hover:text-yellow-600 font-medium py-2 border-b border-gray-100" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </>
          )}
          {!loading && user && (
            <>
              <Link to="/dashboard" className="text-gray-700 hover:text-yellow-600 font-medium py-2 border-b border-gray-100" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="text-gray-700 hover:text-yellow-600 font-medium py-2 border-b border-gray-100 bg-transparent border-none cursor-pointer">Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 