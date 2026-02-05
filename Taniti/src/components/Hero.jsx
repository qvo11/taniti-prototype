import React from 'react'
import heroImage from '../assets/island.jpg'

const Hero = ({
    title = "Escape to Taniti",
    subtitle = "Your Dream Destination Awaits"
}) => {
  return (
    <section id='hero' className='relative min-h-[70ch] flex items-center justify-center'>
        <div 
        className='absolute inset-0 bg-center bg-cover py-10'
        style={{backgroundImage: `url(${heroImage})`}}
        />
        <div className='absolute inset-0 bg-black/30'></div>
        <div className='relative z-10 max-w-4xl text-center text-white px-6'>
          <p className='mt-4 font-heading font-extrabold text-xl md:text-2xl'>{subtitle}</p>
          <h1 className='font-heading font-bold text-5xl md:text-6xl lg:text-7xl'>{title}</h1>
          <div className='w-2/3 flex justify-center mx-auto'>
          <p className='font-body font-medium mt-6 text-base'>
           Where pristine beaches, lush rainforests and a vibrant island culture create an unforgettable escape. Plan your perfect getaway today.
          </p>
          </div>

          {/* Action Buttons */}
          <div className='flex gap-4 justify-center mt-6'>
          <a className='inline-flex items-centerfont-body text-white rounded-full bg-dustBlue px-5 py-3 mt-8 shadow-xl transition-transform duration-200 ease-out hover:-translate-y-1' href='#'>Design Your Getaway</a>
          <a className='inline-flex items-centerfont-body font-medium text-darkBlue rounded-full bg-white/80 px-5 py-3 mt-8 shadow-xl transition-transform duration-200 ease-out hover:-translate-y-1' href='#'>Explore</a>
        </div>
        </div>
    </section>
  )
}

export default Hero