import React from 'react'
import Clients from '../components/Clients'
import { NavLink } from 'react-router-dom'
import Vision from '../components/Vision'
import Agile from '../components/Agile'
import Images from './Images'
import CarouselComp from './Carousel'
import Footer from './Footer'
import Project from './Project'
const Home = () => {
  return (
    <div>
      <CarouselComp/>
      {/* <Project/> */}
      <Vision/>
      <Clients/>
      <Agile/>
      {/* <NavLink to="/project">View Our Projects</NavLink> */}
    </div>
  )
}

export default Home