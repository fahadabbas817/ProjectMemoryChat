
import React, { useState } from "react";
import { assets } from "../assets/assets";
import SocialShare from "./SocialShare";
import { useTranslation } from "react-i18next";

import CaptureEmail from "./CaptureEmail";
import ChatBotIframe from "./ChatBotIframe";

const MobileSection = () => {
  const { t } = useTranslation();
 const [prompt, setPrompt] = useState("")
 const [toggleChat, settoggleChat] = useState(false)
 const currentLanguageCode = t('code')
 const [loading,setLoading]=useState(false)
 
 

  return (
    <>
      <div className="main h-full md:h-[41rem] min-w-80  w-full md:max-w-96 max-h-[50rem]  md:absolute  md:w-[46rem] top-32 relative   md:top-2 md:border-8 flex  flex-col z-10 md:justify-end md:rounded-[3rem]    md:border-[#1D2A3F] md:outline md:outline-1 md:outline-offset-0 md:outline-white md:shadow-inner md:shadow-[#ffffffc1] md:overflow-hidden">
        <div className="content md:h-2/3 h-2/4  md:rounded-b-3xl bg-white flex flex-col  items-center md:justify-end  top-0 md:top-0   ">
          <div
            
            className="chatbot-chat  w-full bg-white md:rounded-b-3xl  py-1"
          >
            <div className="constantMobilePart mx-2">
             
              <div className="logoimage flex justify-center mt-[-8rem] lg:mt-[-11rem]    z-30">
                <img
                  className="h-48 md:h-52 xl:h-60 "
                  src={assets.Infeelit_image}
                  alt=""
                />
              </div>
              <div
              
               className="greetText md:my-6 lg:my-2 my-1  text-xs  justify-center">
                <p className="font-bold text-xs text-center">

                  {t("infeelitIntoText")}
                </p>
              </div>
              <div
              onClick={()=>settoggleChat(!toggleChat)}
               className={`${!toggleChat && 'hidden'} PresentationLinkTExt text-center cursor-pointer`}>
                <p className="underline text-sm  text-[#1896B0]">{t('presentaionLink')}</p>
              </div>
             
  {/* Chatbot iFrame */}
  <div className={`chatbotIframe ${!toggleChat && "hidden"} `}>
            <ChatBotIframe/>
            </div>
              <div className={`${toggleChat && 'hidden'} md:hidden youtube-thumbnails  flex mx-auto justify-center gap-8 my-1  "`}>
                <a href={t("leftImgLink") } target="_blank"><img className="h-14 rounded-md" src={t("leftimg")} alt="" /></a>
                <a href={t("leftImgLink") } target="_blank"><img className="h-14 rounded-md" src={t("rightimg")} alt="" /></a>
              </div>
      
            </div>

              <div className={`${toggleChat && 'hidden'}mobileTextSection px-2`}>
                <div className={` ${toggleChat && 'hidden'} earlyAccessTopText text-center text-xs  text-[#1896B0] font-bold my-4`}>
                  <p className="">{t("joinNow")}</p>
                </div>
                <div className={`${toggleChat && 'hidden'} captureEmail`}>
                <CaptureEmail/>
                </div>

                <div className={`${toggleChat && 'hidden'} earlyaccessbottomText text-xs font-bold my-6 md:my-8 text-center  "`}>
                  <span className="text-center min-w-80">{t("meanwhileShare")}</span>
                </div>
              </div>

            <div
            onClick={()=>settoggleChat(!toggleChat)}
             className={`${toggleChat && 'hidden'} prompt-box mx-auto my-4  border-4 h-12 border-[#001C3C] w-72 md:w-72 focus-within:border-[#1896B0] focus-within:w-80 transition-all duration-200 ease-in flex items-center justify-between rounded-3xl `}>
              <div className="search ml-3">
                <input
                  className="bg-transparent text-sm outline-none w-52"
                  value={prompt}
                  type="text"
                  placeholder={t("placeholdertext")}
                  name="input"
                  id="input"
                  onChange={(e) => setPrompt(e.target.value)}
                
                />
              </div>
              <div className="searchbar-image flex mr-2 ">
                <img
                  className="h-6 cursor-pointer hover:h-7 transition-all duration-150 ease-in"
                  src={assets.record}
                  alt="record"
                />
                <img
                  className="h-6 cursor-pointer hover:h-7 transition-all duration-150 ease-in"
                  
                  src={assets.send}
                  alt="send"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="socialShareContainer md:hidden">
          <SocialShare />
        </div>
      </div>
    </>
  );
};

export default MobileSection;
