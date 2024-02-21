import React from 'react'
import gmeetlogo from './../Images/gmeetlogo.png'
import needhelp from './../Images/helpIcon.png'
import feedback from './../Images/feedbackIcon.png'
import settings from './../Images/settingsIcon.png'
import apps from './../Images/appsIcon.png'
import googleAccountsIcon from './../Images/googleAccountsIcon.png'
import { useEffect,useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { FiSmile } from "react-icons/fi";

const Header = () => {

    const [currentDate,setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    const [isOpen,setIsOpen] = useState(false);
    const handleModal = () =>{
    setIsOpen(true);
    }

    useEffect(() => {
      const updateDate = () => {
        const now = new Date();
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', options);
        const formattedTime = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false, // Ensuring 24-hour format
          });
        
        setCurrentTime(formattedTime); 
        setCurrentDate(formattedDate);

      };
      updateDate(); 
      }, []);  


  return (
    <div className='flex flex-col md:flex md:flex-row items-center justify-between mt-2 mx-4'>
      <div className='w-[180px] h-[50px]'>
        <img className='mt-1' src={gmeetlogo} alt='Google Meet Logo'/>
      </div>
      <div className='flex items-center text-gray-500'>
        <span className='hidden md:block mr-2 text-lg'>{currentTime} - {currentDate}</span>
        <span onClick={handleModal} className='mr-2 p-3 cursor-pointer hover:bg-gray-200 opacity-70 rounded-full'> <img src={needhelp} alt='Need Help' /> </span>
        <span onClick={handleModal} className='mr-2 p-3 cursor-pointer hover:bg-gray-200 opacity-70 rounded-full'> <img src={feedback} alt='Feedback' /> </span>
        <span onClick={handleModal} className='mr-14 p-3 cursor-pointer hover:bg-gray-200 opacity-70 rounded-full'> <img src={settings} alt='Settings' /> </span>
        <span onClick={handleModal} className='mr-4 p-3 cursor-pointer hover:bg-gray-200 opacity-70 rounded-full'> <img src={apps} alt='Apps Icon' /> </span>
        <span onClick={handleModal} className='p-1 cursor-pointer hover:bg-gray-200 opacity-70 rounded-full h-10 w-10'> <img src={googleAccountsIcon} alt='Google Accounts Icon' /> </span>
      </div>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

const SpringModal = ({ isOpen, setIsOpen }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#2B87FF] to-[#0672ff] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiSmile className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-[#2B87FF] grid place-items-center mx-auto hover:bg-[#2B87FF] hover:text-white hover:text-3xl">
                  <FiSmile/>
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">
                  Hi there, Yash this side
                </h3>
                <p className="text-center mb-6">
                This is an assignment for WhatBuilds Frontend Internship. These functionalities are not implemented in the assignment. 
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    Go back!
                  </button>
                  
                  <button
                    onClick={()=>{setIsOpen(false); }}
                    className="bg-white hover:opacity-90 transition-opacity text-[#2B87FF] font-semibold w-full py-2 rounded"
                  >
                    Alright !
                  </button>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

export default Header
