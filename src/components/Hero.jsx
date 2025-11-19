import React from 'react'

import pic from '../assets/esc.jpg';



const Hero = () => {
  return (
    <div className='grid sm:grid-cols-2  grid-cols-1  h-screen   justify-center gap-5 py-10 px-10
    a '>
    <div className='text-center align-middle'>
    <span className='text-5xl'>   I am Shina a</span>  <br /> <span className='text-7xl '> Frontend developer</span> 
    </div>
    <div className='bg-red-600 border-4  h-200 w-300'>
      <img src={pic}/>
    </div>
    </div>
  )
}

export default Hero