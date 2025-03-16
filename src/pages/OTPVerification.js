import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [countdown, setCountdown] = useState(30);
  const [error, setError] = useState('');
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  // Handle OTP input change
  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Move to next input field if current field is filled
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Handle keydown for backspace and arrow navigation
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs[index - 1].current.focus();
    } else if (e.key === 'ArrowRight' && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const otpValue = otp.join('');
    if (otpValue.length !== 4) {
      setError('Please enter all 4 digits');
      return;
    }
    
    // In a real app, you would validate the OTP against a server
    // For demo purposes, we'll accept any 4-digit code
    console.log('OTP submitted:', otpValue);
    navigate('/reset-password');
  };

  // Handle resend OTP
  const handleResend = () => {
    if (countdown > 0) return;
    
    // In a real app, make an API call to resend OTP
    setCountdown(30);
    setError('');
    alert('New OTP has been sent to your email');
  };

  // Countdown timer
  useEffect(() => {
    if (countdown <= 0) return;
    
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Verify Your Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            We've sent a 4-digit code to {email || 'your email'}. 
            Please enter the code below to verify your account.
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter Verification Code
            </label>
            <div className="flex justify-center gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              ))}
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Verify
            </button>
          </div>
          
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={handleResend}
              disabled={countdown > 0}
              className={`text-sm font-medium ${
                countdown > 0 ? 'text-gray-400' : 'text-blue-600 hover:text-blue-500'
              }`}
            >
              {countdown > 0 ? `Resend code in ${countdown}s` : 'Resend code'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default OTPVerification;
