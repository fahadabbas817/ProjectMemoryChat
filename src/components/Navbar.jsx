import React, { useContext, useState,useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { ChatContext } from "../Context/ChatContext";

import { useNavigate } from "react-router-dom";
import { useAuth } from "@/Context/AppWriteContext";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

const Navbar = ({user}) => {
  const {t,i18n} = useTranslation();
  const { selectedlanguage, setselectedLanguage } = useContext(ChatContext);
  
  const [toggleSelection, setToggleSelection] = useState(false);
  const {logoutUser} = useAuth();
  const [languages, setsLanguages] = useState([
    { code: "en", lang: "English" },
    { code: "fr", lang: "Français" },
    { code: "hi", lang: "हिन्दी" },
    { code: "es", lang: "Español" },
    { code: "ar", lang: "العربية" },
    { code: "zh", lang: "中文" },
    { code: "pt", lang: "Português" },
    { code: "ru", lang: "Русский" },
    { code: "it", lang: "Italiano" },
  ]);
  const [toggleAuthenticate, setToggleAuthenticate] = useState(false)

  const authenticateElements = ['Login','SignUp']
  
  


  const navigate = useNavigate();

  const handleLogoutBtn =()=>{
    toast.warning("Are you Sure",{
      description:"Do you want to logout all your data will be lost",
      action:{
        label:"Logout",
        onClick:()=> logoutUser()
      }
    })
  }

  
 


  const handleLanguageSelection = (language) => {
    i18n.changeLanguage(language.code)
    setselectedLanguage(language.lang)
    toast.success(`${language.lang} selected `,{
      description:"Language changed successfully",
      duration:5000,
    })
    setToggleSelection(!toggleSelection);
  };

  return (
    <div  className="Navbar w-full flex items-center justify-between  py-2  bg-transparent relative z-50">
      <div className="Nav-left flex gap-16 mx-3 items-center ">
        <img className="h-10 md:h-16 mx-3 md:mx-5 " src={assets.Logo} alt="" />
        <div className="links hidden">
          <ul className="flex gap-3 text-xs text-white font-mono">
            <li>
              <a href="/chat">ChatGPT</a>
            </li>
            <li>
              <a href="/dalle">DALLE</a>
            </li>
          </ul>
        </div>
      </div>
      <div  className="nav-right items-center gap-8 flex mr-6 md:mx-12 ">
        <div   className="flag-dropdown  relative flex  gap-1 cursor-pointer text-white transition-all duration-200 ease-in ">
          <div
            
            onClick={() => {
              setToggleSelection(!toggleSelection);
              
            }}
            className="selected-language text-sm md:text-base flex items-center gap-2 transition-all duration-200 ease-in relative"
          >
            <img className="h-4" src={assets.globe} alt="" />
            <p>{t("lang")}</p>
            <img className="h-1" src={assets.drop_down} alt="" />
          </div>

          <div
          // ref={parent}            
            className={`language-select ${
              toggleSelection ? "flex " : "hidden"
            }   bg-white text-black absolute top-7 z-40 border-white border py-2 translate-y-2  animate-in duration-300 ease-in-out  flex-col items-center  w-32 rounded-xl shadow-2xl shadow-teal-400`} 
          >
            {languages.map((items) => {
              return (
                <div
                  onClick={() => handleLanguageSelection(items)}
                  key={items.code}
                  className="language-list cursor-pointer  px-4 transition-all duration-100 ease-in  hover:bg-[#1D2A3F] hover:text-white w-full"
                >
                  <p>{items.lang}</p>
                </div>
              );
            })}
          </div>
        </div>
        { !user ? <div className="authenticateButtons md:flex gap-4 hidden ">
        
        <button onClick={()=>navigate('/login')} className=" flex items-center  bg-gradient-to-r from-[#449395] to-[#73F7FB] font-bold text-sm text-[#001C3C] py-2 px-6 rounded-3xl hover:ring-2  hover:ring-slate-100 transition ease-in duration-150  ">
          Login
        </button>
        <button onClick={()=>navigate('/signup')} className=" md:flex items-center  hidden  text-[#001C3C] bg-gradient-to-r from-[#449395] to-[#73F7FB] text-center text-sm font-bold py-2 px-8 rounded-3xl hover:ring-2  hover:ring-slate-100 transition ease-in duration-150">
          Sign Up
        </button> 
        </div>: 
          <div className="logoutbtn">
            <button onClick={handleLogoutBtn} className=" md:flex items-center  hidden  text-[#001C3C] bg-gradient-to-r from-[#449395] to-[#73F7FB] text-center text-sm font-bold py-2 px-8 rounded-3xl hover:ring-2  hover:ring-slate-100 transition ease-in duration-150">
          Logout
        </button> 
          </div>
        }
        <div
         onClick={()=>setToggleAuthenticate(!toggleAuthenticate)}
          className="menu block md:hidden cursor-pointer  rounded-3xl py-2 px-2 transition duration-500 ease-in   ">
          <img className="h-5 md:h-6" src={assets.Menu}  alt="" />
          {toggleAuthenticate &&
            <div  className="authenticate-scroll  bg-white text-black absolute top-12 right-8 z-40 border-white border  flex-col items-center py-2  h-20 translate-x-4 animate-in w-20 rounded-xl shadow-2xl shadow-teal-400">
              {authenticateElements.map((item,i)=>{
                return (
                  <div 
                   key={i}
                   
                   className="authDropDowncursor-pointer  px-4 transition-all duration-100 ease-in  hover:bg-[#1D2A3F] hover:text-white w-full rounded-md text-sm ">
                    {item}
                    
                  </div>
                  
                )
                  
              })}
          </div>}
        </div> 
      </div>

    </div>
  );
};

export default Navbar;
