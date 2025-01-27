import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SocialShare = () => {
  const { t } = useTranslation();
  return (
    <div className="social-sharing h-20 w-full  bg-white flex flex-col  items-center gap-1">
      <div className="linksContainer gap-2 flex justify-center">
        {/* facebook share */}
        <a href="https://www.facebook.com/Infeelit.en/" target="_blank">
          <img
            className="h-8 md:h-10 hover:translate-y-1 transition-all ease-in duration-150 cursor-pointer"
            src={assets.facebook}
            alt=""
          />
        </a>
        {/* instagram share */}
        <a href="https://www.instagram.com/infeelit" target="_blank">
          <img
            className=" h-8 md:h-10 hover:translate-y-1 transition-all ease-in duration-150 cursor-pointer"
            src={assets.Instagram}
            alt=""
          />
        </a>
        {/* Twitter share */}
        <a href="https://x.com/infeelit_en" target="_blank">
          <img
            className="h-8 md:h-10 hover:translate-y-1 transition-all ease-in duration-150 cursor-pointer"
            src={assets.x_logo}
            alt=""
          />
        </a>

        {/* tiktok share */}
        <a
          href="https://www.tiktok.com/@infeelit?_t=8oJwvtnkUJF&_r=1"
          target="_blank"
        >
          <img
            className="h-8 md:h-10 hover:translate-y-1   hover:border-teal-300 transition-all ease-in duration-150 cursor-pointer"
            src={assets.Tiktok}
            alt=""
          />
        </a>
      </div>
      <div className="terms_service text-xs flex  underline gap-4 ">
        <Link to="/termsAndService">{t("terms")}</Link>
        <Link to="/privacyPolicy">{t("privacy")}</Link>
      </div>
    </div>
  );
};

export default SocialShare;
