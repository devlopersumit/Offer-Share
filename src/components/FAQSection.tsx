// @ts-nocheck
import React, { useState } from 'react';

const faqs = [
  {
    q: 'What makes OfferShare different from other deal sites?',
    a: 'OfferShare is 100% community-powered. Real users share, upvote, and verify deals—so you always get the best, freshest offers.'
  },
  {
    q: 'Is OfferShare free to use?',
    a: 'Yes! Browsing, sharing, and upvoting deals is always free for everyone.'
  },
  {
    q: 'How do I earn rewards?',
    a: 'Share great offers or help others discover deals. You earn coins, badges, and sometimes even cash rewards for top contributions.'
  },
  {
    q: 'Can businesses list their offers?',
    a: 'Absolutely! Businesses can list and promote offers to reach real, deal-hungry users.'
  },
  {
    q: 'How do I know deals are real?',
    a: 'Deals are upvoted and flagged by the community. The best, most trusted offers always rise to the top.'
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="w-full py-10 px-4 bg-white flex flex-col items-center border-t border-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 text-center">Frequently Asked Questions</h2>
      <div className="w-full max-w-2xl flex flex-col gap-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded-lg bg-gray-50">
            <button
              className="w-full text-left px-4 py-3 font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              {faq.q}
              <span className="ml-2 text-xl">{open === idx ? '−' : '+'}</span>
            </button>
            {open === idx && (
              <div className="px-4 pb-4 text-gray-700 text-sm animate-fade-in">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 