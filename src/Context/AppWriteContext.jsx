import { createContext, useState,useCallback, useEffect, useContext } from "react";
import { account } from "@/config/appwriteConfig";

import { ID } from "appwrite";
import { toast } from "sonner";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);


  const loginUser = async (userInfo) => {
    // console.log('userInfo',userInfo)

    try {
      let response = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
      console.log(user);
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }finally{
      setUser(accountDetails);
      toast.success(`Welcome ${user.name? user.name :""}`,{description:"Thanks for logging in Enoy sharing your precious memories"})
    }
  };

  const logoutUser = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  const registerUser = async (userInfo) => {
    
    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.username
      );

      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
      toast.success("Welcome! Thanks for signing Up")
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }

    
  };

  const checkUserStatus = async () => {
    
    try {
      let accountDetails = await account.get();
      if(accountDetails){
      setUser(accountDetails);
    }
    } catch (error) {
        throw error
    }
  };

 

  const contextData = {
    loading,
    setLoading,
    user,
    setUser,
    loginUser,
    logoutUser,
    registerUser,
    checkUserStatus
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

//Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
