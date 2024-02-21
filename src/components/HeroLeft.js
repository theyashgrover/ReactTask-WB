import React from 'react'
import { useState, useRef } from 'react'
import keyboardIcon from './../Images/KeyboardIcon.png'
import newMeetingIcon from './../Images/NewMeetIcon.png'
import { AnimatePresence, motion } from "framer-motion";
import { FiSmile } from "react-icons/fi";


const HeroLeft = () => {
    const inputRef = useRef(null);
    const [linkValue, setLinkValue] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    
    const [isOpen,setIsOpen] = useState(false);
    const handleModal = () =>{
    setIsOpen(true);
    }
  
    const handleInputChange = (event) => {
      setLinkValue(event.target.value);
      setIsEnabled(event.target.value.length > 0); // Enable button if input has value
    };  
    const handleFocus = () => {
        // Check if there's already text in the input when it's focused
        if (inputRef.current.value.length > 0) {
          setIsEnabled(true); // Enable button if value exists
        }
      };

    return (
    <div>
        {/* Title */}
      <div className='w-[350px] md:w-[600px] leading-[2rem] md:leading-[3rem] text-[#1e1e1e] text-2xl md:text-5xl mb-5'>
        Secure video conferencing for everyone
      </div>
        {/* Tagline */}
      <div className='w-[300px] md:w-[420px] leading-5 text-[#6d6d6d]'>
        Connect, collaborate and celebrate from anywhere with Google Meet
      </div>
        {/* CTA's */}
      <div className='mt-6 lg:mt-14 flex flex-col md:flex md:flex-row mb-6'>

            <button 
            className='text-center w-[160px] flex items-center mr-2 bg-[#2B87FF] font-semibold hover:bg-[#4279c0] text-white rounded-md px-3 py-2'
            onClick={handleModal}
            >
                <span>
                    <img className='mr-2' src={newMeetingIcon} alt='New Meeting Icon'/>
                </span>
                New meeting
            </button>

            <div className='text-left w-[250px] mt-2 md:mt-0 md:ml-4 flex rounded-md border-2 border-[#8d8d8d] py-2 px-3 items-center justify-evenly'>
                <span><img className='opacity-70 w-7 h-7' src={keyboardIcon} alt='Keyboard Icon'/></span>
                <input 
                ref={inputRef} 
                onChange={handleInputChange}
                onFocus={handleFocus} 
                className='ml-3 appearance-none bg-transparent focus:border-0 border-none  outline-none' 
                type='text' 
                placeholder='Enter a code or nickname' 
                id="meetlink"/> 
                </div>

                <button
                className="ml-4 disabled:text-[#7d7d7d]  cursor-pointer disabled:cursor-not-allowed hover:bg-gray-100 text-blue-500 py-2 px-4 rounded-sm disabled:text-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={!isEnabled} // Initially disabled
                id="joinButton"
                onClick={handleModal}
                >
                    Join
                </button>
            </div>

      <hr/>

      <div className='text-center md:text-left mt-4'>
        <span className='text-[#2B87FF] hover:underline cursor-pointer'>Learn more</span>  about Google Meet
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

export default HeroLeft
