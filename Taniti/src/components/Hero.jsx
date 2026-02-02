import React from 'react'
import heroImage from '../assets/island.jpg'

const Hero = ({
    title = "Welcome to Taniti",
    subtitle = "Your Dream Destination Awaits"
}) => {
  return (
    <section className='relative min-h-[70ch] flex items-center justify-center'>
        <div 
        className='absolute inset-0 bg-center bg-cover'
        style={{backgroundImage: `url(${heroImage})`}}
        />
    </section>
  )
}

export default Hero