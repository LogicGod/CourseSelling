import React from 'react'

const Content = () => {

    const data = [
        {
            "id": 1,
            "bgurl": "https://app.100xdevs.com/_next/static/media/Content-Cover.16d29b40.png",
            "title": "Content 1",
            "head": "100xDevs"
        },
        {
            "id": 2,
            "bgurl": "https://app.100xdevs.com/_next/static/media/Content-Cover.16d29b40.png",
            "title": "Content 1",
            "head": "100xDevs"
        },
        {
            "id": 3,
            "bgurl": "https://app.100xdevs.com/_next/static/media/Content-Cover.16d29b40.png",
            "title": "Content 1",
            "head": "100xDevs"
        },
        {
            "id": 4,
            "bgurl": "https://app.100xdevs.com/_next/static/media/Content-Cover.16d29b40.png",
            "title": "Content 1",
            "head": "100xDevs"
        },
        {
            "id" : 5,
            "bgurl": "https://app.100xdevs.com/_next/static/media/Content-Cover.16d29b40.png",
            "title": "Content 1",
            "head": "100xDevs"
        },
        {
            "id": 6,
            "bgurl": "https://app.100xdevs.com/_next/static/media/Content-Cover.16d29b40.png",
            "title": "Content 1",
            "head": "100xDevs"
        }
    ]
    return (
        <div className='relative top-[65px] lg:top-[90px] lg:left-[21vw] lg:w-[calc(100vw-23vw)] md:left-[30vw] 
        md:w-[calc(100vw-32vw)] md:top-[80px]'>
        <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-3'>
            {data.map(i => (
                <div className='flex flex-col gap-2 transition-all ease-out duration-30 hover:-translate-y-2'>
                <div className='relative overflow-hidden rounded-3xl lg:h-[25vh] h-[30vh]'>
                    <img src={i.bgurl} className={` h-[30vh] lg:h-[25vh] bg-no-repeat w-full absolute object-center `} alt="" />
                    <div className='relative flex flex-col justify-center items-center h-full'>
                    <h1 className='text-white p-2 backdrop-blur-3xl rounded-full'>{i.head}</h1>
                    <h2 className='lg:top-[25vh] text-white'>{i.title}</h2>
                    </div>
                </div>
                <h1 className='text-2xl font-bold'>{i.title}</h1>
                </div>
            ))}



        </div>
    </div>
    )
}

export default Content