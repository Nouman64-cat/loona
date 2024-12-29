import Image from "next/image";
import React from "react";
import hero from "@/public/loona-hero-image.svg";
import { RiShoppingBagLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";


const Hero: React.FC = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center ">
      {/* Background Icon */}
      <div className="inset-0 flex items-center justify-center">
      <Image
        src={hero}
        alt="Jacket"
        className="w-auto h-[70vh] object-contain opacity-100"
        priority
      />
    </div>
    </div>
  );
};

export default Hero;
