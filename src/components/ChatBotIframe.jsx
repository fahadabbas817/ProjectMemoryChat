import React from "react";
import { useTranslation } from "react-i18next";

const ChatBotIframe = () => {
  const { t } = useTranslation();

  const currentLanguageCode = t("code");
  return (
    <div className="relative w-full h-[280px]">
      <iframe
        className={`w-full h-full`}
        src={`${
          import.meta.env.VITE_NEXTJS_CHATBOT_SITE_URL
        }/?lang=${currentLanguageCode}`}
        allow="microphone"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ChatBotIframe;
