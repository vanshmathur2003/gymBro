import  { useState } from 'react';
import logo from '../assets/_-removebg-preview.png'
import { Link } from "react-router-dom";


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-row items-center">
            <span className="text-orange-600 font-bold text-2xl">GymBro</span>
            <img src={logo} className='h-12 w-15' />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to={'/'}>
            <button className="text-gray-700 hover:text-orange-600">Search Exercise</button>
            </Link>
            <Link to={'/BmiCalculator'}>
            <button className="text-gray-700 hover:text-orange-600">BMI Calculator</button>
            </Link>
          </div>

          {/* Dropdown Menu (Mobile) */}
          <div className="md:hidden relative">
            <button onClick={toggleDropdown} className="text-gray-700 hover:text-orange-600">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>

            {/* Dropdown Content */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-4 w-40 bg-white border rounded shadow-lg">
                <Link to={'/'}>
                <button className="block text-left px-4 py-2 text-sm text-gray-700 hover:text-orange-600">
                  Search Exercise
                </button>
                </Link>
                <Link to={'/BmiCalculator'}>
                <button className="block text-left px-4 py-2 text-sm text-gray-700 hover:text-orange-600">
                  BMI Calculator
                </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
