// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommunityRewardsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full py-10 px-4 bg-red-50 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-900 text-center">
        Earn Rewards for Sharing Great Deals
      </h2>
      <p className="text-lg text-red-700 mb-6 text-center max-w-2xl">
        Every time you share a helpful offer, you earn coins and badges. Top sharers get featured and can even earn real cash rewards!
      </p>
      <button onClick={() => navigate('/add')} className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow transition text-lg">
        Start Sharing & Earning
      </button>
    </section>
  );
};

export default CommunityRewardsSection; 