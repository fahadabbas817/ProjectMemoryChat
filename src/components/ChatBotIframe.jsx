import React, { useState } from "react";
import Loader from "./Loader";
import { useTranslation } from "react-i18next";

const ChatBotIframe = () => {
  const { t } = useTranslation();

  const currentLanguageCode = t("lang");

 

  return (
    <div className="relative w-full h-[280px]">
      <iframe
        className={`w-full h-full`}
        src={`${import.meta.env.VITE_CHATBOT_SITE_URL}/?lang=${currentLanguageCode}`}
        allow="microphone"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ChatBotIframe;
