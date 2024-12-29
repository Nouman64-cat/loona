"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import x from "@/public/x-icon.svg";
import tiktok from "@/public/tiktok-icon.svg";
import instagram from "@/public/instagram-icon.svg";

const socialMediaLinks = [
  { name: "X", href: "https://twitter.com", icon: x },
  { name: "TikTok", href: "https://tiktok.com", icon: tiktok },
  { name: "Instagram", href: "https://instagram.com", icon: instagram },
];

const SocialMediaIcons: React.FC = () => {
  const iconsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    iconsRef.current.forEach((icon, index) => {
      if (icon) {
        // Add hover animations using GSAP
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, { scale: 1.2, duration: 0.1, ease: "power2.out" });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, { scale: 1, duration: 0.1, ease: "power2.out" });
        });
      }
    });
  }, []);

  return (
    <div className="absolute -bottom-10 left-6 transform -translate-y-1/2 flex flex-col space-y-2">
      {socialMediaLinks.map((social, index) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => {
            if (el) iconsRef.current[index] = el;
          }}
          className="flex items-center justify-center w-12 h-12 transition relative"
        >
          <Image
            src={social.icon}
            alt={`${social.name} Icon`}
            width={32}
            height={32}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
