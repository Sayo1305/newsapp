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
            <div className='text-3xl font-semibold'>Discover News , facts from around the World and from any topic.</div>
            <button className='cursor-pointer w-[150px] h-[35px] flex justify-center items-center text-center bg-black text-white p-3.5 border-1 rounded-xl' onClick={()=>{navigator("/")}}>Get Started</button>
      
      </div>
    </div>
  ) 
}

export default HeroPage