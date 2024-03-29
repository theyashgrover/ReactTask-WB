import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:flex lg:flex-row mt-12 lg:mt-40 mx-10 md:mx-24'>
      <div>
        <HeroLeft/>
      </div>
      <div>
        <HeroRight/>
      </div>
    </div>
  )
}

export default Hero
