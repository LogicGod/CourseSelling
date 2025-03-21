import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './componants/Home.jsx'
import Courses from './componants/Courses.jsx'
import { RecoilRoot } from 'recoil'
// import Content from './componants/Content.jsx'
import Androiddev from './CourseComponent/Androiddev.jsx'
import Webdev from '../src/CourseComponent/Webdev.jsx'
import Iosdev from './CourseComponent/Iosdev.jsx'
import Content from './componants/Content.jsx'
import Systemdes from './CourseComponent/Systemdes.jsx'
import Aiml from './CourseComponent/Aiml.jsx'
import Cybersecurity from './CourseComponent/Cybersecurity.jsx'
import Uiux from './CourseComponent/Uiux.jsx'
import Operatingsys from './CourseComponent/Operatingsys.jsx'
import Purchase from './componants/Purchase.jsx'
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={  <RecoilRoot><App/></RecoilRoot>}>
      <Route path='' element={<Home/>}/>
      <Route path='Course' element={<Courses/>}/>
      <Route path='Content' element={<Content/>}/>
      <Route path='Purchase' element={<Purchase/>}/>
      <Route path='Webdev' element={<Webdev/>}/>
      <Route path='Androiddev' element={<Androiddev/>}/>
      <Route path='Iosdev' element={<Iosdev/>}/>
      <Route path='Systemdesign' element={<Systemdes/>}/>
      <Route path='Aiml' element={<Aiml/>}/>
      <Route path='Cybersecurity' element={<Cybersecurity/>}/>
      <Route path='Uiux' element={<Uiux/>}/>
      <Route path='Operatingsystem' element={<Operatingsys/>}/>
    </Route>
  )

)



createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  
)
