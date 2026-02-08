import React from 'react'
import ExperienceCard from './ExperienceCard'
import SectionHeader from './SectionHeader'
import beaches from '../assets/beaches.jpg'
import rainforest from '../assets/rainforest.jpg'
import volcano from '../assets/volcano.jpg'
import harbor from '../assets/harbor.jpg'
import snorkeling from '../assets/snorkeling.jpg'
import nightlife from '../assets/nightlife.jpg'
import museum from '../assets/museum.jpg'
import helicopter from '../assets/helicopter.jpg'


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
    image: nightlife,
    description: 'Experience Taniti after sunset with vibrant pubs, a local microbrewery, and a modern dance club where music, cocktails, and island energy come alive late into the night'
  },
  {
    title: 'Heritage & History',
    image: museum,
    description: 'Step into Taniti’s past through engaging exhibits that bring the island’s history and cultural identity to life.'
  },
  {
    title: 'Helicopter Tours',
    image: helicopter,
    description: 'Take to the skies for a breathtaking helicopter ride that reveals Taniti’s beaches, rainforest, and volcanic landscape from above.'
  }
]

const Explore = () => {
  return (
    <section id='attractions' className='relative bg-white flex items-center flex-col justify-center p-20 scroll-mt-24'>
      <SectionHeader
        label='THE TANITI EXPERIENCE'
        title='Island Adventures'
        description='From sun-soaked beaches to immersive cultual moments, discover the unique attractions that make Taniti a truly unforgettable destination.'
        />

        <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4'>
          {experiences.map((exp) => (
            <ExperienceCard
            key={exp.title}
            title={exp.title}
            image={exp.image}
            description={exp.description}
            />
          ))}
        </div>
        <div className='mt-6'>
        <a href='#' className='inline-flex items-centerfont-body text-white rounded-full bg-dustBlue px-5 py-3 mt-8 shadow-xl transition-transform duration-200 ease-out hover:-translate-y-1'>
          Explore More
        </a>
        </div>

    </section>
  )
}

export default Explore