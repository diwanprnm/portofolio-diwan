import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Experiences from '../components/Experiences'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar />
        <Header/>
        <About/>
        <Experiences/>
        <Projects/>
        <Skills/>
        <Education/>
        <Footer/>
    </div>
  )
}

export default Home
