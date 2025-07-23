// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center bg-gradient-to-b from-yellow-50 to-white">
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-gray-900">
        Discover. Share. Save. <span className="text-yellow-500">– The Smartest Way to Find Real Deals.</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl">
        The #1 community-powered platform to discover, submit, and promote the best offers from e-commerce, travel, food, SaaS, and more.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-2">
        <Link to="/offers" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition">Explore Deals</Link>
        <Link to="/add" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow transition">Add Offer</Link>
      </div>
    </section>
  );
};

export default HeroSection; 