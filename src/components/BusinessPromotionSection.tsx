// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';

const benefits = [
  'Pin your offer to the top for more visibility',
  'Track clicks and leads easily',
  'Affordable plans for every business',
];

const BusinessPromotionSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full py-10 px-4 bg-purple-50 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-900 text-center">
        Promote Your Business Offers to Real Shoppers
      </h2>
      <ul className="mb-6 max-w-xl w-full flex flex-col gap-2">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-center gap-2 text-purple-800 bg-white rounded-lg shadow p-3 border border-purple-100">
            <span className="text-green-500 text-lg">✔️</span> {benefit}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/add')} className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-lg shadow transition text-lg">
        List Your Offer — Get More Customers
      </button>
    </section>
  );
};

export default BusinessPromotionSection; 