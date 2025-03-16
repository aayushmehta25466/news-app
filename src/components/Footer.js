import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">SRH News Aggregator</h2>
            <p className="text-gray-300">
              Your trusted source for the latest news from around the world.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/business" className="text-gray-300 hover:text-white">Business</Link></li>
              <li><Link to="/sports" className="text-gray-300 hover:text-white">Sports</Link></li>
              <li><Link to="/technology" className="text-gray-300 hover:text-white">Technology</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <address className="not-italic text-gray-300">
              <p>Email: contact@srhnews.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} SRH News Aggregator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
