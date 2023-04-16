import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Header from './Home/Header/Header'
import Home from './Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Porfo/Portfolio'

const App = () => {
  return (
  <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/portfo' element={<Portfolio/>} />
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
