"use client"
import React, { useState } from "react";

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Icon */}
      <button
        className="text-heading focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-28 left-0 w-full bg-white shadow-lg z-50 flex flex-col px-8 py-4">
          <li>
            <a
              href="#home"
              className="text-heading font-mochiy hover:text-peach transition"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <hr className="border-t border-gray-200 my-4" />
          <li>
            <a
              href="#shop"
              className="text-heading font-mochiy hover:text-peach transition"
              onClick={toggleMenu}
            >
              Shop
            </a>
          </li>
          <hr className="border-t border-gray-200 my-4" />
          <li>
            <a
              href="#about"
              className="text-heading font-mochiy hover:text-peach transition"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <hr className="border-t border-gray-200 my-4" />
          <li>
            <a
              href="#contact"
              className="text-heading font-mochiy hover:text-peach transition"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
          <hr className="border-t border-gray-200 my-4" />
          <li>
            <button
              className="px-6 py-2 mt-2 text-white bg-gradient-to-r from-peach to-purple rounded-lg shadow-lg hover:opacity-90 transition"
              onClick={toggleMenu}
            >
              Shop Now
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
