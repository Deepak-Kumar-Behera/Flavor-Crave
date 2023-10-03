import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeWriter = () => {
  return (
    <TypeAnimation
        sequence={[
        // Same substring at the start will only be typed out once, initially
        'Sushi !!',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Vada Pav !!',
        1000,
        'Spring Rolls !!',
        1000,
        'Risotto !!',
        1000,
        'Biryani !!',
        1000,
        'Cheese Burger !',
        1000,
        'Cheese Cake !!',
        1000,
        'Pav Bhaji !!',
        1000,
        'Chole Bhature !',
        1000,
        'Chole Kulche !!',
        1000,
        'Dal Makhani !!',
        1000,
        'Dal Tadka !!',
        1000,
        'Butter Chicken!',
        1000,
        'Dosa !!',
        1000,
        'Pizza !!',
        1000,
        'Momos !!',
        1000,
        'Pani Puri !!',
        1000,
        'Medu Vada !!',
        1000,
        'Malai Kofta !!',
        1000,
        'Jalebi !!',
        1000,
        'Gulab Jamun !!',
        1000,
        'Ras Malai !!',
        1000,
        'Kulfi !!',
        1000,
        'Masala Chai !!',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default TypeWriter