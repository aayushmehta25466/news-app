import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PageNavigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Sign Up', path: '/signup' },
    { name: 'Find Account', path: '/find-account' },
    { name: 'OTP Verification', path: '/otp-verification' },
    { name: 'Reset Password', path: '/reset-password' }
  ];

  return (
    <div className="bg-blue-50 border-t border-blue-200">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium text-blue-700">Page Navigation (Testing)</h3>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
          >
            {isExpanded ? 'Hide' : 'Show'} Pages
            <svg className={`ml-1 h-4 w-4 transform ${isExpanded ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {isExpanded && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-2">
            {pages.map((page) => (
              <Link 
                key={page.path}
                to={page.path} 
                className="bg-white shadow-sm hover:shadow-md transition-shadow rounded px-4 py-2 text-center text-blue-600 hover:text-blue-800"
              >
                {page.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageNavigation;
