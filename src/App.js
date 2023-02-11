import React from 'react'
import {Navbar,IntroSection,Services,Work,Projects,Reviews,Contact,Footer}
  from "./components/index"
import "./App.css"
const App = () => {
  return (
    <div className='app_Main' style={{overflowX:"hidden"}}>
      <Navbar/>
      <IntroSection/>
      <Services/>
      <Work/>
      <Projects/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
