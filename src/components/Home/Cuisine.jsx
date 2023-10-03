import React from 'react'

const Cuisine = (props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-9 hover:scale-110 transition-all duration-500 cursor-pointer'>
        <img src={props.img} alt={props.name} width="300px" height="300px" className='rounded-full shadow-[4px_4px_15px_3px_rgba(0,0,0,0.25)]' />
        <p className='text-center font-sora text-[32px] font-semibold drop-shadow'>{props.name}</p>
    </div>
  )
}

export default Cuisine