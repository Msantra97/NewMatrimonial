import About from '@/components/About'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Nav from '@/components/Nav'
import Service from '@/components/Service'
import Story from '@/components/Story'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Nav/>
      <Gallery/>
      <About/>
      <Story/>
      <Service/>
      <Footer/>
    </div>
  )
}
