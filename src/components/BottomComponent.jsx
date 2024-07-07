
import React from "react";
import { useTranslation } from "react-i18next";


const BottomComponent = () => {
  
  
  const { t } = useTranslation();


 
  

  return (
    
    <div className="bottomComponent md:h-[21rem]   hidden w-full relative z-0 bg-white md:flex flex-col">
      <div className="youtube-videos md:flex hidden lg:flex-row gap-8 lg:gap-0  md:mb-0 mb-64 mt-24   justify-between  items-center ">
        <div className="first-vid  lg:w-72 xl:w-80 lg:mx-8 xl:mx-20 w-52 2xl:w-96 2xl:mx-6 rounded-xl   flex flex-col items-start cursor-pointer">
          <a href={t("leftImgLink")} target="_blank" >
            <img className="rounded-xl shadow-2xl transition-all hover:translate-y-3 ease-in duration-200" src={t("leftimg")} alt="" />
          </a>
        </div>
        <div className="second  w-52 lg:w-72 xl:w-80 xl:mx-20 2xl:w-96 2xl:mx-6   lg:mx-8  flex flex-col cursor-pointer  ">
          <a href={t("rightImgLink")} target="_blank">
          <img className="rounded-xl shadow-2xl hover:translate-y-3 ease-in duration-200 " src={t("rightimg")} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomComponent;
