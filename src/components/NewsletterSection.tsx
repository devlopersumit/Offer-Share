// @ts-nocheck
import React, { useRef } from 'react';

const NewsletterSection = () => {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    inputRef.current?.focus();
  };
  return (
    <section className="w-full py-12 px-4 bg-yellow-50 flex flex-col items-center">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-yellow-900 text-center">
        Don’t Miss a Single Deal!
      </h2>
      <p className="text-lg text-yellow-700 mb-4 text-center max-w-2xl">
        Subscribe to our newsletter and get the hottest trending deals directly in your inbox + access to exclusive offers.
      </p>
      <div className="bg-white rounded-xl shadow p-6 border border-yellow-100 flex flex-col items-center mb-2 w-full max-w-md">
        <input
          ref={inputRef}
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-3 border border-yellow-200 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button onClick={handleFocus} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition w-full">
          📩 Subscribe Now
        </button>
        <div className="text-xs text-gray-500 text-center mt-2">We respect your privacy. <a href="/privacy" className="underline hover:text-yellow-600">Read our policy</a>.</div>
      </div>
      <div className="text-yellow-800 font-semibold flex items-center gap-2">
        <span className="text-2xl">🧧</span>
        Get our Free eBook: “300+ Free Tools to Save Money & Time”
      </div>
    </section>
  );
};

export default NewsletterSection; 