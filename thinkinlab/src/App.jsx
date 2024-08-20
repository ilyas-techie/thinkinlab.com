import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Schools from './pages/unused pages/Schools'
import Lab from './pages/Schools/Lab'
import ATL from './pages/Schools/ATL'
import NavBlackTheme from './components/NavBlackTheme'
import School from './pages/School'
import College from './pages/College'




function App() {


  return (
    <> 
    <div className='whole-bg'>
  <NavBlackTheme />

    <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/schools" element={<School/>}/>
    <Route path="/colleges" element={<College/>}/>

    </Routes>
    </div>
    </>
  )
}

export default App
