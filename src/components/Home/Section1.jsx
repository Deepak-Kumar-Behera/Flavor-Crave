import React from 'react'
import bigFood from '../../assets/Big Food.png'
import smallFood from '../../assets/Small Food.png'
import deliveryImg from '../../assets/Delivery.png'
import dinningImg from '../../assets/Dinning.png'
import takeawayImg from '../../assets/Takeaway.png'
import Heading from './Heading'
import OfferingCard from './OfferingCard'
import Cuisine from './Cuisine'
import northIndian from '../../assets/North Indian.png'
import italian from '../../assets/Italian.png'
import chinese from '../../assets/Chinese.png'
import continental from '../../assets/Continental.png'
import southIndian from '../../assets/South Indian.png'
import punjabi from '../../assets/Punjabi.png'
import arrow from '../../assets/Line.png'
import TypeWriter from './TypeWriter'

const Section1 = () => {
  return (
    <div className='flex flex-col overflow-x-auto bg-gradient-to-b from-[#FFEBC342] to-[#FF573308]'>

        {/* Landing Section */}
        <div className='flex justify-between'>
            <div className='flex flex-col w-[50%] pl-[4%]'>
                <p className='font-quando font-normal leading-tight text-8xl mt-[6.5rem]'>What are you craving for ?</p>
                
                <p className='font-sniglet font-normal text-8xl bg-gradient-to-r from-pink-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent mt-8 leading-normal'><TypeWriter /></p>
                {/* <p className='font-sniglet font-normal text-8xl text-yellow-solid mt-8'>Spaghetti Carbonara</p> */}
            </div>
            <div className='relative w-[50%]'>
                <img src={bigFood} className='absolute right-0' />
                <img src={smallFood} className='absolute right-[42%] top-[48%]' />
            </div>
        </div>

        {/* Our Offerings */}
        <div className='relative bg-orange-banner flex flex-col items-center pt-[4rem] h-[330px] mt-[280px] rounded-3xl'>
            <Heading text={"Our Offerings"} />

            <div className='absolute bottom-0 translate-y-1/2 flex gap-[6.5rem]'>
                <OfferingCard img={deliveryImg} width={92} title={"Delivery"} desc={"Let your food walk for you."} />
                <OfferingCard img={dinningImg} width={97} title={"Book Your Table"} desc={"Come for the food, stay for the memories."} />
                <OfferingCard img={takeawayImg} width={83} title={"Takeaway"} desc={"Your hunger can't wait, grab a plate!"} />
            </div>
        </div>

        {/* Explore Cuisine */}
        <div className='flex flex-col items-center pt-[20rem] '>
            <div className='w-[50%]'>
                <Heading text={"Explore your favourite cuisine"} />
            </div>

            <div className='flex flex-col gap-16 justify-between items-center pt-16'>
                <div className='flex gap-[11.5rem]'>
                    <Cuisine img={northIndian} name={"North Indian"} />
                    <Cuisine img={italian} name={"Italian"} />
                    <Cuisine img={chinese} name={"Chinese"} />
                </div>

                <div className='flex gap-[11.5rem]'>
                <Cuisine img={continental} name={"Continental"} />
                <Cuisine img={southIndian} name={"South Indian"} />
                <Cuisine img={punjabi} name={"Punjabi"} />
                </div>
            </div>

            <button className='flex items-center px-8 py-5 bg-orange-solid2 rounded-[30px] my-20 hover:scale-105 transition-all duration-500 hover:shadow-[3px_3px_20px_3px_rgba(0,0,0,0.25)]'>
                <div className='flex justify-center'>
                    <p className='leading-6'>See Full Menu</p>
                    <img src={arrow} height={24} width={24} className='mt-0.5' />
                </div> 
            </button>
        </div>
    </div>
  )
}

export default Section1