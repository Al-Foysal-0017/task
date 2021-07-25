import React from 'react'
import { SiGooglecalendar } from 'react-icons/si';
import { IoMdAddCircle } from 'react-icons/io';

const RightSideHome = () => {
    return (
        <>
            <div className="mx-3 mt-3">
                <div style={{width:"314px"}} className="w-full flex justify-center rounded-lg py-4 bg-blue text-white">
                Project management
                </div>
            </div>
            <div className="flex justify-center mt-1">
                <div className="h-full rounded-lg flex justify-center items-center flex-col" style={{background:"#FADBD8", width:"147px", height:"93px"}}>
                    <div className="">190+</div>
                    <div className="text-xs">Project sold</div>
                    </div>
                    <div className="ml-1 h-full rounded-lg flex justify-center items-center flex-col" style={{background:"#FDEBD0", width:"147px", height:"93px"}}>
                        <div className="">500+</div>
                        <div className="text-xs">All Project</div>
                    </div>
            </div>
            <div className="flex justify-center mt-1">
                <div className="h-full rounded-lg flex justify-center items-center flex-col" style={{background:"#F2F3F4", width:"147px", height:"93px"}}>
                    <div className="">300+</div>
                    <div className="text-xs">Project delievered</div>
                </div>
                <div className="ml-1 h-full rounded-lg flex justify-center items-center flex-col" style={{background:"#FADBD8", width:"147px", height:"93px"}}>
                    <div className="">10+</div>
                    <div className="text-xs">Ongoing Project</div>
                </div>
            </div>
            <div className="mx-3 mt-3">
                <div style={{width:"314px"}} className="w-full flex justify-center rounded-lg py-4 bg-yellow text-white">
                Clients
                </div>
            </div>
            <div className="mx-3 mt-1 flex justify-between">
                <div style={{width:"150px", height:"132px"}} className="w-full shadow-2xl flex flex-col justify-center items-center text-secondary rounded-lg py-4 text-white">
                    <img style={{height:"48px", width:"48px", objectFit:"cover"}} className="rounded-full border " src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                    <div>Adam Mali</div>
                </div>
                <div style={{width:"150px", height:"132px"}} className="w-full shadow-2xl flex flex-col justify-center items-center text-secondary rounded-lg py-4 text-white">
                    <img style={{height:"48px", width:"48px", objectFit:"cover"}} className="rounded-full border " src="https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                    <div>Desmond</div>
                </div>
            </div>
            <div className="mx-3 mt-5">
                <div style={{width:"314px", height:"248px"}} className="w-full shadow-2xl flex justify-center rounded-lg py-4 text-white">
                <div className="text-black flex flex-col justify-center items-center">
                <div className="text-2xl mb-10 font-light tracking-wide">Schedle Planning</div>
                <SiGooglecalendar className="animate-bounce cursor-pointer" style={{width:"100px", height:"100px"}}/>
                <div className="absolute text-yellow mt-44 ml-56 cursor-pointer"><IoMdAddCircle style={{width:"40px", height:"40px"}}/></div>
                </div>
                </div>
            </div>
            <div className="mb-3"></div>
        </>
    )
}

export default RightSideHome
