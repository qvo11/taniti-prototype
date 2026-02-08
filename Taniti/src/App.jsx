import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Explore from './components/Explore'
import Info from './components/Info'
import Accommodations from './components/Accommodations'
import Dining from './components/Dining'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Info />
    <Explore />
    <Dining />
    <Accommodations />
    </>
  )
}

export default App



