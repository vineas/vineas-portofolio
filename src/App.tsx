import { useState } from 'react'
import Intro from './components/Intro'
import Portofolio from './components/Portofolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Intro/>
      <Portofolio/>
      <Timeline/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
