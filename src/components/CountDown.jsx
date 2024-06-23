
import React, { useState, useEffect ,useContext} from 'react';

import { ChatContext } from '@/Context/ChatContext';
import { useTranslation } from 'react-i18next';
const CountDown = () => {
  const {
    selectedlanguage,
    pageLanguage,
    setPageLanguage,
  } = useContext(ChatContext)

const {t} = useTranslation();
 


    
    const targetDate = new Date('2024-07-27T00:00:00');
  
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;
  
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        // Time is up
        timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
  
      // Format time values as two-digit strings
      Object.keys(timeLeft).forEach(unit => {
        timeLeft[unit] = String(timeLeft[unit]).padStart(2, '0');
      });
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      // Cleanup the timer interval on component unmount
      return () => clearInterval(timer);
    }, []);
  
    return (
        <>
        <div className="countDownNumbers font-bold flex flex-col transition-all duration-200 ease-in text-center">
          
            <span className="coundownNumbers flex">
              <span className="days flex flex-col ">
                <span>
                {`${timeLeft.days}`}
                </span>
                <span className='text-[8px] mt-[-5px]'>
                {t("days")}
                </span>
              </span>
               :
              <span className="days flex flex-col">
                <span>
                {`${timeLeft.hours}`}
                </span>
                <span className='text-[8px] mt-[-5px]'>
                {t("hours")}
                </span>
              </span>
              :
              <span className="days flex flex-col">
                <span>
                {`${timeLeft.minutes}`}
                </span>
                <span className='text-[8px] mt-[-5px]'>
                {t("min")}
                </span>
              </span>
              :
              <span className="days flex flex-col">
                <span>
                {`${timeLeft.seconds}`}
                </span>
                <span className='text-[8px] mt-[-5px]'>
                {t("sec")}
                </span>
              </span>
         
            </span>
           
          
          
        </div>
      </>
    );
  };
  
  
  

export default CountDown;
