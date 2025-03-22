import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";

function Footer() {
  return (
    <div className='p-2 pt-20 lg:pt-24 '>
      <div className='dark w-[95vw] h-auto p-9 rounded-xl shadow-xl lg:w-[75vw] lg:ml-[21vw] lg:h-[auto] lg:flex lg:justify-between lg:p-12 md:w-[65vw] md:ml-[30vw]'>
        <div className='pb-20'>
        <CgProfile className='w-[30vw] h-[30vw] lg:w-[5vw] lg:h-[5vw] md:w-[15vw] md:h-[15vw] '/>
        </div>
        <div className='flex flex-col gap-2 pb-10 md:gap-3 md:pb-20 '>
          <h1 className='text-xl font-bold md:text-3xl'>Quick Links</h1>
          <a href=""  className='text-lg text-blue-500 underline md:text-2xl'>Terms & Conditions</a>
          <a href="" className='text-lg text-blue-500 underline md:text-2xl'>Privacy & Policy</a>
          <a href="" className='text-lg text-blue-500 underline md:text-2xl'>Refunds & Cancellation policy</a>
        </div>
        <div className='flex flex-col'>
        <div>
          <h1 className='text-xl font-bold pb-5  md:text-3xl'>Download App</h1>
          <img src="https://harkirat.classx.co.in/google-play.svg" alt=""  />
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-bold pt-4 md:text-3xl md:pt-10'>Follow Us</h1>
          <div className='flex gap-3 text-2xl md:text-3xl pb-3 md:pb-7'>
          <FaXTwitter />
          <FaMapMarkerAlt />
          <FaYoutube />
          <SlSocialInstagram />
          </div>
        </div>
        <div className='flex '>
          <h1 className='text-xl md:text-3xl'>Powered By</h1>
          <img src="" alt="" />
        </div>
        </div>

      </div>

    </div>
  )
}

export default Footer