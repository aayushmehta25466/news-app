import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FindAccount from './pages/FindAccount';
import OTPVerification from './pages/OTPVerification';
import ResetPassword from './pages/ResetPassword';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNavigation from './components/PageNavigation';

// Layout component to conditionally render header and footer
const Layout = ({ children }) => {
  const location = useLocation();
  const authPages = ['/login', '/signup', '/find-account', '/otp-verification', '/reset-password'];
  const isAuthPage = authPages.some(page => location.pathname === page);

  return (
    <>
      {!isAuthPage && <Header />}
      {children}
      <PageNavigation />
      {!isAuthPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/find-account" element={<FindAccount />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
