import React from 'react'
import Navbar from './Components/Navbar'
import Landingpage from './Components/Landingpage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import {HashRouter} from "react-router-dom"

function page() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <HashRouter>
    <div className='w-full min-h-screen bg-[#F1F1F1]'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes /> 
      <Featured />
      <Cards />
      <Footer />
    </div>
    </HashRouter>
  )
}

export default page