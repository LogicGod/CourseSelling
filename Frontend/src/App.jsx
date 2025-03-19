import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componants/Nav'
import { Outlet } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Footer from './componants/Footer'
import Home from './componants/Home'
import Courses from './componants/Courses'

function App() {
  return (
    <>
   
      <Nav/>
      <Outlet/>
      <Footer/>
  
    </>
  )
}

export default App
