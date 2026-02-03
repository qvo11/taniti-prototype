import React from 'react'
import logo from '../assets/taniti-logo2.png'

const Navbar = () => {
  return (
    <header className='bg-darkBlue p-3'>
      {/* Logo & NavLinks */}
    <nav className="bg-darkBlue py-2 px-4 flex items-center justify-between">
      <img src={logo} alt="Taniti Logo" className="h-[100px] w-auto p-0" />
      <ul className='flex items-center justify-center gap-8'>
        <li><a href='#' className='text-white font-body hover:text-lightBlue'>Home</a></li>
        <li><a href='#' className='text-white font-body hover:text-lightBlue'>Attractions</a></li>
        <li><a href='#' className='text-white font-body hover:text-lightBlue'>Lodging</a></li>
        <li><a href='#' className='text-white font-body hover:text-lightBlue'>Transportation</a></li>
        <li><a href='#' className='inline-block font-body text-white rounded-full bg-lightBlue px-5 py-2 transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg'>Book Now</a></li>
      </ul>

    </nav>
    </header>
  );
};

export default Navbar