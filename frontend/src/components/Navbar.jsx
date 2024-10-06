import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Dropdown from './Dropdown'; // Adjust the path as necessary

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Use effect to handle clicks outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown(); // Close dropdown if clicked outside
      }
    };

    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="w-[80%] mx-auto flex justify-between items-center px-8 py-2 border-b-[1px] border-black sticky top-0 bg-[#f2e7dc] z-10">
      <h1 className="text-2xl font-bold">BLOGit</h1>

      <div className="space-x-4 font-semibold">
        <Link to="/create-post">
          <button className="px-6  py-2 rounded-full bg-white border-[1px] border-black hover:bg-gray-100">
            Write
          </button>
        </Link>
        <button
          className="relative px-6 py-2 rounded-full bg-white border-[1px] border-black hover:bg-gray-100"
          onClick={toggleDropdown}
        >
          Profile
        </button>
        {isDropdownOpen && (
          <div ref={dropdownRef}>
            <Dropdown onClose={closeDropdown} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
