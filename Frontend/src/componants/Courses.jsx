import React from 'react'
function Courses() {
    const data=[
        {
            img:"https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png",
            title:"Complete Web Development + Devops + Blockchain Cohort",
            info:"Complete syllabus -https://blog.100xdevs.com/ Starts 2nd Au..",
            prise:"₹5,989",
            discount:"₹8,499",
            offer:"30% off"
        },
        {
            img:"https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.40079486154772104.png",
            title:"Complete Web development + Devops Cohort",
            info:"Starts 2nd August 2024 Complete syllabus - https://blog.100x..",
            prise:"₹4,989",
            discount:"₹5,999",
            offer:"17% off"
        },
        {
            img:"https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png",
            title:"Complete Web3/Blockchain Cohort",
            info:"Complete syllabus - https://blog.100xdevs.com/ Starts 2nd Au..",
            prise:"₹4,989",
            discount:"₹5,999",
            offer:"17% off"
        },
        {
            img:"https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png",
            title:"Complete Web Development Cohort",
            info:"Complete syllabus - https://blog.100xdevs.com/ Starts 2nd Au..",
            prise:"₹2,989",
            discount:"₹3,999",
            offer:"26% off"
        },
        {
            img:"https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png",
            title:"Complete Devops Cohort",
            info:"Complete syllabus - https://blog.100xdevs.com/ In the Devops..",
            prise:"₹2,989",
            discount:"₹3,999",
            offer:"26% off"
        },
        {
            img:"https://appx-wsb-gcp-mcdn.akamai.net.in/teachcode/admin/COURSE/cover/1699610005757WhatsApp-Image-2023-11-10-at-3.16.18-PM.jpeg",
            title:"Live 0-100 Complete",
            info:"Go from 0 to 100 with Harkirat Singh Live. Learn basics to a..",
            prise:"₹5,589",
            discount:"₹7,999",
            offer:"31% off"
        },
        {
            img:"https://appx-wsb-gcp-mcdn.akamai.net.in/teachcode/admin/COURSE/cover/1699610063563WhatsApp-Image-2023-11-08-at-8.31.14-PM.jpeg",
            title:"Live 0-1",
            info:"Complete 0-1 journey of coding Live with Harkirat Singh. Lea..",
            prise:"₹3,489",
            discount:"₹5,999",
            offer:"42% off"
        },
        {
            img:"https://appx-wsb-gcp-mcdn.akamai.net.in/teachcode/admin/COURSE/cover/1699610081268WhatsApp-Image-2023-11-08-at-8.31.13-PM.jpeg",
            title:"Live 1-100",
            info:"In the 1-100 journey, learn advanced Backend communication, ..",
            prise:"₹3,989",
            discount:"₹5,999",
            offer:"34% off"
        },
        {
            img:"https://appx-wsb-gcp-mcdn.akamai.net.in/teachcode/admin/COURSE/cover/1699610081268WhatsApp-Image-2023-11-08-at-8.31.13-PM.jpeg",
            title:"Live Full Stack Open Source Cohort 1 (Finished)",
            info:"Learn by doing open source contributions The course is led b..",
            prise:"₹3,989",
            discount:"₹4,999",
            offer:"21% off"
        },
    ]
  return (
    <div className='w-full h-[calc(100vh-80px)] relative top-[75px] 
    md:left-[30vw] lg:left-[21vw] md:top-[95px] md:w-[calc(100vw-30vw)] lg:w-[calc(100vw-23vw)] flex flex-col items-center md:pt-3 pt-3 gap-3'>
      <div className='w-[99%] md:h-8 h-12'>
          <h1 className='text-center font-extrabold text-3xl'>Courses</h1>
      </div>
      <div className='w-[99%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-3'>
        {data.map((item) => (
          <div className='border-[2px] border-gray-300 shadow-xl gap-3 flex flex-col rounded-xl overflow-hidden w-[100%]'>
              <img src={item.img} alt="course1" className='object-cover'/>
              <div className='px-2 h-full'>
            <h1 className='font-bold text-lg'>{item.title}</h1>
          </div>
          <p className='px-2 text-gray-400'>{item.info}</p>
          <p className='flex gap-1 justify-between px-2' ><p className='text-lg font-[800]'>{item.prise} <span className='text-md font-[600] text-gray-400 line-through'>{item.discount}</span>
          </p> 
          <span className='text-green-500 font-bold text-xl'>{item.offer}</span>
          </p>
          <div className='w-full flex justify-center py-3'>
            <button className='bg-blue-600 w-[90%] h-[100%] rounded-3xl py-2.5 text-white font-bold'>View Details</button>
          </div>
          </div>
              ))}
      </div>
    </div>

  )
}

export default Courses