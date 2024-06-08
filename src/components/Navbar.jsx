import React, { useContext, useState,useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { ChatContext } from "../Context/ChatContext";
import autoAnimate from "@formkit/auto-animate";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { selectedlanguage, setselectedLanguage } = useContext(ChatContext);
  const [toggleSelection, setToggleSelection] = useState(false);
  const [languages, setsLanguages] = useState([
    "English",
    "Español",
    "العربية",
    "中文",
    "Português",
    "हिन्दी",
    "Русский",
    "Italiano",
    "Français",
  ]);
  const [toggleAuthenticate, setToggleAuthenticate] = useState(false)

  const authenticateElements = ['Login','Signup']
  

  const parent = useRef(null)

  const navigate = useNavigate();

  useEffect(()=>{
      parent.current && autoAnimate(parent.current)
  },[toggleSelection])


  const handleLanguageSelection = (language) => {
    setselectedLanguage(language);
    setToggleSelection(!toggleSelection);
  };

  return (
    <div ref={parent} className="Navbar w-full flex items-center justify-between  py-2  bg-transparent relative z-50">
      <div className="Nav-left flex gap-16 mx-3 items-center ">
        <img className="h-12 md:h-16 mx-3 md:mx-5 " src={assets.Logo} alt="" />
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
      <div  ref={parent} className="nav-right items-center gap-8 flex mr-6 md:mx-12 ">
        <div   className="flag-dropdown  relative flex  gap-1 cursor-pointer text-white transition-all duration-200 ease-in ">
          <div
            
            onClick={() => {
              setToggleSelection(!toggleSelection);
            }}
            className="selected-language flex items-center gap-2 transition-all duration-200 ease-in relative"
          >
            <img className="h-4" src={assets.globe} alt="" />
            <p>{selectedlanguage}</p>
            <img className="h-1" src={assets.drop_down} alt="" />
          </div>

          <div
          // ref={parent}            
            className={`language-select ${
              toggleSelection ? "flex" : "hidden"
            }   bg-white text-black absolute top-7 z-40 border-white border py-2 transition duration-200 ease-in  flex-col items-center  w-32 rounded-xl shadow-2xl shadow-teal-400`}
          >
            {languages.map((items) => {
              return (
                <div
                 
                  onClick={() => handleLanguageSelection(items)}
                  key={items}
                  className="language-list cursor-pointer  px-4 transition-all duration-100 ease-in  hover:bg-[#1D2A3F] hover:text-white w-full"
                >
                  <p>{items}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="authenticateButtons md:flex gap-4 hidden ">
        <button onClick={()=>navigate('/login')} className=" flex items-center  bg-gradient-to-r from-[#449395] to-[#73F7FB] font-bold text-sm text-[#001C3C] py-2 px-6 rounded-3xl hover:ring-2  hover:ring-slate-100 transition ease-in duration-150  ">
          Login
        </button>
        <button onClick={()=>navigate('/signup')} className=" md:flex items-center  hidden  text-[#001C3C] bg-gradient-to-r from-[#449395] to-[#73F7FB] text-center text-sm font-bold py-2 px-8 rounded-3xl hover:ring-2  hover:ring-slate-100 transition ease-in duration-150">
          Sign Up
        </button>
        </div>
        <div
         onClick={()=>setToggleAuthenticate(!toggleAuthenticate)}
          className="menu block md:hidden cursor-pointer hover:bg-blue-900 rounded-3xl py-2 px-2 transition duration-500 ease-in   ">
          <img src={assets.Menu}  alt="" />
          {toggleAuthenticate &&
            <div className="authenticate-scroll  bg-white text-black absolute top-12 right-8 z-40 border-white border  flex-col items-center py-2  w-20 rounded-xl shadow-2xl shadow-teal-400">
              {authenticateElements.map((item,i)=>{
                return (
                  <div 
                   key={i}
                   
                   className="authDropDowncursor-pointer  px-4 transition-all duration-100 ease-in  hover:bg-[#1D2A3F] hover:text-white w-full ">
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
