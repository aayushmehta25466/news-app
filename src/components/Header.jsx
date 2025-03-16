import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-200 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        SRH
        <span className="text-black"> Aggregator</span>
      </div>
      <nav className="space-x-4">
        <a className="text-blue-500" href="#">Home</a>
        <div className="relative inline-block">
          <button className="text-black" onClick={toggleDropdown}>
            Country
            <i className="fas fa-caret-down ml-1"></i>
          </button>
          <ul className={`absolute text-gray-700 pt-1 ${isDropdownOpen ? '' : 'hidden'}`}>
            <li><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">India</a></li>
            <li><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Nepal</a></li>
            <li><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">America</a></li>
            <li><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">China</a></li>
            <li><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Australia</a></li>
          </ul>
        </div>
        <a className="text-black" href="#">Sports</a>
        <a className="text-black" href="#">Business</a>
      </nav>
      <div className="relative">
        <input className="pl-8 pr-4 py-2 rounded-full bg-white border border-gray-300" placeholder="Search" type="text" />
        <i className="fas fa-search absolute left-2 top-2 text-gray-400"></i>
      </div>
    </header>
  );
};

export default Header;
