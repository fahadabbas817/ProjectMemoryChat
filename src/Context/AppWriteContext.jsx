import { createContext, useState, useEffect, useContext } from "react";
import { account } from "@/config/appwriteConfig";

import { ID} from 'appwrite';

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
        

        const [loading, setLoading] = useState(true)
        const [user, setUser] = useState(null)

        useEffect(() => {
            //setLoading(false)
            // checkUserStatus()
         }, [])

         const loginUser = async (userInfo) => {
            

            // console.log('userInfo',userInfo)

            try{
                let response = await account.createEmailPasswordSession(userInfo.email, userInfo.password)
                let accountDetails = await account.get();
                setUser(accountDetails)
                console.log(user)
            }catch(error){
                console.error(error)
            }
           
            
         }

         const logoutUser = async () => {
            await account.deleteSession('current');
            setUser(null)
         }

         const registerUser = async (userInfo) => {
            setLoading(true)

            try{
                
                let response = await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.username);
        
                await account.createEmailPasswordSession(userInfo.email, userInfo.password)
                let accountDetails = await account.get();
                setUser(accountDetails)
                
            }catch(error){
                console.error(error)
            }
        
            setLoading(false)
         }

         const checkUserStatus = async () => {
            try{
                let accountDetails = await account.get();
                setUser(accountDetails)
            }catch(error){
                
            }
            setLoading(false)
         }

        const contextData = {
            user,
            loginUser,
            logoutUser,
            registerUser
        }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

//Custom Hook
export const useAuth = ()=> {return useContext(AuthContext)}

export default AuthContext;