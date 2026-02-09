import React from 'react'
import logo from '../assets/taniti-logodark.png'
import facebook from '../assets/facebook (1).png'
import instagram from '../assets/instagram (2).png'
import twitter from '../assets/twitter (1).png'


const Footer = () => {
  return (
    <section id='footer'className='bg-charcoal py-10 px-5 mt-30'>
        <div className='grid grid-cols-4 p-4 gap-20 max-w-6xl mx-auto'>
            <div>
            <img src={logo} alt='taniti logo' className='h-[60px] w-auto' />
            <p className='text-white/70 text-body text-sm mt-5'>
                Where pristine beaches, lush rainforests and a vibrant island culture create an unforgettable escape. Plan your perfect getaway today.
            </p>
            <div className='flex items-center gap-4 mt-4'>
            <img src={facebook} alt='facebook logo' className='h-8 w-auto mt-10' />
            <img src={instagram} alt='instagram logo' className='h-8 w-auto mt-10' />
            <img src={twitter} alt='twitter logo' className='h-8 w-auto mt-10' />
            </div>
            </div>

            <div className='grid grid-cols-1'>
                <h3 className='text-white text-body text-sm sm:text-base md:text-lg font-bold'>Quick Links</h3>
                <ul className='list-none space-y-2'>
                <li><a href='#hero' className='text-white/70 text-xs sm:text-sm md:text-md hover:underline'>Home</a></li>
                <li><a href='#attractions' className='text-white/70 text-xs sm:text-sm md:text-md hover:underline'>Attractions</a></li>
                <li><a href='#accommodations' className='text-white/70 text-xs sm:text-sm md:text-md hover:underline'>Accommodations</a></li>
                <li><a href='#dining' className='text-white/70 text-xs sm:text-sm md:text-md hover:underline'>Dining</a></li>
                <li><a href='#transportation' className='text-white/70 text-xs sm:text-sm md:text-md hover:underline'>Transportation</a></li>
                <li><a href='#planning' className='text-white/70 text-xs sm:text-sm md:text-md hover:underline'>Planning</a></li>
                </ul>
            </div>

                <div className='grid grid-cols-1'>
                <h3 className='text-white text-body text-sm sm:text-base md:text-lg font-bold'>Travel Information</h3>
                <ul className='list-none space-y-3'>
                <li><p className='text-white/70 text-xs sm:text-sm md:text-md'>Currency: US Dollar (USD), Yen & Euros </p></li>
                <li><p className='text-white/70 text-xs sm:text-sm md:text-md'>Language: English & Tanitian</p></li>
                <li><p className='text-white/70 text-xs sm:text-sm md:text-md'>Time Zone: Pacific Standard Time (PST)</p></li>
                <li><p className='text-white/70 text-xs sm:text-sm md:text-md'>Power: 120V / 60Hz</p></li>
                <li><p className='text-white/70 text-xs sm:text-sm md:text-md'>Climate: Tropical</p></li>
                </ul>
            </div>

            <div className='grid grid-cols-1'>
                <h3 className='text-white text-body text-sm sm:text-base md:text-lg font-bold'>Contact Us</h3>
                <div className='list-none space-y-8'>
                <p className='text-white/70 text-xs sm:text-sm md:text-md'>Address: 123 Taniti Beach Rd, Paradise Island, TI 45678</p>
                <p className='text-white/70 text-xs sm:text-sm md:text-md'>Email: info@taniti.com</p>
                <p className='text-white/70 text-xs sm:text-sm md:text-md'>Phone: +1 (555) 123-4567</p> 
                </div>
            </div>
        </div>

    </section>
  )
}

export default Footer