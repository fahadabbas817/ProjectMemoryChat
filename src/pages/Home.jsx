import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import BottomComponent from "../components/BottomComponent";
import MobileSection from "../components/MobileSection";
import HeroSection from "@/components/HeroSection";
import SocialShare from "@/components/SocialShare";

const Home = () => {
  return (
  
      <div className="main h-screen bg-[url('./assets/blue_circles.png')] relative  bg-[length:64rem]  bg-top md:bg-center bg-no-repeat bg-[#001C3C]  ">
        <Navbar />
        
        <HeroSection />
        <div className="mobile flex justify-center border-2">
          <MobileSection />
          {/* <SocialShare/> */}
        </div>

        <BottomComponent />
       
      </div>
   
  );
};

export default Home;
