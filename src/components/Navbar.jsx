import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='flex h-16 justify-center items-center border-b border-richblue' >
        <div className='flex w-11/12 max-w-maxContent justify-between items-center'>
            <Link to={"/"}>
                <img src={logo} alt='logo' loading='lazy' />
            </Link>
        </div>
        
    </div>
  )
}

export default Navbar