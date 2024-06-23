import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import BottomComponent from "../components/BottomComponent";
import MobileSection from "../components/MobileSection";
import HeroSection from "@/components/HeroSection";
import SocialShare from "@/components/SocialShare";
import { useAuth } from "@/Context/AppWriteContext";
import { toast } from "sonner";
const Home = () => {
  const {checkUserStatus,user,setUser}=useAuth()
  const userChecker=async()=>{
    await checkUserStatus();
  }
  useEffect(()=>{
    userChecker();
  },[])
  useEffect(()=>{
    if(user){
    setUser(user)
    toast.success(`Welcome ${user.name}`,{description:"Welcome to infeelit, Here you can Share you most prestegious memories"})
    console.log(user)}
  },[user])
  return (
  // bg-[url('./assets/blue_circles-min.png')] relative  bg-[length:60rem]  bg-top md:bg-top bg-no-repeat bg-[#001C3C]   
      <div className="mainHomePage md:h-screen w-full bg-[url('./assets/blue_circles-min.png')] relative  bg-[length:60rem]  bg-top md:bg-top bg-no-repeat bg-[#001C3C]">
        <Navbar user={user} />
        <HeroSection />
        <div className="mobile flex justify-center h-full md:h-auto ">
          <MobileSection user={user} />
        </div>

        <BottomComponent />
        <div className="homeSocialContainer  hidden md:flex justify-center w-full">
        <SocialShare/>
        </div>
       
      </div>
   
  );
};

export default Home;
