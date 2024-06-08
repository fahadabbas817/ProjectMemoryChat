// import 'regenerator-runtime/runtime'
import React, { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { useMutation } from "@tanstack/react-query";
import { fetchGemini } from "./GeminiApi";
import { ThreeDots } from "react-loader-spinner";
import autoAnimate from "@formkit/auto-animate";
import { ChatContext } from "../Context/ChatContext";
import SocialShare from "./SocialShare";
import { Navigate } from "react-router-dom";
import { pageData } from "@/assets/clientData";
import Loader from "./Loader";

const MobileSection = () => {
  const {selectedlanguage, pageLanguage, setselectedLanguage,featureRef,setPageLanguage} = useContext(ChatContext)


  const [topics, setTopics] = useState(["Parent", "Teenager", "Hero"]);
  const [result, setResult] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [showImage, setshowImage] = useState(false);
  const [responseCounter, setresponseCounter] = useState(0);
  const [prompt, setPrompt] = useState("");

  const bottomref = useRef(null);
  const chattopref = useRef(null);
  const topRef = useRef(null);

  useEffect(()=>{
    const languageChanger=()=>{
      const currentLanguage = pageData.find(lang => lang.lang === selectedlanguage)
      setPageLanguage(currentLanguage)
    }
    languageChanger();  
  },[selectedlanguage])


  // useEffect(() => {
  //   bottomref.current.scrollIntoView({ behavior: "smooth" });
  //   savetoLocalStorage(prevPrompt)

  // }, [prevPrompt]);

  // useEffect(()=>{
  //   let chatter = JSON.parse(localStorage.getItem('chatHistory'))
  //   setPrevPrompt(chatter)
  //   console.log(chatter)
  //   // if(chatter && chatter.length>0){
  //   //   // let storedData = JSON.parse(chatter)
  //   // }
  // },[])

  useEffect(() => {
    if (prevPrompt) {
      chattopref.current && autoAnimate(chattopref.current);
    }
  }, [chattopref]);

  // const savetoLocalStorage = (chatprops) => {
  //   // const chatDataString = JSON.stringify(chatprops)
  //   localStorage.setItem("chatHistory", JSON.stringify(chatprops));
  //   console.log(localStorage);
  // };
  const scrollToFeatuer = () => {
    featureRef.current.scrollIntoView({ behavior: "smooth" });
    console.log("clicked");
  };

  const mutation = useMutation({
    mutationFn: () => {
      return fetchGemini(recentPrompt);
    },
    onSuccess: (data) =>
      setPrevPrompt((prev) => [
        ...prev,
        {
          isbot: true,
          message: data,
        },
      ]),
  });

  const runChat = async (prompt) => {
    if (prompt === "" || prompt === " ") {
      return;
    }
    await Promise.resolve(
      setPrevPrompt([
        ...prevPrompt,
        {
          isbot: false,
          message: prompt,
        },
      ])
    );

    setRecentPrompt(prompt);

    setPrompt("");

    mutation.mutate();
    if (mutation.isError) {
      console.log(mutation.error);
    }
  };

  return (
    <>
      <div className="main h-full md:h-[90vh] min-w-80  w-full md:max-w-2/4 absolute md:w-[50vh] top-16  md:top-2 md:border-[1.5vh] flex  flex-col z-10 justify-end md:rounded-[6vh]   md:border-[#1D2A3F] md:outline md:outline-1 md:outline-offset-0 md:outline-white md:shadow-inner md:shadow-[#ffffffc1] mb-8">
        <div className="content h-2/3  md:rounded-b-3xl bg-white flex flex-col  items-center md:justify-end relative top-0 md:top-16   ">
          <div
            ref={topRef}
            className="chatbot-chat  w-full bg-white md:rounded-b-3xl  py-1"
          >
            <div className="constantMobilePart">
              <div className="logoimage flex justify-center mt-[-8rem] lg:mt-[-11rem] z-30">
                <img className="h-64 md:h-52 xl:h-60 " src={assets.Infeelit_image} alt="" />
              </div>
              <div className=" md:hidden youtube-thumbnails  flex mx-auto justify-center gap-8 my-1  ">
                <img className="h-20" src={assets.thumbnail1} alt="" />
                <img className="h-20" src={assets.thumbnail2} alt="" />
              </div>

              <div
                className={`EarlyAccessBtn ${
                  prevPrompt.length !== 0 ? "flex" : "hidden"
                } flex-col justify-center  items-center my-3 bg-gradient-to-tr from-[#F27104]  to-[#FFCB18]  text-black w-max px-6 py-2  rounded-full cursor-pointer  mx-auto`}
              >
                <div className="EarlyAccessBtnText flex flex-col items-center justify-center gap-0 shadow-xl">
                  <p className="font-extrabold">LAUNCHING JULY 26!</p>
                  <p className="font-bold mt-[-0.3vw] text-sm ">
                    GET EARLY ACCESS
                  </p>
                </div>
              </div>
            </div>

            {prevPrompt.length === 0 && (
              <div className="  related-Topics px-2">
                <div className="greetText my-2 md:text-xs   justify-center">
                  {/* <p className="text-center">
                    Hi, I am Infeelit - Here to help you
                  </p> */}
                  <p className="font-bold  text-center">
                    {pageLanguage.infeelitIntoText}
                  </p>
                </div>
                <div className="EarlyAccessBtn flex flex-col justify-center  items-center bg-gradient-to-tr from-[#F27104]  to-[#FFCB18]  text-black w-max px-6 py-2  rounded-full cursor-pointer mx-auto shadow-xl hover:px-4 hover:ring-2 hover:ring-slate-900 transition-all ease-in duration-200">
                  <div className="EarlyAccessBtnText flex flex-col items-center justify-center gap-0 ">
                    <p className="font-extrabold">LAUNCHING JULY 26!</p>
                    <p className="font-bold mt-[-0.3vw] text-sm ">
                      GET EARLY ACCESS
                    </p>
                  </div>
                </div>

                <div className="greetQuestion text-center md:text-sm my-4">
                  <p className="text-[#1896B0] font-bold">
                    What kind of memory would you <br /> like to relive today
                  </p>
                </div>

                <div className="topic-container mx-auto w-72 flex flex-wrap justify-center gap-2   ">
                  {topics.map((topic, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => runChat(topic)}
                        className="scrollbuttonContent w-20  bg-[#1896B0] px-1 py-1  shadow-md rounded-2xl text-white flex text-xs justify-center cursor-pointer hover:bg-[#1871b0] transition ease-in duration-200"
                      >
                        <p>{topic}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div
              className={`chatbot-main ${
                prevPrompt.length !== 0 ? "flex" : "hidden"
              } h-40 overflow-y-scroll  flex flex-col mt-8 gap-4 `}
              ref={chattopref}
            >
              {prevPrompt.map((items, i) => {
                return (
                  <div key={i} className=" main-chat  flex flex-col">
                    <div
                      className={`chat-question ease-in transition-all flex  gap-2 items-start px-2 py-1 ${
                        items.isbot ? "bg-slate-100" : null
                      }`}
                    >
                      <img
                        className="h-6 "
                        src={items.isbot ? assets.AI_response : assets.User}
                        alt=""
                      />

                      <pre
                        className={` whitespace-pre-wrap text-xs ${
                          !items.isbot ? "font-medium  " : "font-normal"
                        }`}
                      >
                        <span className="w-40 ">{items.message}</span>
                      </pre>
                    </div>
                    {i === prevPrompt.length - 1 && (
                    <Loader limit={mutation.isPending} />
                    )}
                    {i % 5 === 0 && i === prevPrompt.length - 1 && i !== 0 && (
                      <span className="image-generation w-40  text-[#f3f3f3] bg-gradient-to-r from-[#449395] to-[#2cc3c8] text-center text-sm font-bold py-2 mx-2 mt-2 px-1 rounded-2xl">
                        Generate Image
                      </span>
                    )}
                    {mutation.isError ? (
                      <div>An error occurred: {mutation.error.message}</div>
                    ) : null}
                  </div>
                );
              })}
              <div
                ref={bottomref}
                className="bottom hidden border-2 h-2 border-red-600"
              ></div>
            </div>
            
              <div className="prompt-box mx-auto my-4   border-4 h-12 border-[#001C3C] w-80 flex items-center justify-between rounded-3xl ">
                <div className="search mx-3">
                  <input
                    className="bg-transparent text-sm outline-none"
                    value={prompt}
                    type="text"
                    placeholder="Enter the prompt here"
                    name="input"
                    id="input"
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) =>
                      e.key == "Enter" ? runChat(prompt) : null
                    }
                  />
                </div>
                <div className="searchbar-image flex items-center mx-4">
                  <img className="h-6 cursor-pointer hover:h-7 transition-all duration-150 ease-in" src={assets.record} alt="record" />
                  <img
                    className="h-6 cursor-pointer hover:h-7 transition-all duration-150 ease-in"
                    onClick={() => runChat(prompt)}
                    src={assets.send}
                    alt="send"
                  />
                </div>
              </div>
           
          </div>
        </div>

        <SocialShare />
      </div>
    </>
  );
};

export default MobileSection;
