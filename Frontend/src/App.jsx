import './App.css'
import Nav from './componants/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './componants/Footer'

function App() {
  return (
    <>
   
      <Nav/>
      <Outlet/>
      {/* <Footer/> */}
  
    </>
  )
}

export default App
