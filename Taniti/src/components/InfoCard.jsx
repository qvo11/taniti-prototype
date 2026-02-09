import React from 'react'

const InfoCard = ({ label, title, description, icon }) => {
  return (
    <article className='group flex flex-col h-full rounded-lg bg-lightOrange shadow-md transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg m-3'>
    <div className='h-12 flex items-center mx-6 mt-7'>
    <img src={icon} alt={label} className='h-10 shrink-0 w-auto'></img>
    <h3 className='mx-6 my-3 group-hover:text-darkBlue text-black font-heading'>{label}</h3>
    </div>
    <h2 className='mx-6 my-3 group-hover:text-darkBlue text-charcoal font-body'>{title}</h2>
    <p className='text-black mx-6 my-2 text-[13px] font-body'>{description}</p>
    </article>
  )
}

export default InfoCard