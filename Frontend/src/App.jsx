import './App.css'
import Nav from './componants/Nav'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './componants/Footer'
import { useEffect } from 'react';
import {userLoginStatevar} from './componants/Statevariable';
import { useRecoilState } from 'recoil';

function App() {
  const [userLogin , setuserLogin] = useRecoilState(userLoginStatevar);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  
          const Requserdata = async() =>
          {
                  setuserLogin(false);
          }
  
          useEffect(() => {
              const token = localStorage.getItem("Token");
              if (!token) {
                  // Navigate("/");
              }
              else
              {
                  Requserdata();
              }
  
          } , [])

  return (
    <>
      <Nav />
      <Outlet/>
      <Footer/>
  
    </>
  )
}

export default App
