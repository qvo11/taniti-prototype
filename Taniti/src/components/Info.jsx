import React from 'react'
import locationIcon from '../assets/location-icon.png'
import weatherIcon from '../assets/weather-icon.png'
import populationIcon from '../assets/population-icon.png'
import areaIcon from '../assets/area-icon.png'

const Info = () => {
  return (
    <section id='info' className='relative bg-dustBlue flex items-center justify-center p-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mx-10'>
            <div className='flex flex-col items-center flex-wrap text-center'>
                <img src={locationIcon} alt='Location Icon' className='h-10 w-auto mb-4' />
                <p className='text-lg font-body text-white mb-2'>Located in the heart of the <strong className='font-heading'>Pacific Ocean</strong></p> 
            </div>
            <div className='flex flex-col items-center flex-wrap text-center'>
                <img src={weatherIcon} alt='Weather Icon' className='h-10 w-auto mb-4' />
                <p className='text-lg font-body text-white mb-2'>Year-round <strong className='font-heading'>Tropical Climate</strong></p>
            </div>
            <div className='flex flex-col items-center flex-wrap text-center'>
                <img src={populationIcon} alt='Population Icon' className='h-10 w-auto mb-4' />
                <p className='text-lg font-body text-white mb-2'>Population of <strong className='font-heading'>20,000</strong></p>
            </div>
            <div className='flex flex-col items-center flex-wrap text-center'>
                <img src={areaIcon} alt='Area Icon' className='h-10 w-auto mb-4' />
                <p className='text-lg font-body text-white mb-2'>Area of <strong className='font-heading'>500 square miles</strong></p>
            </div>
        </div>
    </section>
  )
}

export default Info