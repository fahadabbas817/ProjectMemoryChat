import React from "react";
import { useTranslation } from "react-i18next";

const YoutubeThumbnails = () => {
  const { t } = useTranslation();
  return (
    <>
      <a href={t("leftImgLink")} target="_blank">
        <img
          className="h-14 rounded-md"
          src={t("leftimg")}
          alt="What is Infeelit"
        />
      </a>
      <a href={t("leftImgLink")} target="_blank">
        <img
          className="h-14 rounded-md"
          src={t("rightimg")}
          alt="Infeelit Demo"
        />
      </a>
    </>
  );
};

export default YoutubeThumbnails;
