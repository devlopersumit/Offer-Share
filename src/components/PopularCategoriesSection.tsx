// @ts-nocheck
import React from 'react';

const categories = [
  { icon: '🛒', name: 'E-commerce', benefit: 'Best online shopping deals' },
  { icon: '✈️', name: 'Travel', benefit: 'Save on flights & hotels' },
  { icon: '🍔', name: 'Food', benefit: 'Discounts on food delivery' },
  { icon: '💻', name: 'SaaS', benefit: 'Exclusive software offers' },
  { icon: '🎓', name: 'Student', benefit: 'Special student discounts' },
  { icon: '💸', name: 'Cashback', benefit: 'Earn cashback on purchases' },
];

const PopularCategoriesSection = () => {
  return (
    <section className="w-full py-10 px-4 bg-green-50 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-green-900">Categories That Help You Save</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full max-w-4xl">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center p-3 bg-white rounded-xl shadow border border-green-100">
            <span className="text-3xl mb-1">{cat.icon}</span>
            <span className="font-semibold text-green-800 mb-1">{cat.name}</span>
            <span className="text-xs text-green-600 text-center">{cat.benefit}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategoriesSection; 