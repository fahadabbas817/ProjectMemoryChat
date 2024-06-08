import React, {useEffect, useState} from 'react'
import { account } from '@/config/appwriteConfig'

import { useAuth } from '@/Context/AppWriteContext'

const Login = () => {
    const {user,loginUser,logoutUser,registerUser} = useAuth();
    const [logindata, setLogindata] = useState({
      email:'',
      password:''
    })

    const handleLogin=async(e)=>{
      e.preventDefault();
      loginUser(logindata)
    }

    const handleLogout=async(e)=>{
      e.preventDefault();
      logoutUser();
      console.log(logindata)
    }

  useEffect(()=>{
    console.log(user)
  },[user])


  
     
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400 transition duration-100 ease-in">

    {/* <!-- login form --> */}
    <div className="bg-white p-16 rounded shadow-2xl w-2/3">
  
      <h2 className="text-3xl font-bold mb-10 text-gray-800">LOGIN</h2>
  
      <form className="space-y-5">
  
  
        <div>
          <label className="block mb-1 font-bold text-gray-500">Email</label>
          <input onChange={(e)=>{
              setLogindata({...logindata,email: e.target.value})
          }}  type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
        </div>
  
        <div>
          <label className="block mb-1 font-bold text-gray-500">Password</label>
          <input onChange={(e)=>{
              setLogindata({...logindata,password: e.target.value})
          }} type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
        </div>
  
        <div className="flex items-center">
          <input type="checkbox" id="agree"/>
          <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
        </div>
  
        <button onClick={(e)=>handleLogin(e)} className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Login</button>
        <button onClick={(e)=>handleLogout(e)} className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Logout</button>
  
      </form>
  
    </div>
  
  </div>
  )
}

export default Login