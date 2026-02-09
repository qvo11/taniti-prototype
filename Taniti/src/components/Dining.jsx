import React from 'react'
import SectionHeader from './SectionHeader'
import DiningCards from './DiningCards'
import islandfood from '../assets/islandcuisine.jpg'
import asian from '../assets/asian.jpg'
import american from '../assets/american.jpg'
import pub from '../assets/pub.jpg'


const options = [
    {
    title: 'Local Island Cuisine',
    image: islandfood,
    description: 'Discover Taniti’s traditional flavors through fresh-caught fish and locally prepared rice dishes, served in relaxed settings that celebrate island culture.'
    }, 
    {
        title: 'American-Style Dining',
        image: american,
        description: 'Enjoy familiar favorites and comfort classics at casual restaurants offering hearty American-style meals in welcoming, laid-back environments.'
    },
    {
        title: 'Pan-Asian Cuisine',
        image: asian,
        description: 'Experience bold flavors and modern interpretations of Pan-Asian dishes, featuring fresh ingredients and vibrant culinary influences from across the region.'
    },
    {
        title: 'Pubs & Microbrewery',
        image: pub,
        description: 'Unwind at Taniti’s local pubs and microbrewery, where handcrafted drinks, casual bites, and island hospitality create the perfect atmosphere to relax after a day of exploring.'
    }
]

const Dining = () => {
  return (
    <section id='dining' className='relative bg-lightOrange flex items-center flex-col justify-center p-20 scroll-mt-24'>
        <SectionHeader
        label='TASTE OF TANITI'
        title='Culinary Experiences'
        description='From beachfront cafés to upscale restaurants, Taniti’s dining scene blends fresh ingredients, island traditions, and refined culinary craft.'
        />
    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 sm:grid-row-2 gap-6'>
    {options.map((option) => (
        <DiningCards
        key={option.title}
        title={option.title}
        image={option.image}
        description={option.description}
        />
    ))}
    </div>

    <div className='mt-8'>
    <a href='#' className='inline-flex items-centerfont-body text-white rounded-full bg-dustBlue px-5 py-3 mt-8 shadow-xl transition-transform duration-200 ease-out hover:-translate-y-1'>
      Book Reservations
    </a>
    </div>

    </section>
  )
}

export default Dining