import React from 'react'
import heroImage from '../assets/island.jpg'

const Hero = ({
    title = "Escape to Taniti",
    subtitle = "Your Dream Destination Awaits"
}) => {
  return (
    <section className='relative min-h-[70ch] flex items-center justify-center'>
        <div 
        className='absolute inset-0 bg-center bg-cover'
        style={{backgroundImage: `url(${heroImage})`}}
        />
        <div className='absolute inset-0 bg-white/40'></div>
        <div className='relative z-10 max-w-4xl text-center text-darkBlue px-6'>
          <h1 className='font-heading text-5xl md:text-6xl lg:text-7xl'>{title}</h1>
          <p className='mt-4 font-heading font-extrabold text-lg md:text-2xl'>{subtitle}</p>
        </div>
    </section>
  )
}

export default Hero