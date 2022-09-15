import React from 'react'
import HeroSection from './components/HeroSection'

const Home = () => {
  const data = {
    name: "Safdar Hussain",
    image: "./images/hero.svg",
    para: "I'm Safdar Hussain. A Full stack Developer, Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development."
  }
  return (
    <HeroSection {...data} />
  )
}

export default Home