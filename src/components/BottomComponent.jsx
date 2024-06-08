import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";

import { ChatContext } from "../Context/ChatContext";
import {pageData} from '../assets/clientData'


const BottomComponent = () => {

  const {selectedlanguage, pageLanguage, setselectedLanguage,featureRef,setPageLanguage} = useContext(ChatContext)
 
  
  
  
 

  useEffect(()=>{
    const languageChanger=()=>{
      const currentLanguage = pageData.find(lang => lang.lang === selectedlanguage)
      setPageLanguage(currentLanguage)
    }
    languageChanger();  
  },[selectedlanguage])

  return (
    <div className="bottomComponent md:h-[56%] hidden w-full relative z-0 bg-white md:flex flex-col">
      <div ref={featureRef} className="youtube-videos md:flex hidden lg:flex-row gap-8 lg:gap-0  md:mb-0 mb-64 mt-24  :my-0 justify-between border-2 border-red-600  items-center ">
        <div className="first-vid  lg:w-72 xl:w-80 lg:mx-8 xl:mx-20 w-52 2xl:w-96 2xl:mx-6 border-2 border-b-slate-500 flex flex-col items-start cursor-pointer">
         <a href='https://www.facebook.com'  ><img src={assets.thumbnail1} alt="" /></a>
          
        </div>
        <div className="second  w-52 lg:w-72 xl:w-80 xl:mx-20 2xl:w-96 2xl:mx-6  lg:mx-8 border-2 border-b-slate-500 flex flex-col cursor-pointer  ">
          <img src={assets.thumbnail2} alt="" />
          
        </div>
      
      </div>


        
     
    </div>

  );
};

export default BottomComponent;
