import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import ShopnowCTA from "./components/cta/ShopnowCTA";
import SocialMediaIcons from "./components/footer/SocialMediaIcons";
import VerticalText from "./components/footer/VerticalText";
import MobileHero from "./components/mobile/MobileHero";

const page = () => {
  return (
    <div className="h-screen w-full bg-gradient-peach-purple">
      <div className="hidden lg:block">
        <div className="h-screen w-full bg-gradient-peach-purple">
          <Navbar />
          <Hero />
          <ShopnowCTA />
          <SocialMediaIcons />
          <VerticalText />
        </div>
      </div>
      <div className="block lg:hidden">
        <MobileHero />
      </div>
    </div>
    //commit test
    
  );
};

export default page;
