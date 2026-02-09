import React from 'react'
import logo from '../assets/taniti-logo3.png'

const Navbar = () => {
  return (
    <header id="navbar" className='sticky top-0 z-50 bg-lightOrange p-2 shadow-md'>
      {/* Logo & NavLinks */}
    <nav className="bg-lightOrange py-2 px-4 flex items-center justify-between">
      <img src={logo} alt="Taniti Logo" className="h-[50px] w-auto p-0" />
      <ul className='absolute left-1/2 flex -translate-x-1/2 gap-8 whitespace-nowrap'>
        <li><a href='#hero' className='text-dustBlue font-[400] font-body hover:font-bold'>Home</a></li>
        <li><a href='#attractions' className='text-dustBlue font-[400] font-body hover:font-bold'>Attractions</a></li>
        <li><a href='#accommodations' className='text-dustBlue font-[400] font-body hover:font-bold'>Accommodations</a></li>
        <li><a href='#dining' className='text-dustBlue font-[400] font-body hover:font-bold'>Dining</a></li>
        <li><a href='#transportation' className='text-dustBlue font-[400] font-body hover:font-bold'>Transportation</a></li>
        <li><a href='#planning' className='text-dustBlue font-[400] font-body hover:font-bold'>Planning</a></li>
      </ul>
        
        <a 
        href='#' className='
        ml-auto inline-flex items-centerfont-body text-white rounded-full bg-dustBlue px-5 py-2 shadow-xl transition-transform duration-200 ease-out hover:-translate-y-1'>
        Book Now</a>


    </nav>
    </header>
  );
};

export default Navbar