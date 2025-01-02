import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-peach to-purple text-white py-8 mt-20">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Logo */}
          <div className="mb-6 md:mb-0">
            <h2 className="font-mochiy text-2xl">Loona</h2>
            <p className="font-work_sans text-sm mt-2">
              Refurbished Branded Clothing
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 text-center">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/shop" className="hover:underline">
              Shop Now
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/faq" className="hover:underline">
              FAQ
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300 opacity-50" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Social Media Links */}
          <div className="flex gap-4 mb-4 md:mb-0">
            <Link href="https://twitter.com" target="_blank">
              <img
                src="/x-icon.svg"
                alt="Twitter"
                className="w-6 h-6 hover:opacity-80 transition"
              />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <img
                src="/instagram-icon.svg"
                alt="Instagram"
                className="w-6 h-6 hover:opacity-80 transition"
              />
            </Link>
            <Link href="https://tiktok.com" target="_blank">
              <img
                src="/tiktok-icon.svg"
                alt="TikTok"
                className="w-6 h-6 hover:opacity-80 transition"
              />
            </Link>
          </div>

          {/* Copyright */}
          <p className="font-work_sans">
            © {new Date().getFullYear()} Loona. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
