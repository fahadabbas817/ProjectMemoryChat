
import React, { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { ChatContext } from "../Context/ChatContext";
import SocialShare from "./SocialShare";
import Loader from "./Loader";
import CountDown from "./CountDown";
import { account } from "@/config/appwriteConfig";
import { ID } from "appwrite";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/Context/AppWriteContext";
import { toast } from "sonner";
import {z} from "zod"
const MobileSection = () => {
  const { t } = useTranslation();
  const { selectedlanguage, pageLanguage, setPageLanguage} =
  useContext(ChatContext);
  
  const {user,setUser,checkUserStatus} = useAuth()
  
  const [loading,setLoading] = useState(false)
  const [result, setResult] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [showImage, setshowImage] = useState(false);
  const [earlyAccessEmail, setEarlyAccessEmail] = useState("");
  const [prompt, setPrompt] = useState("");
  const [errors, setErrors] = useState(null);
 
  const emailSchema = z.string().trim().email("Enter Valid Email Please");

 useEffect(()=>{
  UrlSlugLogin();
 },[])
 

  const magicUrlLogin = async (userEmail) => {
    try {
      setLoading(true)
      const token = await account.createMagicURLToken(
        ID.unique(),
        userEmail,
        "http://localhost:5173"
      );
      if(token){
        toast.success("Sign In link sent",{
          description:`A SignIn Link has been sent to your provided email address Click on that link to sign Up to infeelit`
        })
        
      }
    } catch (error) {
      console.log(error);
      setErrors(error);
      toast.error(error.message,{duration:5000})
    }finally{
      setLoading(false)
    }
  };

  const UrlSlugLogin = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const secret = urlParams.get("secret");
      const userId = urlParams.get("userId");
      if(secret && userId){
      await account.createSession(userId, secret);
      console.log("URlslug is working fine")
    }
    } catch (error) {
      console.log(error);
      setErrors(error);
    }
  };

  const directEmailLogin = async (userEmail) => {
    try {
      setLoading(true)
      const emailCheck = emailSchema.safeParse(userEmail);
      if(emailCheck.success){
        await magicUrlLogin(userEmail);

      }else{
        const formattedErrors = emailCheck.error.format();
        setErrors(formattedErrors)
        console.log(errors)
        setLoading(false)
      }
          } catch (error) {
      console.log(error);
      setErrors(error);
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  };
  const handleDirectUrlLogin = async (e) => {
    e.preventDefault();
    directEmailLogin(earlyAccessEmail);
  };
 
 
  



  return (
    <>
      <div className="main h-full md:h-[41rem] min-w-80  w-full md:max-w-96 max-h-[50rem]  md:absolute  md:w-[46rem] top-32 relative   md:top-2 md:border-8 flex  flex-col z-10 md:justify-end md:rounded-[3rem]    md:border-[#1D2A3F] md:outline md:outline-1 md:outline-offset-0 md:outline-white md:shadow-inner md:shadow-[#ffffffc1] md:overflow-hidden">
        <div className="content md:h-2/3 h-2/4  md:rounded-b-3xl bg-white flex flex-col  items-center md:justify-end  top-0 md:top-0   ">
          <div
            
            className="chatbot-chat  w-full bg-white md:rounded-b-3xl  py-1"
          >
            <div className="constantMobilePart mx-2">
              {/* mt-[-14vh] lg:mt-[-11rem] */}
              <div className="logoimage flex justify-center mt-[-8rem] lg:mt-[-11rem]    z-30">
                <img
                  className="h-48 md:h-52 xl:h-60 "
                  src={assets.Infeelit_image}
                  alt=""
                />
              </div>
              <div className="greetText my-2  text-xs  justify-center">
                <p className="font-bold text-xs text-center">
                  {/* {pageLanguage.infeelitIntoText} */}
                  {t("infeelitIntoText")}
                </p>
              </div>

              <div className=" md:hidden youtube-thumbnails  flex mx-auto justify-center gap-8 my-1  ">
                <a href={t("leftImgLink") } target="_blank"><img className="h-14 rounded-md" src={t("leftimg")} alt="" /></a>
                <a href={t("leftImgLink") } target="_blank"><img className="h-14 rounded-md" src={t("rightimg")} alt="" /></a>
              </div>
              {prevPrompt.length !== 0 && (
                <div className="EarlyAccessBtn  flex justify-between  text-sm text-black  bg-gradient-to-tr from-[#F27104]  to-[#FFCB18]   w-full px-5  py-1 my-2  rounded-2xl cursor-pointer mx-auto shadow-xl hover:px-4 hover:ring-2 hover:ring-slate-900 transition-all ease-in duration-200">
                  <div className="earlyAccesText text-black">
                    <p className="font-bold ">{t("coming")}</p>
                    <CountDown />
                  </div>
                  <div className="getEarlyEmailSection text-center flex flex-col items-center text-xs gap-1  ">
                    <input
                      type="email"
                      placeholder={t("enterEmail")}
                      className="w-full border-2 border-gray-200  rounded-3xl px-2 py-1  outline-none focus:border-[#1896B0]"
                    />
                    
                    <button
                      onClick={(e) => handleDirectUrlLogin(e)}
                      className="text center w-max bg-[#1896B0] text-white rounded-3xl  px-1 py-1 hover:bg-blue-700 transition-all duration-500"
                    >
                      {t("getEarlyAccess")}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {prevPrompt.length === 0 && (
              <div className="  related-Topics px-2">
                <div className="earlyAccessTopText text-center text-xs  text-[#1896B0] font-bold my-4">
                  <p>{t("joinNow")}</p>
                </div>
                <div className="EarlyAccessBtn   flex justify-between  text-sm text-black  bg-gradient-to-tr from-[#F27104]  to-[#FFCB18]   w-full px-5  py-1  rounded-2xl cursor-pointer mx-auto shadow-xl hover:px-4 hover:ring-2 hover:ring-slate-900 transition-all ease-in duration-200">
                  <div className="earlyAccesText text-black">
                    <p className="font-bold ">{t("coming")}</p>
                    <CountDown />
                  </div>
                  <div className="getEarlyEmailSection text-center flex flex-col items-center text-xs gap-1  ">
                    <input
                      type="email"
                      onChange={(e) =>{ setEarlyAccessEmail(e.target.value)
                        setErrors({})
                      }}
                      placeholder={t("enterEmail")}
                      
                      className={`w-full border-2 border-gray-200  rounded-3xl px-2 py-1 outline-none focus:border-[#1896B0]`}
                    />
                     {errors? <p className="text-red-700 text-xs">{errors._errors}</p>:null}
                    <button
                      onClick={(e) => handleDirectUrlLogin(e)}
                      disabled={loading}
                      className="text center disabled:cursor-not-allowed w-max bg-[#1896B0] text-white rounded-3xl  px-1 py-1 hover:bg-blue-700 transition-all duration-500"
                    >
                      {loading?<Loader size="6" />:t("getEarlyAccess")}
                    </button>
                  </div>
                </div>

                <div className="earlyaccessbottomText text-xs font-bold my-8 text-center  ">
                  <p className="text-center">{t("meanwhileShare")}</p>
                </div>
              </div>
            )}

            <div className="prompt-box mx-auto my-4  border-4 h-12 border-[#001C3C] w-96 md:w-72 focus-within:border-[#1896B0] focus-within:w-80 transition-all duration-200 ease-in flex items-center justify-between rounded-3xl ">
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
