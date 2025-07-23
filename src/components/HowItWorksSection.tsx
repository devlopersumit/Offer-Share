// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';

const steps = [
  { icon: '🔎', title: 'Find real, user-shared deals every day' },
  { icon: '➕', title: 'Share your own offers in seconds' },
  { icon: '⬆️', title: 'Upvote the best, most helpful deals' },
  { icon: '💸', title: 'Save money or earn rewards—your choice!' },
];

const HowItWorksSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full py-10 px-4 bg-blue-50 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-900">How OfferShare Solves Your Deal-Hunting Problems</h2>
      <div className="flex flex-col sm:flex-row gap-6 mb-6 w-full max-w-4xl justify-center">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center flex-1">
            <div className="text-3xl mb-2">{step.icon}</div>
            <div className="text-blue-800 text-base font-medium">{step.title}</div>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/offers')} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow transition text-lg">
        Try OfferShare Now — It’s Free!
      </button>
    </section>
  );
};

export default HowItWorksSection; 