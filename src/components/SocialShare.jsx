import React from "react";
import { assets } from "../assets/assets";

const SocialShare = () => {
  return (
    <div className="social-sharing   w-full border-black flex flex-col items-center gap-1 relative md:top-20 top-0  z-50">
      <div className="linksContainer gap-2 flex justify-center">
      <a href="http://youtube.com"target="_blank">
        <img className="h-10 hover:translate-y-1 transition-all ease-in duration-150 cursor-pointer" src={assets.facebook} alt="" />
      </a>
     
      <a href="http://youtube.com"target="_blank">
        <img className="h-10 hover:translate-y-1 transition-all ease-in duration-150 cursor-pointer" src={assets.Instagram} alt="" />
      </a>
     
      <a href="http://youtube.com"target="_blank">
        <img className="h-10 hover:translate-y-1 transition-all ease-in duration-150 cursor-pointer" src={assets.x_logo} alt="" />
      </a>
      <a href="http://youtube.com"target="_blank">
        <img className="h-10 hover:translate-y-1   hover:border-teal-300 transition-all ease-in duration-150 cursor-pointer" src={assets.Tiktok} alt="" />
      </a>
      </div>
      <div className="terms_service text-xs flex  underline gap-4 ">
      <a href="">Terms and Services</a>
      <a href="">Privacy Policy</a>
    </div>
    </div>
  );
};

export default SocialShare;
