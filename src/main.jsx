import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./Context/ChatContext.jsx";
import { AuthProvider } from "./Context/AppWriteContext.jsx";
import i18n from "./i18n.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <ContextProvider>
    <AuthProvider>
     
        <App />
      
      </AuthProvider>
    </ContextProvider>
    
  </React.StrictMode>
);
