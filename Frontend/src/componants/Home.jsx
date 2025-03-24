import React, { useEffect, useState } from 'react'
// import { Coursemodel } from '../../../Backend/Databasemodel/coursemodel';
import axios from 'axios';
import Footer from './Footer';
import { Navigate, useNavigate } from 'react-router-dom';
import first from '../assets/first.png'
import second from '../assets/second.png'
import third from '../assets/third.png'

function Home() {
    const Navigate=useNavigate();

    const [Data1 , setData1] = useState([]); 
    const[index,setIndex]=useState(0)
    const[images,setImages]=useState([first,second,third]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex >=2 ? 0 : prevIndex + 1));
        }, 7000);
    
        return () => clearInterval(intervalId); // Clear the interval on unmount
    }, []);

     useEffect(() => {       
    const getData = async() =>
        {
          try{
          const res = await axios.get("http://localhost:3000/Home/gethomedata");
  
            setData1(res.data.Alldata);
            console.log(res.data);
            }
        catch(e)
        {
            console.log(e.res);
            
        }
        } 
        

              getData();

      } , []);



      const ReqHandler=(id)=>{
        switch(parseInt(id)){
            case 1:
                Navigate("/Webdev");
                break;
            case 2:
                Navigate("/Androiddev");
                break;
            case 3:
                Navigate("/Iosdev")
                break;
        }

      }




  return (
    <div className='  h-auto  flex justify-center items-center py-4 md:ml-[20vw]'>
    <div className='flex flex-col gap-8 '>
    <div className='h-auto w-[95vw]  mt-[80px] rounded-xl overflow-hidden md:w-[60vw] lg:w-[70vw] md:ml-[10vw] lg:ml-[1vw]  '>
        <img src={images[index]} className={`object-cover  transform: translateX(-${index * 100}%) transition: transform 0.5s ease-in-outtransform: translateX(-${index * 100}%) transition: transform 0.5s ease-in-out`}/>
        <div className=' flex  justify-center gap-6 pt-4 cursor-pointer '>
        <button className='bg-gray-500 cursor-pointer hover:bg-black p-1 rounded-full' onClick={()=> setIndex(0)}></button>
        <button className='bg-gray-500 cursor-pointer hover:bg-black p-1 rounded-full' onClick={()=> setIndex(1)}></button>
        <button className='bg-gray-500 cursor-pointer hover:bg-black p-1 rounded-full' onClick={()=> setIndex(2)}></button>
        </div>
        
    </div>
    <div className='  '>
        <h1 className='text-center text-xl font-medium  md:ml-[10vw] lg:ml-[0vw] lg:text-3xl'>Featured</h1>
    </div>
    <div className='max-lg:flex-col flex max-md:gap- md:flex md:flex-wrap lg:gap-1 md:w-full max-lg:items-center max-lg:gap-8 lg:ml-[0vw] md:ml-[5vw]'>
        { Data1 && Data1.map((item)=>(
            <div className='h-auto  w-[95vw]  rounded-lg overflow-hidden border-2 border-gray-400 md:w-[50vw] lg:w-[25vw] xl:h-[30vw]  lg:h-[40vh]  '>
                <img src={item.imageurl} className='h-[55%] w-[100%]' />
                <div className='p-4 flex flex-col gap-4'>
                    <div className='md:h-[65px]'>
                <h1 className='font-bold font-lg text-lg'>{item.title}</h1> 
                </div>
                <div className='flex justify-between '>
                    <p className='font-bold font-lg text-lg flex items-center justify-center gap-1 '>{item.price} <p className='text-sm line-through text-gray-400'>{item.discount}</p></p>
                    <span className='font-bold font-lg text-green-500 text-lg'>{item.offer}</span>
                </div>
                <div>
                    <button className='w-full bg-blue-500 h-12 rounded-3xl text-white' onClick={()=>ReqHandler(item.id)}>View Details</button>
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