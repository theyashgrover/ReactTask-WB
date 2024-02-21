import React from 'react'

const MeetInfo = ({meetingTime, meetingTitle, meetingStatus}) => {
  return (
    <div className='shadow-sm w-[350px] h-[40px] md:w-[620px] md:h-[60px] hover:scale-105 ease-in-out duration-200 rounded-sm hover:rounded-md cursor-pointer hover:shadow-lg shadow-[#6d6d6d] flex justify-between items-center p-4 bg-white text-[#6d6d6d] hover:text-white hover:bg-[#2B87FF]'>
      <span className='text-sm'>{meetingTime}</span>
      <span className='text-left w-60 text-base font-semibold -ml-8 md:-ml-48'>{meetingTitle}</span>
      <span className='text-xs text-white'>{meetingStatus}</span>
    </div>
  )
}

export default MeetInfo
