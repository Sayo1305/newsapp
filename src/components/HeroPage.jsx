import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full flex justify-center h-[50vh] bg-pink-sp/90'>
      <div className='flex flex-col gap-5'>
            <div className='text-[7rem] font-bold'>Stay curious.</div>
            <div className='text-2xl font-semibold'>Discover News , facts from writer and from any topic</div>
            <div className='cursor-pointer w-[120px] text-center bg-black text-white p-2 border-1 rounded-xl'>Gets Started</div>
      </div>
    </div>
  ) 
}

export default HeroPage