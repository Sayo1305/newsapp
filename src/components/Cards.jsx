import React from 'react'

const Cards = ({data}) => {
  return (
    <div className='bg-slate-500 w-[300px] h-[400px] p-5 rounded-lg'>
      <div>{data.source.name}</div>
      <div>{data.description}</div>
    </div>
  )
}

export default Cards