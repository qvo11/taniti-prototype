import React from 'react'
import logo from '../assets/taniti-logo2.png'

const Navbar = () => {
  return (
    <header className='bg-darkBlue p-3'>
      {/* Logo & NavLinks */}
    <nav className="bg-darkBlue p-4 flex items-center justify-between">
      <img src={logo} alt="Taniti Logo" className="h-[100px] w-auto p-0" />
      <ul className='flex gap-8'>
        <li><a href='#' className='text-white hover:text-mediumBlue'>Home</a></li>
        <li><a href='#' className='text-white hover:text-mediumBlue'>Attractions</a></li>
        <li><a href='#' className='text-white hover:text-mediumBlue'>Lodging</a></li>
        <li><a href='#' className='text-white hover:text-mediumBlue'>Transportation</a></li>
        <li><a href='#' className='text-white rounded-full bg-mediumBlue px-5 py-2 transition'>Book Now</a></li>
      </ul>

    </nav>
    </header>
  );
};

export default Navbar