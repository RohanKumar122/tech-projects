import  { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    console.log("Menu State:", !isOpen); // Debugging
  };

  return (
    <div className="relative bg-gray-900 text-white font-bold py-4 rounded-md shadow-lg flex justify-between items-center mx-2 md:px-7  lg:px-10 xl:px-12">
      <div>
        <h1 className="text-2xl text-green-400 md:text-3xl lg:text-4xl mx-4">Tech Projects</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex ">
        <ul className="flex space-x-5 md:space-x-10 lg:space-x-12 xl:space-x-16">
          <Link to='/'><li className=" hover:text-green-500  cursor-pointer">Home</li></Link>
          <Link to='/pending'><li className="hover:text-green-500 cursor-pointer">About</li></Link>
          <Link to='/pending'><li className="hover:text-green-500 cursor-pointer">Blog</li></Link>
          <Link to='/pending'><li className="hover:text-green-500 cursor-pointer">ContactUs</li></Link>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-center mx-4 ">
        <button
          onClick={toggleMenu}
          className="text-gray-400 hover:text-cyan-50 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 text-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            <Link to='/'><li className="hover:text-cyan-50 cursor-pointer">Home</li></Link>
            <Link to='/pending'><li className="hover:text-cyan-50 cursor-pointer">About</li></Link>
            <Link to='/pending'><li className="hover:text-cyan-50 cursor-pointer">Blog</li></Link>
            <Link to='/pending'><li className="hover:text-cyan-50 cursor-pointer">ContactUs</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
