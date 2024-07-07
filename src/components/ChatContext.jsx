import { createContext, useState} from "react";



export const ChatContext = createContext();

const ContextProvider = (props) => {
 
  const [earlyAccessEmail, setEarlyAccessEmail] = useState("");
  

  const contextValue = {
    earlyAccessEmail,
    setEarlyAccessEmail
  };
  return (
    <ChatContext.Provider value={contextValue}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ContextProvider;
