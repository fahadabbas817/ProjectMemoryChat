import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import BottomComponent from "../components/BottomComponent";
import MobileSection from "../components/MobileSection";
import HeroSection from "@/components/HeroSection";
import SocialShare from "@/components/SocialShare";
import { useAuth } from "@/Context/AppWriteContext";
import { toast } from "sonner";
import { account } from "@/config/appwriteConfig";
const Home = () => {
  const {checkUserStatus,user,setUser}=useAuth()

  const userChecker=async()=>{
    await checkUserStatus();
  }
  const UrlSlugLogin = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const secret = urlParams.get("secret");
      const userId = urlParams.get("userId");
      if(secret && userId){
      let accountDetails = await account.createSession(userId, secret);
      console.log(accountDetails)
      if(accountDetails){
      toast.success("Welcome",{description:"Thanks for logging to our website share your prestigious memories now",duration:2000})
        
          }
        setUser(accountDetails)
    }
    
    } catch (error) {
      console.log(error);
      
    }
  };
  useEffect(()=>{
    UrlSlugLogin()
    userChecker();
  },[])
  // useEffect(()=>{
  //   if(user){
  //   setUser(user)
  //   toast.success(`Welcome ${user.name?user.name:""}`,{description:"Welcome to infeelit, Here you can Share you most prestegious memories"})
  //   console.log(user)}
  // },[user])

  return (
  
      <div className="mainHomePage min-w-80 md:h-screen w-full bg-[url('./assets/blue_circles-min.png')] bg-[length:60rem]  bg-top md:bg-top bg-no-repeat bg-[#001C3C] md:bg-transparent  relative">
        <div className="navbarAndHeroSection md:bg-[url('./assets/blue_circles-min.png')] md:bg-[length:60rem]   md:bg-top md:bg-no-repeat md:bg-[#001C3C] ">
        <Navbar user={user} />
        <HeroSection />
        </div>
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
