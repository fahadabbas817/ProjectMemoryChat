import React,{lazy,Suspense} from "react";
import Navbar from "../components/Navbar";
// import BottomComponent from "../components/BottomComponent";
import MobileSection from "../components/MobileSection";
import HeroSection from "@/components/HeroSection";
import SocialShare from "@/components/SocialShare";
import Loader from "@/components/Loader";
const BottomComponent = lazy(()=>import('../components/BottomComponent'))
const Home = () => {
  
  return (
  
      <div className="mainHomePage animate-fadeInTop min-w-80 md:h-screen w-full bg-[url('./assets/blue_circles-min.png')] bg-[length:60rem]  bg-top md:bg-top bg-no-repeat bg-[#001C3C] md:bg-transparent  relative">
        <div className="navbarAndHeroSection md:bg-[url('./assets/blue_circles-min.png')] md:bg-[length:60rem]   md:bg-top md:bg-no-repeat md:bg-[#001C3C] ">
        <Navbar  />
        <HeroSection />
        </div>
        <div className="mobile flex justify-center h-full md:h-auto ">
          <MobileSection  />
        </div>
    <Suspense fallback={<Loader size="10px" color="black" /> }>
        <BottomComponent />
        </Suspense>
        <div className="homeSocialContainer  hidden md:flex justify-center w-full">
        <SocialShare/>
        </div>
       
      </div>
   
  );
};

export default Home;
