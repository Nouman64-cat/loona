import React from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { RiShoppingBagLine } from "react-icons/ri";
import logo from "@/public/loona-white-logo.svg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Shop now", href: "#shop" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-peach to-purple py-4">
      <div className=" flex justify-between px-14 items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Loona Logo" width={100} height={100} />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-mochiy text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-gray-200 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-6 text-white">
          <FiSearch size={24} className="hover:text-gray-200 transition" />
          <HiOutlineHome size={24} className="hover:text-gray-200 transition" />
          <RiShoppingBagLine
            size={24}
            className="hover:text-gray-200 transition"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
