import About from '@/components/About'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Nav from '@/components/Nav'
import Profile from '@/components/Profile'
import Service from '@/components/Service'
import Story from '@/components/Story'
import React from 'react'

export default function Home() {
  return (
    <div className='w-screen'>
    <Nav/>
    <Carousel/>
      <Gallery/>
      <About/>
      <Story/>
      <Service/>
      <Footer/>
      {/* <Profile/>
       */}

       
    </div>
  )
}
