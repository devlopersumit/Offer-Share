// @ts-nocheck
import React from 'react';

const testimonials = [
  {
    quote: 'I saved thousands using deals from OfferShare!',
    name: 'Priya, Student',
  },
  {
    quote: 'My business got real customers in days.',
    name: 'Akash, Founder',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-10 px-4 bg-gray-50 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 text-center">
        Real Results from Real Users
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
        {testimonials.map((t, idx) => (
          <div key={idx} className="flex-1 bg-white rounded-xl shadow p-5 border border-gray-100 flex flex-col items-center">
            <div className="text-base italic text-gray-700 mb-2">“{t.quote}”</div>
            <div className="font-semibold text-gray-800">– {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection; 