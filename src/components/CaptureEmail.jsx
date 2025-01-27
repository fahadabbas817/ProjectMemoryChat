import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";
import { z } from "zod";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "./ChatContext";
const CaptureEmail = () => {
  const { earlyAccessEmail, setEarlyAccessEmail } = useContext(ChatContext);

  useEffect(() => {
    setEarlyAccessEmail("");
  }, []);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const emailSchema = z.string().trim().email("Enter Valid Email Please");
  const navigate = useNavigate();

  const handleDirectUrlLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const emailCheck = emailSchema.safeParse(earlyAccessEmail);
    if (emailCheck.success) {
      toast.success("Redirecting to Registeraton Form", { duration: 1000 });

      setTimeout(() => navigate(`/register`), 2000);

      setLoading(false);
    } else {
      const formattedErrors = emailCheck.error.format();
      setErrors(formattedErrors);

      setLoading(false);
    }
  };

  return (
    <div className="EarlyAccessBtn   flex justify-between  text-sm text-black  bg-gradient-to-tr from-[#F27104]  to-[#FFCB18] w-full px-5  py-1  rounded-2xl cursor-pointer mx-auto shadow-xl hover:px-4 hover:ring-2 hover:ring-slate-900 transition-all ease-in duration-200">
      <div className="earlyAccesText  text-black">
        <p className=" launchDate text-lg font-bold text-white">
          {t("coming")}
        </p>

        <p
          className={`${
            t("lang") === "Español" ? "text-sm sm:text-base" : "text-base"
          }  ${
            t("lang") === "Français" || "Português" || "Italiano" || "Русский"
              ? "text-sm sm:text-base"
              : "text-base"
          } summer2024 text-white   font-bold`}
        >{`"${t("summer2024")}"`}</p>
      </div>
      <div className="getEarlyEmailSection w-1/2 text-center flex flex-col items-center text-xs gap-1  ">
        <input
          type="email"
          value={earlyAccessEmail}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleDirectUrlLogin(e);
            }
          }}
          onChange={(e) => {
            setEarlyAccessEmail(e.target.value);
            setErrors({});
          }}
          placeholder={t("enterEmail")}
          className={`w-full border-2 border-gray-200  rounded-3xl px-2 py-1 outline-none focus:border-[#1896B0]`}
        />
        {errors ? (
          <p className="text-red-700 text-xs">{errors._errors}</p>
        ) : null}
        <button
          onClick={(e) => handleDirectUrlLogin(e)}
          disabled={loading}
          className="text center disabled:cursor-not-allowed w-max bg-[#1896B0] text-white rounded-3xl mt-[-4px] px-1 py-1 hover:bg-blue-700 transition-all duration-500"
        >
          {loading ? <Loader /> : t("getEarlyAccess")}
        </button>
      </div>
    </div>
  );
};

export default CaptureEmail;
