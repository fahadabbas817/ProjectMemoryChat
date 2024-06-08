import { createContext, useState, useRef } from "react";
import { pageData } from "@/assets/clientData";


export const ChatContext = createContext();

const ContextProvider = (props) => {
  let currentLanguage;

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [pageLanguage, setPageLanguage] = useState('English')
  
  const [selectedlanguage, setselectedLanguage] = useState('English')
  const featureRef = useRef(null)
  
  

  

  // const delayProvider =(index,nextWord)=>{
  //         setTimeout(function(){
  //             setResult(prev=>prev+nextWord);
  //         }, 70*index)
  // }

  // const newChatbtn=()=>{
  //     setLoading(false)
  //     setshowResult(false)

  // }

  const contextValue = {
    
    pageLanguage,
    setPageLanguage,
    
        featureRef,
    selectedlanguage,
    setselectedLanguage,
    input,
    setInput,
    loading,
    setLoading,
    result,
    setResult,
    prevPrompt,
    setPrevPrompt,
    recentPrompt,
    setRecentPrompt,
    
   
  };
  return (
    <ChatContext.Provider value={contextValue}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ContextProvider;
