import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const data = {
    name: "Safdar Hussain",
    image: "./images/about1.png",
    para: "I'm Safdar Hussain. A Full stack Developer, Intend to work in a challenging and competitive environment where a strong sense of responsibility and commitment requires, where the dignity of work provides job satisfaction, and the place of work provides potential avenues for learning."

  };
  return (
    <HeroSection {...data} />
  )
}

export default About