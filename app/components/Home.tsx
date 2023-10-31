import React from 'react'
import NavBar from '../navbar/page'
import Footer from './Footer'
import Carousel from './Carousel'
// import Login from './Login'
import Slider from './Slider'
import {SliderData} from './SliderData'

const Home = () => {
  return (
    <>
     <NavBar/>
      {/* <Login /> */}
      <Carousel/>
      <Slider slides={SliderData} />
      <Footer/>
    </>
  )
}

export default Home