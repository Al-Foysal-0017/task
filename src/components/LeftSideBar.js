import React from 'react'
import {Link} from 'react-router-dom'
import { FaHome, FaAngleDown, FaClipboardList } from 'react-icons/fa';
import {RiCustomerServiceFill } from 'react-icons/ri';
import { IoSettingsSharp, IoLogOut } from 'react-icons/io5';
import { AiFillSchedule, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { MdPersonPin } from 'react-icons/md';
import { HiViewGridAdd } from 'react-icons/hi';

const LeftSideHome = () => {
    return (
        <>
            <div className="flex">
                    <div className="flex items-center w-full justify-center mt-7 mx-3 px-7 py-3 rounded-xl bg-white font-semibold text-secondary">
                        <FaHome style={{height:"20px", width:"20px"}}/>
                        <div className="flex items-center pt-2 justify-between w-full">
                            <Link to="/"><div className="ml-2">Dashboard</div></Link>
                        </div>
                    </div>
                </div>
                <div className="flex pt-5">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <MdPersonPin style={{height:"18px", width:"18px"}}/>
                        <div className="flex pt-1 cursor-pointer items-center justify-between w-full">
                            <div className="ml-2">Clients</div>
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="flex pt-3">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <AiFillSchedule style={{height:"18px", width:"18px"}}/>
                        <div className="flex pt-1 cursor-pointer items-center justify-between w-full">
                            <div className="ml-2">Schedule</div> 
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="flex pt-3">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <AiOutlineAppstoreAdd style={{height:"18px", width:"18px"}}/>
                        <div className="flex pt-1 cursor-pointer items-center justify-between w-full">
                            <Link to="/add-project"><div className="ml-2">Add Project</div></Link>
                        </div>
                    </div>
                </div>
                <div className="flex pt-3">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <HiViewGridAdd style={{height:"18px", width:"18px"}}/>
                        <div className="flex pt-1 cursor-pointer items-center justify-between w-full">
                        <Link to="/add-session"><div className="ml-2">Add Session</div></Link>
                        </div>
                    </div>
                </div>
                <div className="flex pt-3">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <IoSettingsSharp style={{height:"18px", width:"18px"}}/>
                        <div className="flex pt-1 cursor-pointer items-center justify-between w-full">
                            <div className="ml-2">Settings</div>
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="flex pt-3">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <div className="border-b flex cursor-pointer items-center justify-between w-full">
                        </div>
                    </div>
                </div>
                <div className="flex pt-3">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <FaClipboardList style={{height:"18px", width:"18px"}}/>
                        <div className="flex cursor-pointer items-center justify-between w-full">
                            <Link to="/register-list"><div className="ml-2 pt-1">Register List</div></Link>
                        </div>
                    </div>
                </div>
                <div className="flex pt-2">
                    <div className="flex items-center w-full justify-center mx-10 rounded-xl text-sm">
                        <RiCustomerServiceFill style={{height:"18px", width:"18px"}}/>
                        <div className="flex pt-1 cursor-pointer items-center justify-between w-full">
                            <div className="ml-2">Service</div>
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="flex cursor-pointer">
                    <div className="flex items-center w-full justify-center mt-7 mx-3 px-7 py-3 rounded-xl bg-white font-semibold text-secondary">
                        <IoLogOut style={{height:"20px", width:"20px"}}/>
                        <div className="flex items-center pt-2 w-full">
                            <div className="ml-2">Logout</div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default LeftSideHome
