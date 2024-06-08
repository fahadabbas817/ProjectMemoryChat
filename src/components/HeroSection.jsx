import React, { useContext, useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import { Typewriter } from "react-simple-typewriter";
import { ChatContext } from "@/Context/ChatContext";
import { pageData } from "@/assets/clientData";
import Loader from "./Loader";

const HeroSection = () => {
  const {
    selectedlanguage,
    pageLanguage,
    setPageLanguage,
    loading,
    setLoading,
  } = useContext(ChatContext);

  useEffect(() => {
    const languageChanger = () => {
      setLoading(true)
      const currentLanguage = pageData.find(
        (lang) => lang.lang === selectedlanguage
      );
      setPageLanguage(currentLanguage);
      setLoading(false)
    };
    
    languageChanger();
    
    
  }, [selectedlanguage]);

  return (
    <>
      <div className="heroSection-container md:h-1/3 md:mt-4 md:py-4 flex border-2 justify-between">
       {!loading? <div className="heroText md:mx-0 md:ml-2 w-full md:w-[25%]   mx-auto mt-2 md:text-left  text-center text-xl lg:w-1/3   md:text-2xl lg:text-3xl font-bold">
          <p className="text-white ">
            <span className="bg-gradient-to-r from-[#FBD701] via-yellow-400 to-[#FF7D03]  text-transparent bg-clip-text">
              <Typewriter
                words={pageLanguage.heroText}
                loop={false}
                cursor
                cursorStyle=" | "
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={2000}
              />
            </span>
          </p>
        </div>: <Loader/>}
        <div className="body-graphics hidden md:block  mr-8 xl:mr-20    border-2 border-red-600  ">
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
