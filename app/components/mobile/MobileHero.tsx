"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineShoppingCart } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import x from "@/public/x-icon.svg";
import tiktok from "@/public/tiktok-icon.svg";
import instagram from "@/public/instagram-icon.svg";
import hero from "@/public/loona-hero-image.svg";
import Link from "next/link";

const socialMediaLinks = [
  { name: "X", href: "https://twitter.com", icon: x },
  { name: "Instagram", href: "https://instagram.com", icon: instagram },
  { name: "TikTok", href: "https://tiktok.com", icon: tiktok },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Shop now", href: "#shop" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const MobileHero: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative h-screen w-full bg-gradient-to-r from-peach to-purple flex flex-col items-center text-center">
      {/* Top Navigation */}
      <div className="flex justify-between items-center w-full px-6 py-6 bg-gradient-to-r from-peach to-purple">
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-mochiy text-white text-xl">Loona</span>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-white">
          <FiSearch size={24} className="hover:text-gray-200 transition" />
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

      {/* Menu Overlay */}
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

      {/* Hero Section */}
      <div className="inset-0 flex items-center justify-center mt-8">
        <Image src={hero} alt="Jacket" width={400} height={400} priority />
      </div>

      {/* Shop Now Button */}
      <Link href="/products">
        <button className="mt-6 px-8 py-3 flex items-center gap-3 text-white font-work_sans border-2 border-white rounded-full hover:bg-white hover:text-gradient-peach-purple transition">
          <HiOutlineShoppingCart size={24} />
          Shop Now
        </button>
      </Link>

      {/* Social Media Icons */}
      <div className="flex items-center justify-center mt-20 space-x-6">
        {socialMediaLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 transition"
          >
            <Image
              src={social.icon}
              alt={`${social.name} Icon`}
              width={30}
              height={30}
            />
          </a>
        ))}
      </div>

      {/* Vertical Text */}
      <div className="absolute bottom-4 w-full flex justify-center">
        <p className="font-mochiy text-white text-md">
          Refurbished Branded Clothes
        </p>
      </div>
    </div>
  );
};

export default MobileHero;
