import React from 'react'
import SectionHeader from './SectionHeader'
import InfoCard from './InfoCard'
import currency from '../assets/coin.png'
import language from '../assets/languages.png'
import climate from '../assets/climate-change.png'
import plug from '../assets/plug.png'
import timezone from '../assets/time-zone.png'
import alcohol from '../assets/alcoholic.png'

const info = [
    {
        label: 'Currency',
        title: 'US Dollar (USD)',
        description: 'The US Dollar (USD) is the official currency of Taniti. Yen and Euros are also widely accepted. Local banks offer currency exchange services, and ATMs are available in major towns and tourist areas.',
        icon: currency
    }, 
    {
        label: 'Language',
        title: 'English & Tanitian',
        description: 'English is widely spoken in Taniti, making it easy for international visitors to communicate. The local language, Tanitian, is mostly spoken in rural areas and reflects the island’s rich cultural heritage.',
        icon: language
    },
    {
        label: 'Time Zone',
        title: 'Pacific Standard Time (PST)',
        description: 'Taniti operates on Pacific Standard Time (PST), which is UTC-8. Visitors should adjust their schedules accordingly to make the most of their time on the island.',
        icon: timezone
    }, 
    {
        label: 'Power & Connectivity',
        title: '120V/ 60Hz',
        description: 'Taniti uses 120V electrical outlets with 60Hz frequency. Hotels and accommodations utilize type A & B plus and provide standard US-style outlets. Visitors should bring appropriate adapters if their devices are not compatible.',
        icon: plug
    }, 
    {
        label: 'Climate',
        title: 'Tropical Paradise',
        description: 'Taniti enjoys a tropical climate with warm temperatures year-round. The dry season from December to April offers sunny days and calm seas, while the wet season from May to November brings lush greenery and occasional showers.',
        icon: climate
    }, 
    {
        label: 'Alcohol Laws',
        title: 'Legal Drinking Age 18+',
        description: 'The legal drinking age in Taniti is 18 years old. Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m. Visitors should carry valid identification when purchasing alcohol, and be aware of local customs and regulations regarding alcohol consumption.',
        icon: alcohol
    }
]

const StartPlanning = () => {
  return (
    <article id='planning' className='max-w-7xl mx-auto gap-6 py-16 bg-white scroll-mt-24'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center px-8'>
    <div className='flex flex-col items-center '>
      <SectionHeader
        label='GETTING STARTED'
        title='Start Planning Your Visit'
        description='Ready to plan your dream vacation to Taniti? Explore our resources, tips and essential information to help you make the most of your time on the island.'
      />
    <div className='flex flex-col sm:flex-row gap-4 justify-center mt-4'>
    <a href='#' className='inline-flex items-centerfont-body text-white rounded-full bg-dustBlue px-5 py-3 mt-8 shadow-xl transition-transform duration-200 ease-out hover:-translate-y-1'>
      Start Planning
    </a>
    <a href='#' className='inline-flex items-centerfont-body text-white rounded-full bg-dustBlue px-5 py-3 mt-8 shadow-xl transition-transform duration-200 ease-out hover:-translate-y-1'>
      Explore the Travel Guide
    </a>
    </div>
    </div>
    <div className='grid grid-cols-2 gap-6 mt-10'>
    {info.map((item) => (
        <InfoCard
        key={item.label}
        label={item.label}
        title={item.title}
        description={item.description}
        icon={item.icon}
        />
    ))}
    </div>
    </div>
    </article>
  )
}

export default StartPlanning