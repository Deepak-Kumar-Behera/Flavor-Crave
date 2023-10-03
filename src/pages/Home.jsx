import React from 'react'
import Section1 from '../components/Home/Section1';
import Section2 from '../components/Home/Section2';
import Section3 from '../components/Home/Section3';

const Home = () => {
  return (
    <div className='w-full flex flex-col justify-center item-center'>
        
        <Section1 />
        <Section2 />
        <Section3 />
        
    </div>
  )
}

export default Home;