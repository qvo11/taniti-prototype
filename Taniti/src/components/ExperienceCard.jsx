import React from 'react'

const ExperienceCard = ({ title, image, description }) => {
  return (
    <article className='group rounded-lg bg-lightOrange shadow-md transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg'>
      <img src={image} alt={title} className='h-60 w-full object-cover rounded-t-lg'></img>

      <h3 className='m-4 group-hover:text-darkBlue text-charcoal font-heading'>{title}</h3>
      <p className='text-charcoal/80 m-6 text-sm font-body'>{description}</p>
    </article>
  )
}

export default ExperienceCard