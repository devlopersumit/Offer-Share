// @ts-nocheck
import React from 'react';

const links = [
  { name: 'About', href: '/about', aria: 'About OfferShare' },
  { name: 'Contact', href: 'mailto:hello@offershare.com', aria: 'Contact OfferShare' },
  { name: 'Blog', href: '#', aria: 'OfferShare Blog' },
  { name: 'Terms', href: '/terms', aria: 'Terms of Service' },
  { name: 'Privacy', href: '/privacy', aria: 'Privacy Policy' },
];

const socials = [
  { icon: '📱', name: 'Instagram', href: '#' },
  { icon: '✈️', name: 'Telegram', href: '#' },
  { icon: '🟢', name: 'WhatsApp', href: '#' },
  { icon: '🐦', name: 'Twitter', href: '#' },
];

const FooterSection = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 py-8 px-4 flex flex-col items-center mt-8">
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        {links.map((link, idx) => (
          <a key={idx} href={link.href} aria-label={link.aria} className="hover:text-yellow-400 transition font-medium">
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        {socials.map((social, idx) => (
          <a key={idx} href={social.href} className="text-2xl hover:text-yellow-400 transition" aria-label={social.name}>
            {social.icon}
          </a>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <a href="/add" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow transition">📤 Submit an Offer</a>
        <a href="/add" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow transition">💼 For Businesses</a>
      </div>
      <div className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} OfferShare.com. All rights reserved.</div>
    </footer>
  );
};

export default FooterSection; 