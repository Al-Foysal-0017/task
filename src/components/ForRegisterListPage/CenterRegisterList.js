import React from 'react'
import { IoSearch } from 'react-icons/io5';

const LeftSideHome = () => {
    return (
        <>
            <div className="flex mx-3 mb-3 flex-col mt-5">
                    <div className="flex text-black">
                        <input className="border rounded-lg pl-3 pr-10 py-1 w-full"/>
                        <div className="mt-1">
                        <IoSearch style={{marginLeft:"-30px", height:"25px", width:"25px", color:"gray"}}/> 
                        </div>
                    </div>
            </div>
            

            <div className="bg-white shadow-md rounded-lg py-2 mx-3 mt-2 px-2 flex justify-between items-center text-black">
                <div className="flex">
                <img style={{height:"70px", width:"70px", objectFit:"cover"}} className="rounded-full border-2 border-white" src="https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                <div className="pl-2 flex flex-col justify-center">
                    <div className="text-sm font-semibold">Emil Duvan</div>
                    <div className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</div>
                </div>
                </div>
                <div className="text-sm text-gray-500">11:30 AM</div>
            </div>
            <div className="rounded-lg py-2 mx-3 mt-2 px-2 flex justify-between items-center text-black">
                <div className="flex">
                <img style={{height:"70px", width:"70px", objectFit:"cover"}} className="rounded-full border-2 border-white" src="https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                <div className="pl-2 flex flex-col justify-center">
                    <div className="text-sm font-semibold">Emil Duvan</div>
                    <div className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</div>
                </div>
                </div>
                <div className="text-sm text-gray-500">11:30 AM</div>
            </div>
            <div className="rounded-lg py-2 mx-3 mt-2 px-2 flex justify-between items-center text-black">
                <div className="flex">
                <img style={{height:"70px", width:"70px", objectFit:"cover"}} className="rounded-full border-2 border-white" src="https://images.pexels.com/photos/997472/pexels-photo-997472.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                <div className="pl-2 flex flex-col justify-center">
                    <div className="text-sm font-semibold">Emil Duvan</div>
                    <div className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</div>
                </div>
                </div>
                <div className="text-sm text-gray-500">11:30 AM</div>
            </div>
            <div className="rounded-lg py-2 mx-3 mt-2 px-2 flex justify-between items-center text-black">
                <div className="flex">
                <img style={{height:"70px", width:"70px", objectFit:"cover"}} className="rounded-full border-2 border-white" src="https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                <div className="pl-2 flex flex-col justify-center">
                    <div className="text-sm font-semibold">Emil Duvan</div>
                    <div className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</div>
                </div>
                </div>
                <div className="text-sm text-gray-500">11:30 AM</div>
            </div>
            <div className="rounded-lg py-2 mx-3 mt-2 px-2 flex justify-between items-center text-black">
                <div className="flex">
                <img style={{height:"70px", width:"70px", objectFit:"cover"}} className="rounded-full border-2 border-white" src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                <div className="pl-2 flex flex-col justify-center">
                    <div className="text-sm font-semibold">Emil Duvan</div>
                    <div className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</div>
                </div>
                </div>
                <div className="text-sm text-gray-500">11:30 AM</div>
            </div>
            <div className="rounded-lg py-2 mx-3 mt-2 px-2 flex justify-between items-center text-black">
                <div className="flex">
                <img style={{height:"70px", width:"70px", objectFit:"cover"}} className="rounded-full border-2 border-white" src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                <div className="pl-2 flex flex-col justify-center">
                    <div className="text-sm font-semibold">Emil Duvan</div>
                    <div className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</div>
                </div>
                </div>
                <div className="text-sm text-gray-500">11:30 AM</div>
            </div>
            <div className="mb-5"></div>
                
                
        </>
    )
}

export default LeftSideHome
