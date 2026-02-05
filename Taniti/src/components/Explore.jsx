import React from 'react'
import beaches from '../assets/beaches.jpg'
import rainforest from '../assets/rainforest.jpg'
import volcano from '../assets/volcano.jpg'
import harbor from '../assets/harbor.jpg'
import snorkeling from '../assets/snorkeling.jpg'



const experiences = [
  {
    title: 'Pristine Sandy & Rocky Beaches',
    image: beaches,
    description: 'Relax along sun-drenched sandy shores or explore dramatic rocky coastlines, where crystal-clear waters and breathtaking views define the island’s natural beauty. '
  },
  {
    title: 'Rainforest Adventures',
    image: rainforest,
    description: 'Embark on guided hikes or zip-line through lush rainforests, discovering exotic wildlife, cascading waterfalls, and panoramic vistas that showcase the island’s vibrant ecosystem.'
  },
  {
    title: 'Volcano Tours',
    image: volcano,
    description: 'Explore the island\'s mountainous terrain with guided tours that offer unique insights into the geological wonder and natural beauty of Taniti’s active volcano.'
  },
  {
    title: 'Chartered Fishing Tours',
    image: harbor,
    description: 'Set out on a private fishing excursion guided by local experts, offering an authentic way to experience Taniti’s surrounding waters.'
  },
  {
    title: 'Snorkeling & Coastal Exploration',
    image: snorkeling,
    description: 'Dive into the vibrant underwater world with snorkeling adventures that reveal colorful coral reefs and diverse marine life along Taniti’s coast.'
  },
  {
    title: 'After-Dark Experiences',
    image: null,
    description: 'Experience Taniti after sunset with vibrant pubs, a local microbrewery, and a modern dance club where music, cocktails, and island energy come alive late into the night'
  },
  {
    title: 'Heritage & History',
    image: null,
    description: 'Step into Taniti’s past through engaging exhibits that bring the island’s history and cultural identity to life.'
  }
]

const Explore = () => {
  return (
    <section id='attractions' className='relative bg-white flex items-center flex-col justify-center p-20 scroll-mt-24'>
        <p className='text-sm sm:text-md md:text-lg font-body text-darkBlue tracking-widest mb-3'>
            THE TANITI EXPERIENCE
        </p>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-heading text-charcoal mb-4'>
          Extraordinary Island Adventures</h1>
        <p className='w-2/3 mx-auto text-center text-sm sm:text-base md:text-md font-body text-charcoal-100'>
          From sun-soaked beaches to immersive cultual moments, discover the unique attractions that make Taniti a truly unforgettable destination.</p>
        <div className='mt-4 grid grid-cols-2 gap-5 md:grid-cols-4'>

        </div>
    </section>
  )
}

export default Explore