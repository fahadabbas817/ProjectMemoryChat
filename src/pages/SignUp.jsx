import React, { useState } from "react";
import { ID } from "appwrite";
import { account } from "@/config/appwriteConfig";
import { useAuth } from "@/Context/AppWriteContext";
import { z } from "zod";
import { PulseLoader } from "react-spinners";
import {  useNavigate } from "react-router-dom";
import { toast } from "sonner";
const SignUp = () => {
  const { user, loginUser, logoutUser, registerUser } = useAuth();
  const [loading, setLoading] = useState(false)
  const [toggleshow, setToggleshow] = useState(false)
const navigate = useNavigate()
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const signUpSchema = z.object({
    email: z
      .string()
      .email("Invalid Email Address")
      .min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    username: z.string().min(4, "Username must be greater than 4"),
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true)
    const result = signUpSchema.safeParse(signupData);
    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors(formattedErrors);
      setLoading(false)
    } else {
      setErrors({});
      await registerUser(signupData);
      console.log("Form submitted successfully", result.data);
      setLoading(false)
     toast.success("Successfull redirecting you to the main page",{duration:2000})
     setTimeout(()=>navigate("/"),2000) 

    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E3F2F2] transition duration-100 ease-in">
      <div className=" bg-transparent sm:bg-white p-8 sm:p-16 rounded sm:shadow-2xl sm:w-2/3 w-full">
        <h2 className="text-3xl text-center font-bold mb-10 text-gray-800">
          Create Your Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-5">
          <div>
            <label className="block mb-1 font-bold text-gray-500">Name</label>
            <input
              onChange={(e) => {
                setSignupData({ ...signupData, username: e.target.value });
                setErrors({})
              }}
              type="text"
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-500"
            />
          </div>
          {errors.username && <p className={ `text-xs text-red-600`}>{errors.username._errors[0]}</p>}

          <div>
            <label className="block mb-1 font-bold text-gray-500">Email</label>
            <input
              onChange={(e) => {
                setSignupData({ ...signupData, email: e.target.value });
                setErrors({})
              }}
              type="email"
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-500"
            />
          </div>
          {errors.email && <p className={ `text-xs text-red-600`}>{errors.email._errors[0]}</p>}

          <div className="">
            <label className="block mb-1 font-bold text-gray-500">
              Password
            </label>
            <div className="passwordInput flex justify-between w-full border-2 bg-white border-gray-200 p-3 rounded outline-none focus-within:border-blue-500 ">
            <input
              onChange={(e) => {
                setSignupData({ ...signupData, password: e.target.value });
              }}
              type={toggleshow?"password":"text"}
              className="outline-none w-3/4"
            />
            <button
            className="text-sm sm:text-base" 
            onClick={(e)=>{
              e.preventDefault()
              setToggleshow(!toggleshow)}
          }> {toggleshow?"Show":"Hide"} </button>
            </div>
          </div>
          {errors.password && <p className={ `text-xs text-red-600`}>{errors.password._errors[0]}</p>}
          <button
            type="submit"
            disabled={loading}
            className=" w-full disabled:cursor-not-allowed bg-gradient-to-r from-[#F27104]  to-[#FFCB18] hover:bg-yellow-300 p-4 rounded text-black hover:font-bold hover:translate-y-2  transition-all ease-in duration-500"
          >
           {loading ? <PulseLoader /> :"Sign Up"} 
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default SignUp;
