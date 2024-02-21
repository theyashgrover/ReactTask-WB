import React from 'react'
import { useState, useRef } from 'react'
import keyboardIcon from './../Images/KeyboardIcon.png'
import newMeetingIcon from './../Images/NewMeetIcon.png'

const HeroLeft = () => {
    const inputRef = useRef(null);
    const [linkValue, setLinkValue] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
  
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
      <div className='w-[350px] md:w-[600px] leading-[2rem] md:leading-[3rem] text-[#1e1e1e] text-2xl md:text-5xl mb-5'>Secure video conferencing for everyone</div>
      <div className='w-[300px] md:w-[420px] leading-5 text-[#6d6d6d]'>Connect, collaborate and celebrate from anywhere with Google Meet</div>
      <div className='mt-14 flex flex-col md:flex md:flex-row mb-6'>
        <button className='text-center flex items-center mr-2 bg-[#2B87FF] font-semibold hover:bg-[#4279c0] text-white rounded-md px-3 py-2'>
            <span>
                <img className='mr-2' src={newMeetingIcon} alt='New Meeting Icon'/>
            </span>
            New meeting</button>

        <div className='mt-2 md:mt-0 md:ml-4 flex rounded-md border-2 border-[#8d8d8d] py-2 px-3 items-center justify-evenly'>
        <span><img className='opacity-70 w-7 h-7' src={keyboardIcon} alt='Keyboard Icon'/></span>
        <input ref={inputRef} onChange={handleInputChange}
        onFocus={handleFocus} className='ml-3 appearance-none bg-transparent focus:border-0 border-none  outline-none' type='text' placeholder='Enter a code or nickname' id="meetlink"/> 
        </div>

        <button
            className="ml-4 disabled:text-[#7d7d7d]  cursor-pointer disabled:cursor-not-allowed  hover:bg-gray-100 text-blue-500 py-2 px-4 rounded-sm disabled:text-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={!isEnabled} // Initially disabled
            id="joinButton"
        >
                Join
       </button>
      </div>
      <hr/>
      <div className='text-center md:text-left mt-4'>
        <span className='text-[#2B87FF] hover:underline cursor-pointer'>Learn more</span>  about Google Meet
      </div>
    </div>
  )
}

export default HeroLeft
