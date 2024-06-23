import React, { useEffect, useState } from "react";

import { z } from "zod";
import { useAuth } from "@/Context/AppWriteContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { PulseLoader } from "react-spinners";
const Login = () => {
  const {
    user,
    setUser,
    loading,
    setLoading,
    loginUser,
    logoutUser,
    registerUser,
    checkUserStatus,
  } = useAuth();
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });
  const [toggleshow, setToggleshow] = useState(false);
  const [errors, setErrors] = useState({});
  useState
  const navigate = useNavigate();

  const loginSchema = z.object({
    email: z
      .string()
      .email("Invalid Email Address")
      .min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });
  console.log(user)
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = loginSchema.safeParse(logindata);
    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors(formattedErrors);
      setLoading(false);
    } else {
      setErrors({});
      try{
      await loginUser(logindata);
      setLoading(false);}
      catch(error){
        console.log(error)
        setLoading(false)
      }
      
    }
  };

  useEffect(() => {
    checkUserStatus();
  }, []);
  useEffect(() => {
    setLoading(true);
    if (user) {
      console.log("User to mil rha hy ab", user);
      toast.success(`"Thanks for logging in" ${user.name}`,{duration:2000})
      setTimeout(()=>navigate("/ "),2000);
    
    }
    setLoading(false);
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E3F2F2] transition before:opacity-50  animate-in opacity-100">
      {/* <!-- login form --> */}
      
      
        <div className=" bg-white p-16 rounded shadow-[#1896B0] shadow-2xl w-2/3">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">LOGIN</h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-bold text-gray-500">
                Email
              </label>
              <input
                onChange={(e) => {
                  setLogindata({ ...logindata, email: e.target.value });
                  setErrors({});
                }}
                type="email"
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </div>
            {errors.email && (
              <p
                className={
                  logindata.email === "" ? "hidden" : `text-xs text-red-600`
                }
              >
                {errors.email._errors[0]}
              </p>
            )}
            <div>
              <label className="block mb-1 font-bold text-gray-500">
                Password
              </label>
              <div className="passwordInputFiledLogin flex justify-between w-full border-2 border-gray-200 p-3 rounded outline-none focus-within:border-blue-500">
              <input
                onChange={(e) => {
                  setLogindata({ ...logindata, password: e.target.value });
                }}
                type={toggleshow?"text":"password"}
                className="outline-none w-3/4"
              />
              <button onClick={(e)=>{
                e.preventDefault();
                setToggleshow(!toggleshow)
              }}>{toggleshow?"Hide":"Show"}</button>
              </div>
            </div>
            {errors.password && (
              <p
                className={
                  logindata.password === "" ? "hidden" : `text-xs text-red-600`
                }
              >
                {errors.password._errors[0]}
              </p>
            )}

            <button
              onClick={(e) => handleLogin(e)}
              disabled={loading}
              className="block w-full disabled:cursor-not-allowed bg-gradient-to-tr from-[#F27104]  to-[#FFCB18] hover:bg-yellow-300 p-4 rounded hover:translate-y-1 hover:text-lg transition-all duration-300 ease-in cursor-pointer "
            >
              {loading ? <PulseLoader/> : <p>Login</p>}
            </button>
          </form>
        </div>
     
    </div>
  );
};

export default Login;
