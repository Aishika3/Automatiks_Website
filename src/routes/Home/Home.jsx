import React from 'react'
import {Navbar,Hero,Footer} from "components"
import {Services} from "features/Services"
import { Projects } from 'features/Projects'
import "./Home.css"

export const Home = () => {
  return (
    <div className='home'>
      <section className='opener'>
        <Navbar/>
        <Hero/>
      </section>
      <Services/>
      <Projects/>
      <Footer/>
    </div>
  )
}
