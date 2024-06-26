import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";


const SocialShare = () => {
  
const {t} = useTranslation()
  return (
    // md:top-20 top-6
    <div className="social-sharing h-24 lg:h-60 xl:h-80  w-full  bg-white flex flex-col  items-center gap-1">
      <div className="linksContainer gap-2 flex justify-center">
      <a href="http://youtube.com" target="_blank">
        <img className="h-8 md:h-10 hover:translate-y-1 transition-all ease-in duration-150 cursor-pointer" src={assets.facebook} alt="" />
      </a>
     
      <a href="http://youtube.com"target="_blank">
        <img className=" h-8 md:h-10 hover:translate-y-1 transition-all ease-in duration-150 cursor-pointer" src={assets.Instagram} alt="" />
      </a>
     
      <a href="http://youtube.com"target="_blank">
        <img className="h-8 md:h-10 hover:translate-y-1 transition-all ease-in duration-150 cursor-pointer" src={assets.x_logo} alt="" />
      </a>
      <a href="http://youtube.com"target="_blank">
        <img className="h-8 md:h-10 hover:translate-y-1   hover:border-teal-300 transition-all ease-in duration-150 cursor-pointer" src={assets.Tiktok} alt="" />
      </a>
      </div>
      <div className="terms_service text-xs flex  underline gap-4 ">
      <a href="">{t("terms")}</a>
      <a href="">{t("privacy")}</a>
    </div>
    </div>
  );
};

export default SocialShare;
