import React, { useEffect } from 'react'
// import { Coursemodel } from '../../../Backend/Databasemodel/coursemodel';
function Home() {

    const data = [
        {
          "title": "Complete Web development + Devops Cohort",
          "price": '₹5,000',
          'offer': "50% Off",
          imgurl: "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
          ds: "₹10000"
        },
        {
            "title": "Complete Web development + Devops Cohort",
            "price": '₹5000',
            'offer': "50% Off",
            imgurl: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D",
            ds: "₹10000"
          },
        
          {
            "title": "Complete Web3/Blockchain Cohort",
            "price": '₹5000',
            'offer': "50% Off",
            imgurl: "https://plus.unsplash.com/premium_photo-1722945683602-fa3b05086316?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
            ds: "₹10000"
          }
    ]      
  return (
    <div className='  h-auto  flex justify-center items-center py-2 md:ml-[20vw]'>
    <div className='flex flex-col gap-8 '>
    <div className='h-auto w-[95vw]  mt-[80px] rounded-xl overflow-hidden md:w-[60vw] lg:w-[70vw] md:ml-[10vw] lg:ml-[4vw] '>
        <img src="https://appxcontent.kaxa.in/subject/2024-07-07-0.9522250790418232.png" className='object-cover '/>
        
    </div>
    <div className='  '>
        <h1 className='text-center text-xl font-medium  md:ml-[10vw] lg:ml-[0vw] lg:text-3xl'>Featured</h1>
    </div>
    <div className='max-lg:flex-col flex max-md:gap- md:flex md:flex-wrap lg:gap-12 md:w-full max-lg:items-center max-lg:gap-8 lg:ml-[0vw] md:ml-[5vw]'>
        {data.map((item)=>(
            <div className='h-auto lg:h-[25vw] w-[95vw]  bg-white rounded-lg overflow-hidden border-2 border-gray-400 md:w-[50vw] lg:w-[23vw]  '>
                <img src={item.imgurl} className='h-[55%] w-[100%]' />
                <div className='p-4 flex flex-col gap-4'>
                    <div className='md:h-[65px]'>
                <h1 className='font-bold font-lg text-lg'>{item.title}</h1>
                </div>
                <div className='flex justify-between '>
                    <p className='font-bold font-lg text-lg flex items-center justify-center gap-1 '>{item.price} <p className='text-sm line-through text-gray-400'>{item.ds}</p></p>
                    <span className='font-bold font-lg text-green-500 text-lg'>{item.offer}</span>
                </div>
                <div>
                    <button className='w-full bg-blue-500 h-12 rounded-3xl text-white'>View Details</button>
                </div>
</div>
            </div>
        ))}
    </div>
    </div>

    </div>
  )
}

export default Home