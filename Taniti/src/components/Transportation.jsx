import React from 'react'
import SectionHeader from './SectionHeader'
import TransportCard from './TransportCard'
import airplane from '../assets/airplane.png'
import cruise from '../assets/cruise.png'
import bus from '../assets/bus.png'
import car from '../assets/car.png'
import bike from '../assets/bike.png'

const arrivalOptions = [
    {
        mode: "Arriving by Air",
        icon: airplane,
        description: 'Most visitors reach Taniti by air, with convenient flights into the island’s small but modern airport.',
        points: [
            'Serviced by small jets and propeller aircraft',
            'Located near Taniti City for quick access to accommodations',
            'Airport expansion underway to support larger aircraft in the future'
        ]
    },
    {
        mode: "Arriving by Sea",
        icon: cruise, 
        description: 'For a more scenic arrival, visitors can also reach Taniti by sea, with cruise services connecting the island to nearby ports.',
        points: [
            'Weekly docking at Yellow Leaf Bay',
            'Overnight stop once per week',
            'Easy access to Taniti City and nearby attractions'
        ]
    }
]

const transportationOptions = [
    {
        mode: 'Public Transportation',
        icon: bus,
        description: 'Taniti’s public transportation system includes a network of buses that connect major attractions, beaches, and town centers.',
        points: [
            'Public buses operate in Taniti City from 5 a.m. to 11 p.m. daily',
            'Private buses serve areas beyond the city',
            'Budget-friendly option for exploring local neighborhoods'
        ]
    },
    {
        mode: 'Rental Cars & Taxis',
        icon: car,
        description: 'Visitors can choose rental cars or taxis to explore Taniti at their own pace, with several rental agencies offering a range of vehicles.',
        points: [
            'Taxis readily available throughout Taniti City',
            'Rental cars offered near the airport',
            'Ideal for exploring areas outside the city center'
        ]
    },
    {
        mode: 'Biking & Walking',
        icon: bike,
        description: 'For a more immersive experience, visitors can explore Taniti by bike or on foot, with scenic trails and pedestrian-friendly paths throughout the island.',
        points: [
            'Bikes and helmets available to rent from multiple vendors',
            'Helmets required by law for cyclists',
            'Taniti City and Merriton Landing are flat and pedestrian-friendly'
        ]
    }
]

const Transportation = () => {
  return (
    <section id='transportation' className='relative bg-lightOrange justify-center p-20 scroll-mt-24'>
        <div className='flex flex-col items-center mx-auto max-w-7xl px-6'>
        <SectionHeader
        label='GETTING THERE & AROUND'
        title='Island Transportation'
        description='From arriving by air to exploring the island by bus, bike, or on foot, Taniti offers convenient and flexible transportation options designed to make getting around effortless.'
        />
        </div>

        <div className='items-start'>
        <h3 className='mt-20 text-left text-dustBlue font-heading font-semibold text-md sm:text-lg md:text-xl'>Getting to Taniti</h3>

        <div className='mt-1 grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {arrivalOptions.map((option) => (
            <TransportCard
            key={option.mode}
            mode={option.mode}
            icon={option.icon}
            description={option.description}
            points={option.points}
            />
        ))}
        </div>

        <h3 className='mt-[60px] text-left text-dustBlue font-heading font-semibold text-md sm:text-lg md:text-xl'>Getting Around Taniti</h3>
        <div className='mt-1 grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {transportationOptions.map((option) => (
            <TransportCard
            key={option.mode}
            mode={option.mode}
            icon={option.icon}
            description={option.description}
            points={option.points}
            />
        ))}
        </div>
        </div>

        <div className='mt-8 text-center'>
        <a href='#' className='inline-flex items-centerfont-body text-white rounded-full bg-dustBlue px-5 py-3 mt-8 shadow-xl transition-transform duration-200 ease-out hover:-translate-y-1'>
       Start Your Journey
        </a>
        </div>
    </section>
  )
}

export default Transportation