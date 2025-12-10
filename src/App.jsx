import React from 'react'
import Navbar from './Components/Header/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/footer';


const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
    <Services/>
    <MyWork/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App