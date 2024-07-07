import React, { useState} from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";


const Navbar = () => {

  const { t, i18n } = useTranslation();
  const [toggleSelection, setToggleSelection] = useState(false);
  const navigate = useNavigate();

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
  

  const handleLanguageSelection = (language) => {

    i18n.changeLanguage(language.code);
    toast.success(`${language.lang} selected `, {
      description: "Language changed successfully",
      duration: 5000,
    });
    setToggleSelection(!toggleSelection);
    
  };

  return (
    <div className="Navbar w-full flex items-center justify-between  py-2  bg-transparent relative z-50">
      <div className="Nav-left flex gap-16 mx-3 items-center ">
        <img className="h-10 md:h-16 mx-3 md:mx-5 " src={assets.Logo} alt="Infeelit" />
      </div>
      <div className="nav-right items-center gap-8 flex md:mr-20 mr-6 md:mx-12 ">
        <div className="flag-dropdown  relative flex  gap-1 cursor-pointer text-white transition-all duration-200 ease-in ">
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
    
          <div className="authenticateButtons flex gap-4  ">
           
            <button
              onClick={() => navigate("/register")}
              className=" flex items-center  text-[#001C3C] bg-gradient-to-r from-[#449395] to-[#73F7FB] text-center text-xs md:text-sm font-bold md:py-2 md:px-8 py-1 px-4 rounded-3xl hover:ring-2  hover:ring-slate-100 transition ease-in duration-150"
            >
              Sign Up
            </button>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
