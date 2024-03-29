import React from 'react'
import MeetInfo from './MeetInfo'

const HeroRight = () => {
  return (
    <div className='mt-12 lg:-mt-7 lg:ml-24'>

      <MeetInfo meetingTime={"17:00"} meetingStatus={"Now"} meetingTitle={"whatbuild design intern"}/>
      <MeetInfo meetingTime={"17:30"} meetingStatus={"Later"} meetingTitle={"Fiing <> Whatbuilds"}/>
      <MeetInfo meetingTime={"20:00"} meetingStatus={"Later"} meetingTitle={"nene connor atul"}/>
      <MeetInfo meetingTime={"21:00"} meetingStatus={"Later"} meetingTitle={"vu venture - whatbuilds"}/>
      <div className='text-center lg:text-left mt-2 text-xs text-[#8d8d8d]'>
        From your Google Calendar account : atul@whatbuilds.com
      </div>
    </div>
  )
}

export default HeroRight
