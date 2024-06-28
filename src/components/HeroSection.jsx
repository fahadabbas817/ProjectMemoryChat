import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";

import { useTranslation } from "react-i18next";


  
const HeroSection = () => {
  const {t} = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroText = t("heroText",{returnObjects: true})
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroText.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

 

  

  return (
    <>
      <div className="heroSection-container h-16   md:h-60 md:mt-4 md:py-4 flex justify-between">
        <div className="heroText md:mx-0 md:ml-2 w-96 md:w-[25%]   mx-auto mt-2 md:text-left text-base  text-center  lg:w-80 xl:w-1/3  md:text-sm lg:text-lg xl:text-xl font-bold">
          <p className="text-white">
            <span className="bg-gradient-to-r from-[#FBD701] via-yellow-400 to-[#FF7D03] text-transparent bg-clip-text">
              {heroText[currentIndex]}
            </span>
          </p>
        </div>
        <div className="body-graphics hidden md:block  mr-8 xl:mr-20">
          <img
            className="h-10 lg:h-20 mb-4  "
            src={assets.Message_image}
            alt=""
          />
          <img
            className="h-10 lg:h-20 ml-20   "
            src={assets.Message_image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
