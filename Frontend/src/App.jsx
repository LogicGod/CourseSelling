import './App.css'
import Nav from './componants/Nav'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './componants/Footer'
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Nav />
      <Outlet/>
      <Footer/>
  
    </>
  )
}

export default App
