import React from 'react'

const TransportCard = ({ mode, icon, description, points }) => {
  return (
    <article className='group flex flex-col h-full rounded-lg bg-white shadow-md transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg m-3'>
    <div className='h-12 flex items-center mx-6 mt-7'>
    <img src={icon} alt={mode} className='h-10 shrink-0 w-auto'></img>
    </div>
    <h3 className='mx-6 my-3 group-hover:text-darkBlue text-charcoal font-heading'>{mode}</h3>

    <p className='text-black mx-6 my-2 text-sm font-body'>{description}</p>

    <ul className="m-6 space-y-2 text-sm text-charcoal">
    {points.map((point, index) => (
      <li key={index} className="text-charcoal/85 flex items-start gap-2">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-darkBlue" />
        <span className='text-[14px]'>{point}</span>
      </li>
    ))}
  </ul>
  </article>

  )
}

export default TransportCard