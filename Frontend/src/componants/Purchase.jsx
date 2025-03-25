import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios  from 'axios'

function Purchase() {

    const Navigate=useNavigate()
     const [dataa, setdataa] = useState()

     useEffect(() => {
        const getcoursedata = async () => {
          try {
            const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/Home/getpurchasedata`);
            setdataa(res.data.Alldata)
          } catch (err) {
            console.log(err)
          }
        }
    
        getcoursedata()
    
      },)
    


    const ReqHandler=(id)=>{
        switch(parseInt(id)){
            case 1:
                Navigate("/Content");
                break;
            case 2:
                Navigate("/Content");
                break;
            case 3:
                Navigate("/Content")
                break;        
        }
    }



  return (
    <div className='w-full h-auto relative top-[75px]
    md:left-[30vw] lg:left-[21vw] md:top-[95px] md:w-[calc(100vw-35vw)] lg:w-[calc(100vw-23vw)] flex flex-col items-center md:pt-3 pt-3 gap-3'>
      <div className='w-[99%] md:h-8 h-12 p-10 pb-16 '>
        <h1 className=' font-extrabold text-3xl'>My Purchases</h1>
      </div>
      <div className='w-[99%] h-[100%]  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-3'>
        {dataa && dataa.map((item) => (
          <div className='border-[2px] border-gray-300 shadow-xl gap-3 flex flex-col rounded-xl overflow-hidden w-[100%]'>
            <img src={item.imageurl} alt="course1" className='object-cover' />
            <div className='px-2 h-full'>
              <h1 className='font-bold text-lg'>{item.title}</h1>
            </div>
            <p className='px-2 text-gray-400'>{item.info}</p>
            <p className='flex gap-1 justify-between px-2' ><p className='text-lg font-[800]'>{item.price} <span className='text-md font-[600] text-gray-400 line-through'>{item.discount}</span>
            </p>
              <span className='text-green-500 font-bold text-xl'>{item.offer}</span>
            </p>
            <div className='w-full flex justify-center py-3'>
              <button className='bg-blue-600 w-[90%] h-[100%] rounded-3xl py-2.5 text-white font-bold' onClick={() => ReqHandler(item.id)}>View Contents</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Purchase