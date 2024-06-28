import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Loader from './Loader'
import { z } from 'zod'
import { toast } from 'sonner'
import { account } from '@/config/appwriteConfig'
import { ID } from 'appwrite'

const CaptureEmail = () => {

    const [earlyAccessEmail, setEarlyAccessEmail] = useState("")
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const {t} = useTranslation();
    const emailSchema = z.string().trim().email("Enter Valid Email Please");

    
  const magicUrlLogin = async (userEmail) => {
    try {
      setLoading(true)
      const token = await account.createMagicURLToken(
        ID.unique(),
        userEmail,
        "https://project-memory-chat.vercel.app"
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
    setEarlyAccessEmail("")
  };
 
 
  

  return (
    <div className="EarlyAccessBtn   flex justify-between  text-sm text-black  bg-gradient-to-tr from-[#F27104]  to-[#FFCB18] w-full px-5  py-1  rounded-2xl cursor-pointer mx-auto shadow-xl hover:px-4 hover:ring-2 hover:ring-slate-900 transition-all ease-in duration-200">
                
    <div className="earlyAccesText mt-2 text-black">
      <p className=" launchDate font-bold text-white">{t("coming")}</p>
      <p className="summer2024 text-white font-bold">{`"${t("summer2024")}"`}</p>
    </div>
    <div className="getEarlyEmailSection w-1/2 text-center flex flex-col items-center text-xs gap-1  ">
      <input
        type="email"
        value={earlyAccessEmail}
        onKeyDown={(e)=>{
          if(e.key==="Enter"){
            handleDirectUrlLogin(e)
          }
        }}
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
        className="text center disabled:cursor-not-allowed w-max bg-[#1896B0] text-white rounded-3xl mt-[-4px] px-1 py-1 hover:bg-blue-700 transition-all duration-500"
      >
        {loading?<Loader/>:t("getEarlyAccess")}
      </button>
    </div>
  </div>
  )
}

export default CaptureEmail