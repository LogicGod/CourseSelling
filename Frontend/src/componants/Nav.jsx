import React, { useEffect, useRef, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiSignIn } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { CgDarkMode } from "react-icons/cg";
import { FaDownload } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import Signup from './Signup';
import { useRecoilState } from 'recoil';
import SignIn from './SignIn';
import { Link, NavLink } from 'react-router-dom';
import {SignInatom, Signupatom, Theme, userLoginStatevar} from './Statevariable';
import { useNavigate } from 'react-router-dom';


function Nav() {
  const navigate = useNavigate();

  const [slider,setslider]=useState(false)
  const [ShowSignup , SetSignUp] = useRecoilState(Signupatom);
  const [ShowSignIn , SetSignIn] = useRecoilState(SignInatom);
  const [userLogin , SetuserLogin] = useRecoilState(userLoginStatevar);
 
  const outside = useRef();
  const outsideclick = (e) =>
  {
      if(outside.current === e.target)
      {
        setslider(false)
      }
  }

  const [theme,setTheme]=useRecoilState(Theme);
  const[image,setImage]=useState(<MdLightMode />)
  
  const themeToggle=()=>{
    if(theme === 'dark'){ 
      setTheme('light') 
      setImage(<MdLightMode />)
    }else{
      setTheme('dark')
      setImage(<CgDarkMode className='' />)
    }
  }
  useEffect(()=>{
    document.body.className=theme;
   
  },[theme]);


  const Logoutuser = () =>
    {
      localStorage.removeItem("Token");
      SetuserLogin(true);
      navigate("/");
    }
 

  return (
    <>
       <div className={`${theme =="dark" ? "bg-[#0A0B10]" : "bg-white"} fixed w-full h-16 md:h-20  shadow-xl border-b-2 border-gray-300   p-2 md:px-8 flex justify-between items-center z-20 `}>
        <div className='flex gap-2'>
            <div>
        <IoIosMenu className='w-[50px] h-[50px] md:hidden ' onClick={()=>setslider(!slider)}/>
        </div>
        <CgProfile className='w-[50px] h-[50px] '/>
        </div>
        <div className='md:block hidden'>
        <div className=' flex h-12' >
            <input type="text" placeholder='Search.... ' 
            className='hidden md:block w-72 p-2 rounded-3xl border-2 border-gray-200 rounded-r-none outline-none'
            onFocus={(e) =>
            {
              e.target.style.border='2px solid #87B7FE';
            }
            }
            onBlur={(e) =>
            {
              e.target.style.border='2px solid #e5e7eb'
            }
            } />
            <div className='flex justify-center items-center bg-white h-12 rounded-r-3xl w-14 border-2 border-l-0 cursor-pointer border-gray-200 text-black  '><CiSearch className='w-6 h-6 '/> </div>
            <div className=' flex gap-4 mx-4 justify-center items-center'>
              <button className={`${userLogin ? 'visible' : 'hidden'} w-28 h-12 rounded-full text-xl  text-[#E7EEF8] bg-[#146FE6] hover:bg-[#184581]`}
              onClick={() => SetSignUp(!ShowSignup)}>SignUp</button>
              <button onClick={()=>SetSignIn(!ShowSignIn)} className={`${userLogin ? 'visible' : 'hidden'} w-28 h-12 rounded-full text-xl  text-[#E7EEF8] bg-[#146FE6] hover:bg-[#184581]`}>Login</button>
              <RiAccountCircleFill className={`${userLogin ? 'hidden' : 'visible'} w-[50px] h-[50px] text-black`}/>
            </div>
        <div className='flex justify-center items-center text-2xl '>
        <button onClick={themeToggle}  className=' '>{image} </button>
        </div>
        </div>
        </div>
        <div className='md:hidden flex  justify-center items-center gap-2 '>
        <CiSearch className='w-8 h-8 text-black' />
        <PiSignIn className={`${userLogin ? 'visible' : 'hidden'} w-8 h-8 text-black`} />
        <RiAccountCircleFill className={`${userLogin ? 'hidden' : 'visible'} w-[50px] h-[50px] text-black`}/>
        </div>
        </div> 

        {/* Menue Bar Started */}
        <div ref={outside} onClick={outsideclick} className={`fixed inset-0 bg-transparent ${slider ? 'block' : 'hidden'}`}></div>
        <div className={`max-md:transition-transform max-md:duration-500 max-md:ease-in-out fixed top-16 
          ${slider ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'} ${theme === "dark" ? "bg-[#0A0B10]" : "bg-[#E8F1FD]"} w-[60vw] md:w-[30vw] lg:w-[20vw] h-[calc(100vh-64px)] 
          p-10 flex  flex-col gap-8 shadow-xl border-r-2 border-gray-300 text-xl z-10`}>
          <h1 className='font-bold text-gray-500 text-lg'>Main Menu</h1>
          <div className='flex gap-2  text-gray-700 items-center '>
       
            <NavLink to='/'  className={({isActive}) =>
                                        
            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500 font-bold" : " text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 flex gap-2 items-center`
        } >
             <IoHome />
          
          
          <p className='hover:text-[#146FE6] cursor-pointer'>Home</p></NavLink>
          </div>
          <div className='flex gap-2  text-gray-700 items-center'>
            <NavLink
             to='/Course'
             className={({isActive}) =>
                                        
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500 font-bold" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 flex gap-2 items-center`
          }
             >  <RiGraduationCapFill className='' />
             <p className='hover:text-[#146FE6] cursor-pointer'>Course</p></NavLink>
          </div>
          <div className={`${userLogin ? "hidden" : "visible"} border-[1px] border-gray-300`}></div>
          <div className={`${userLogin ? "hidden" : "visible  "} ? "visible" : "hidden"} 'flex gap-2  text-gray-700 items-center`}>
            <NavLink
             to='/Purchase'
             className={({isActive}) =>
                                        
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500 font-bold" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 flex gap-2 items-center`
          }
             >  <FaDownload />
             <p className='hover:text-[#146FE6] cursor-pointer'>Purchase</p></NavLink>
          </div>
          <div className={` ${userLogin ? "hidden" : "visible"} flex gap-2  text-gray-700 items-center`}>
    
          <LuLogOut />
             <p className=" hover:text-[#146FE6] cursor-pointer" onClick={Logoutuser}>Logout</p>
          </div>
          <div className=' flex flex-col gap-8 md:hidden '>
              <button className={`${userLogin ? 'visible' : 'hidden'} w-32 h-10 rounded-full text-lg  text-[#E7EEF8] bg-[#146FE6] hover:bg-[#184581]`} 
              onClick={() => SetSignUp(!ShowSignup)}>SignUp</button>
              <button className={`${userLogin ? 'visible' : 'hidden'} w-32 h-10 rounded-full text-lg  text-[#E7EEF8] bg-[#146FE6] hover:bg-[#184581]`}onClick={() => SetSignIn(!ShowSignIn)} >Login</button>
            </div>
        </div>
        {ShowSignup && <Signup/>}
        {ShowSignIn && <SignIn/>}
      </>
  )


}

export default Nav