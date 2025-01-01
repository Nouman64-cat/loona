import React from "react";
import AllProducts from "./AllProducts";
import Navbar from "../components/navbar/Navbar";
import MobileHero from "../components/mobile/MobileHero";
import MobileNav from "../components/navbar/MobileNav";

const Page = () => {
  return (
    <div>
      {/* Navbar for Desktop */}
      <div className="hidden lg:block">
        <Navbar />
      </div>

      {/* MobileNav for Mobile */}
      <div className="block lg:hidden">
        <MobileNav />
      </div>

      {/* Content */}
      <AllProducts />
    </div>
  );
};

export default Page;
