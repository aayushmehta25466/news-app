import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setShowCountryDropdown(!showCountryDropdown);
  };

  return (
    <header className="bg-gray-200 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <img 
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" 
            alt="SRH Logo" 
            className="w-10 h-10 rounded-full object-cover"
          />
          SRH
          <span className="text-black"> Aggregator</span>
        </Link>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-black" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        {/* Navigation Links */}
        <nav className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-200 md:bg-transparent p-4 md:p-0 z-10 transform ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
            <li className="flex items-center"><Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link></li>
            <li className="relative flex items-center">
              <button 
                className="text-black flex items-center gap-1 py-1 px-2 rounded-md hover:bg-gray-300 transition-colors" 
                onClick={toggleDropdown}
              >
                Country
                <span className={`inline-block transition-transform duration-200 ${showCountryDropdown ? 'rotate-180' : ''}`}>
                  <FaChevronDown />
                </span>
              </button>
              <ul className={`absolute ${showCountryDropdown ? 'block' : 'hidden'} text-gray-700 pt-1 bg-white shadow-lg rounded-md z-10 w-32 top-full left-0`}>
                <li><Link className="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" to="/?country=in">India</Link></li>
                <li><Link className="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" to="/?country=np">Nepal</Link></li>
                <li><Link className="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" to="/?country=us">America</Link></li>
                <li><Link className="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" to="/?country=cn">China</Link></li>
                <li><Link className="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" to="/?country=au">Australia</Link></li>
              </ul>
            </li>
            <li className="flex items-center"><Link to="/sports" className="text-black hover:text-gray-700">Sports</Link></li>
            <li className="flex items-center"><Link to="/business" className="text-black hover:text-gray-700">Business</Link></li>
            <li className="flex items-center"><Link to="/technology" className="text-black hover:text-gray-700">Technology</Link></li>
            <li className="flex items-center"><Link to="/health" className="text-black hover:text-gray-700">Health</Link></li>
          </ul>
        </nav>

        <div className="relative hidden md:block">
          <input className="pl-8 pr-4 py-2 rounded-full bg-white border border-gray-300" placeholder="Search" type="text" />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;
