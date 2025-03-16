import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FindAccount from './pages/FindAccount';
import OTPVerification from './pages/OTPVerification';
import ResetPassword from './pages/ResetPassword';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNavigation from './components/PageNavigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/find-account" element={<FindAccount />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
        <PageNavigation />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
