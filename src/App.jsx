import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'


function App() {

  return (
    <>
    <div id="container">
      <div id="navbar">{
        <>
        <Link to='/blue'>Blue</Link><br></br>
        <Link to='/red'>Red</Link><br></br>
        <Link to='/'>Home</Link><br></br>
        </>
      }</div>
      <div id="main-section">
      <Routes>
        <Route path='/blue' element={<Blue />}/>
        <Route path='/red' element={<Red />} />
        <Route path='/' element={<Home />} />
      </Routes>
        
    </div>
    </div>
    </>
  )
}

export default App
