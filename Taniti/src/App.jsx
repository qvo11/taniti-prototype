import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Explore from './components/Explore'
import Info from './components/Info'
import Accommodations from './components/Accommodations'
import Dining from './components/Dining'
import Transportation from './components/Transportation'
import StartPlanning from './components/StartPlanning'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Info />
    <Explore />
    <Dining />
    <Accommodations />
    <Transportation />
    <StartPlanning />
    <Footer />
    </>
  )
}

export default App



