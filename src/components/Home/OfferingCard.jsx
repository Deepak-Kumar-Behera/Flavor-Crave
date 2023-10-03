import React from 'react'

const OfferingCard = (props) => {
  return (
    <div className='flex flex-col items-center gap-4 p-6 w-[268px] bg-white shadow-[4px_4px_15px_3px_rgba(0,0,0,0.25)] rounded-xl cursor-pointer hover:scale-110 transition-all duration-500'>
        <img src={props.img} alt='delivery image' width={85} height={85} />
        <p className='font-sourcecodepro font-medium text-lg text-center text-grey-text'>{props.title}</p>
        <p className='font-sourcecodepro font-normal text-sm w-[95%] leading-5 text-center'>{props.desc}</p>
    </div>
  )
}

export default OfferingCard