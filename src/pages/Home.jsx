import React from "react";
import Navbar from "../components/Navbar";
import BottomComponent from "../components/BottomComponent";
import MobileSection from "../components/MobileSection";
import HeroSection from "@/components/HeroSection";
import SocialShare from "@/components/SocialShare";



const Home = () => {
  

  
  

  return (
  
      <div className="mainHomePage min-w-80 md:h-screen w-full bg-[url('./assets/blue_circles-min.png')] bg-[length:60rem]  bg-top md:bg-top bg-no-repeat bg-[#001C3C] md:bg-transparent  relative">
        <div className="navbarAndHeroSection md:bg-[url('./assets/blue_circles-min.png')] md:bg-[length:60rem]   md:bg-top md:bg-no-repeat md:bg-[#001C3C] ">
        <Navbar  />
        <HeroSection />
        </div>
        <div className="mobile flex justify-center h-full md:h-auto ">
          <MobileSection  />
        </div>

        <BottomComponent />
        <div className="homeSocialContainer  hidden md:flex justify-center w-full">
        <SocialShare/>
        </div>
       
      </div>
   
  );
};

export default Home;
