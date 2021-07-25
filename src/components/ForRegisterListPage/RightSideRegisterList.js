import React from 'react'
import {FaTelegramPlane } from 'react-icons/fa';

const RightSideRegisterList = () => {
    return (
        <>
            <div className="">
                    <div className="">
                    <div className="py-2 mx-3 mt-2 px-2 flex justify-between items-center text-black">
                        <div className="flex">
                        <img style={{height:"70px", width:"70px", objectFit:"cover"}} className="rounded-full border-2 border-white" src="https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        <div className="pl-2 flex flex-col justify-center">
                            <div className="text-sm font-semibold">Emil Duvan</div>
                            <div className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="pl-5 text-sm text-gray-500">
                        <div className="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div className="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    </div>

                    
                    <div className="">
                    <div className="mx-5">
                        <textarea className="w-full border-2 rounded-lg px-4 py-4" rows = "8" cols = "60" name = "description">
                        </textarea>
                    </div>
                    <div className="flex justify-end mr-5">
                    <div className="mt-3 mb-7 justify-center items-center border border-secondary flex rounded-2xl bg-secondary hover:bg-white py-3 px-7 text-sm text-white hover:text-secondary cursor-pointer w-min">
                        Messagenger
                        <FaTelegramPlane className="ml-2" style={{height:"25px", width:"25px"}}/> 
                    </div>
                    </div>
            </div>
        </>
    )
}

export default RightSideRegisterList
