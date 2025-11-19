import React from 'react'

import pic from '../assets/esc.jpg';



const Hero = () => {
  return (
    <div className='grid grid-col-2 gap-5 '>
      <div>   hi i am Shina a front-End developer</div>
      <div>   
        <img src={pic} width={200} height={300}  alt="" />
      </div>
    </div>
  )
}

export default Hero