import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Signup from './Sign-up'

const HeroPage = () => {
 const navigator=useNavigate();
  return (

    <div className='w-full flex justify-center sm:h-auto p-3 md:h-[50vh] bg-og'>
      {/* #EF8172 */}
      <div className='flex flex-col gap-5'>
            <div className='text-[7rem] font-bold'>Stay curious.</div>
            <div className='text-2xl font-semibold'>Discover News , facts from writer and from any topic</div>
            <button className='cursor-pointer w-[120px] text-center bg-black text-white p-2 border-1 rounded-xl' onClick={()=>{navigator("/")}}>Gets Started</button>
      
      </div>
    </div>
  ) 
}

export default HeroPage