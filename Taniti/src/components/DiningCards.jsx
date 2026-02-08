import React from 'react'

const DiningCards = ({title, image, description}) => {
  return (
    <article className='group p-4 w-full h-auto rounded-lg bg-white shadow-md transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg'>
        <div className='flex gap-3 items-start'>
        <div className='flex items-center'>
        <img src={image} alt={title} className='h-[200px] w-[350px] rounded-md object-cover shrink-0'></img>
        </div>
        <div className='flex-col'>
        <h3 className='mb-3 text-lg text-center group-hover:text-darkBlue text-charcoal font-heading'>{title}</h3>
        <p className='ml-2 text-charcoal/80 text-sm font-body leading-snug'>{description}</p>
        </div>
        </div>
    </article>
  )
}

export default DiningCards