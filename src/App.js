import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experiance from './Components/Experience'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experiance/>
      <Contact/>
      <Footer/>
    </div>
    <Toaster/>
    </>
  )
}

export default App

