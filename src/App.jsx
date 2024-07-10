import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Quote from './Component/Quote/Quote'

const App = () => {
  return (
    <div>
      <Navbar/>
      <br />
      <hr />
      <Quote/>
      <br />
      <hr />
      <Footer/>
    </div>
  )
}

export default App
