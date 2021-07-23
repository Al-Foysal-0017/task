import React from 'react'
import { FaHome, FaAngleDown } from 'react-icons/fa';
import { RiPagesFill, RiEditBoxFill, RiCustomerServiceFill } from 'react-icons/ri';
import { IoSettingsSharp, IoLogOut } from 'react-icons/io5';
import { AiFillSchedule } from 'react-icons/ai';
import { MdPersonPin } from 'react-icons/md';

const LeftSideHome = () => {
    return (
        <>
            <div className="flex">
                    <div className="flex items-center w-full justify-center mt-7 mx-3 px-7 py-3 rounded-xl bg-white font-semibold text-secondary">
                        <FaHome style={{height:"20px", width:"20px"}}/>
                        <div className="flex items-center justify-between w-full">
                            <div className="ml-2">Dashboard</div>
                        </div>
                    </div>
                </div>
                <div className="flex pt-3">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <RiPagesFill style={{height:"18px", width:"18px"}}/>
                        <div className="flex cursor-pointer items-center justify-between w-full">
                            <div className="ml-2">Pages</div>
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="flex pt-3">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <MdPersonPin style={{height:"18px", width:"18px"}}/>
                        <div className="flex cursor-pointer items-center justify-between w-full">
                            <div className="ml-2">Clients</div>
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="flex pt-3">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <AiFillSchedule style={{height:"18px", width:"18px"}}/>
                        <div className="flex cursor-pointer items-center justify-between w-full">
                            <div className="ml-2">Schedule</div>
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="flex pt-3">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <IoSettingsSharp style={{height:"18px", width:"18px"}}/>
                        <div className="flex cursor-pointer items-center justify-between w-full">
                            <div className="ml-2">Settings</div>
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="mt-3 border-b"></div>
                <div className="flex pt-3">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <RiEditBoxFill style={{height:"18px", width:"18px"}}/>
                        <div className="flex cursor-pointer items-center justify-between w-full">
                            <div className="ml-2">Edit</div>
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="flex pt-3">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <RiCustomerServiceFill style={{height:"18px", width:"18px"}}/>
                        <div className="flex cursor-pointer items-center justify-between w-full">
                            <div className="ml-2">Service</div>
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex items-center w-full justify-center mt-7 mx-3 px-7 py-3 rounded-xl bg-white font-semibold text-secondary">
                        <IoLogOut style={{height:"20px", width:"20px"}}/>
                        <div className="flex items-center justify-between w-full">
                            <div className="ml-2">Logout</div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default LeftSideHome