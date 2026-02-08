import React from 'react'
import StayCard from './StayCard'
import SectionHeader from './SectionHeader'
import bnb from '../assets/bed-and-breakfast.png'
import hotel from '../assets/hotel.png'
import key from '../assets/key.png'
import resort from '../assets/resort.png'

const accommodations = [
    {
        title: 'Bed & Breakfasts',
        icon: bnb,
        description: 'Charming and personal accommodations offering a cozy, locally inspired stay.',
        points: [
            'Locally hosted with personalized service',
            'Freshly prepared breakfasts included',
            'Quiet, residential island settings'
        ],
        price: '$140'
    },
    {
        title: 'Vacation Rentals',
        icon: key,
        description: 'Ideal for privacy and flexibility, vacation rentals allow travelers to experience Taniti at their own pace.',
        points: [
            'Private homes or villas with full kitchens',
            'Flexible accommodations for families or groups',
            'Options ranging from beachfront villas to secluded retreats'
        ],
        price: '$215'
    },
    {
        title: 'Hotels',
        icon: hotel,
        description: 'Comfortable and centrally located, offering modern amenities and easy access to island attractions.',
        points: [
        'On-site dining and concierge services',
        'Central locations near beaches and town centers',
        'Daily housekeeping and guest services'],
        price: '$180'
    },
    {
        title: 'Resorts',
        icon: resort,
        description: 'Elevated, immersive stays designed for relaxation, luxury, and unforgettable island experiences.',
        points: [
            'Beachfront locations and expansive pools',
            'Full-service spas, fine dining, and activities',
            'All-inclusive and luxury packages available'
        ],
        price: '$300'
    }

]

const Accommodations = () => {
  return (
    <section id='accommodations' className='relative bg-white flex items-center flex-col justify-center p-20 scroll-mt-24'>
      <SectionHeader
        label='YOUR ISLAND STAY'
        title='Island Accommodations'
        description='From beachfront hideaways to thoughtfully appointed island resorts, discover thoughtfully designed stays that blend comfort, elegance, and the natural beauty of Taniti.'
    />

    <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4'>
      {accommodations.map((item) => (
        <StayCard
        key={item.title}
        title={item.title}
        icon={item.icon}
        description={item.description}
        points={item.points}
        price={item.price}
        />
      ))}
    </div>
    
    <div className='mt-8'>
    <a href='#' className='inline-flex items-centerfont-body text-white rounded-full bg-dustBlue px-5 py-3 mt-8 shadow-xl transition-transform duration-200 ease-out hover:-translate-y-1'>
      View More Stay Options
    </a>
    </div>

</section>
  )
}

export default Accommodations