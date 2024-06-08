import React, { useState } from 'react'
import { ID } from 'appwrite'
import { account } from '@/config/appwriteConfig'
import { useAuth } from '@/Context/AppWriteContext'
const SignUp = () => {
  const {user,loginUser,logoutUser,registerUser} = useAuth();

        const [signupData, setSignupData] = useState({
            username:'',
            email:'',
            password:'',
        })


        const handleSignUp = async(e)=>{
                e.preventDefault()
                registerUser(signupData)
                // console.log(data);
                
        // try {
        // const newuser=await account.create(ID.unique(),signupData.email,signupData.password,signupData.username);
        // console.log(newuser)
        // } catch(e){
        //     console.log('something went wrong',e)

        // }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400 transition duration-100 ease-in">

  {/* <!-- login form --> */}
  <div className="bg-white p-16 rounded shadow-2xl w-2/3">

    <h2 className="text-3xl font-bold mb-10 text-gray-800">Create Your Account</h2>

    <form className="space-y-5">

      <div>
        <label className="block mb-1 font-bold text-gray-500">Name</label>
        <input onChange={(e)=>{
            setSignupData({...signupData, username: e.target.value})
        }} type="text" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
      </div>

      <div>
        <label className="block mb-1 font-bold text-gray-500">Email</label>
        <input onChange={(e)=>{
            setSignupData({...signupData,email: e.target.value})
        }}  type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
      </div>

      <div>
        <label className="block mb-1 font-bold text-gray-500">Password</label>
        <input onChange={(e)=>{
            setSignupData({...signupData, password: e.target.value})
        }} type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
      </div>

      <div className="flex items-center">
        <input type="checkbox" id="agree"/>
        <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
      </div>

      <button onClick={(e)=> handleSignUp(e) } className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Sign Up</button>

    </form>

  </div>

</div>
  )
}

export default SignUp