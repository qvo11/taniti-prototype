import React from 'react'

const SectionHeader = ({label, title, description}) => {
  return (
    <>
    <p className='text-sm sm:text-md md:text-lg font-body text-darkBlue tracking-widest mb-3'>
        {label}
    </p>
    <h1 className='text-3xl sm:text-4xl md:text-5xl font-heading text-charcoal mb-4'>
        {title}
    </h1>
    <p className='w-2/3 mx-auto text-center text-sm sm:text-base md:text-md font-body text-charcoal-100'>
        {description}
    </p>
    </>
  )
}

export default SectionHeader