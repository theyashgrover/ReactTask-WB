import React from 'react'
import gmeetlogo from './../Images/gmeetlogo.png'
import needhelp from './../Images/helpIcon.png'
import feedback from './../Images/feedbackIcon.png'
import settings from './../Images/settingsIcon.png'
import apps from './../Images/appsIcon.png'
import googleAccountsIcon from './../Images/googleAccountsIcon.png'
import { useEffect,useState } from 'react'

const Header = () => {

    const [currentDate,setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

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
    <div className='flex items-center justify-between mt mt-3 mx-4'>
      <div className='w-[180px] h-[50px]'>
        <img src={gmeetlogo} alt='Google Meet Logo'/>
      </div>
      <div className='flex items-center text-gray-500'>
        <span className='mr-4 text-lg'>{currentTime} - {currentDate}</span>
        <span className='mr-4 p-3 cursor-pointer hover:bg-gray-200 opacity-70 rounded-full'> <img src={needhelp} alt='Need Help' /> </span>
        <span className='mr-4 p-3 cursor-pointer hover:bg-gray-200 opacity-70 rounded-full'> <img src={feedback} alt='Feedback' /> </span>
        <span className='mr-14 p-3 cursor-pointer hover:bg-gray-200 opacity-70 rounded-full'> <img src={settings} alt='Settings' /> </span>
        <span className='mr-4 p-3 cursor-pointer hover:bg-gray-200 opacity-70 rounded-full'> <img src={apps} alt='Apps Icon' /> </span>
        <span className='p-1 cursor-pointer hover:bg-gray-200 opacity-70 rounded-full h-10 w-10'> <img src={googleAccountsIcon} alt='Google Accounts Icon' /> </span>
      </div>
    </div>
  )
}

export default Header
