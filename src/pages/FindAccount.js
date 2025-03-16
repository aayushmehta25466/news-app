import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FindAccount = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Clear any previous errors
    setError('');
    setIsSubmitting(true);
    
    // Simulate API call to find account
    setTimeout(() => {
      setIsSubmitting(false);
      // In a real app, you would check if the email exists in your database
      // For now, we'll just redirect to OTP verification
      navigate('/otp-verification', { state: { email } });
    }, 1500);
  };

  return (
    <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Find your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please enter your email address to search for your account.
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Link to="/login" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              Back to login
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default FindAccount;
