import About from '@/components/About'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Main from '@/components/Main'
import Nav from '@/components/Nav'
import Profile from '@/components/Profile'
import Service from '@/components/Service'
import Story from '@/components/Story'




import React from 'react'



export default function index() {
  return (
    <div>
      <Nav />
      <Carousel />
      <Gallery />
      <About />

      <Service />
      <Footer />
      {/* <Profile /> */}
  
     
    </div>

  )
}
