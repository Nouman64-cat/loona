"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";

const MobileNav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Shop now", href: "#shop" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center w-full px-6 py-6 bg-gradient-to-r from-peach to-purple">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <span className="font-mochiy text-white text-xl">Loona</span>
          </div>
        </Link>
        {/* Icons */}
        <div className="flex items-center space-x-4 text-white">
          <Link href="/products">
            <FiSearch size={24} className="hover:text-gray-200 transition" />
          </Link>
          <RiShoppingBagLine
            size={24}
            className="hover:text-gray-200 transition"
          />
          {!menuOpen ? (
            <HiOutlineMenu
              size={28}
              className="hover:text-gray-200 transition cursor-pointer"
              onClick={toggleMenu} // Opens the menu
            />
          ) : (
            <IoClose
              size={28}
              className="hover:text-gray-200 transition cursor-pointer"
              onClick={toggleMenu} // Closes the menu
            />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full h-[90%] bg-gradient-peach-purple z-50 flex flex-col items-center justify-center space-y-8">
          <ul className="text-left">
            {navLinks.map((link) => (
              <li key={link.name} className="mb-4">
                <a
                  href={link.href}
                  className="text-heading font-mochiy text-2xl hover:text-peach transition"
                  onClick={toggleMenu} // Closes the menu on link click
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
