import React from 'react'
import { ImCross } from 'react-icons/im';
import {Link} from 'react-router-dom'

const Dropdown = ({toggle, setToggle}) => {
    return (
        <>
            <div className="fixed z-10 text-primary bg-white h-screen w-screen">
            <div onClick={()=>{setToggle(!toggle)}} className="w-full flex justify-end pr-12 pt-8 cursor-pointer">
                <ImCross style={{height:"25px", width:"25px"}}/>
            </div>
            <div onClick={()=>{setToggle(!toggle)}} className="w-full flex justify-center pt-8 cursor-pointer">
                <span className="text-xl font-bold">
                    <Link to="/">Home</Link>
                </span>
            </div>
            <div onClick={()=>{setToggle(!toggle)}} className="w-full flex justify-center pt-8 cursor-pointer">
                <span className="text-xl font-bold">Clients</span>
            </div>
            <div onClick={()=>{setToggle(!toggle)}} className="w-full flex justify-center pt-8 cursor-pointer">
                <span className="text-xl font-bold">Schedule</span>
            </div>
            <div onClick={()=>{setToggle(!toggle)}} className="w-full flex justify-center pt-8 cursor-pointer">
                <span className="text-xl font-bold">
                    <Link to="/add-project">Add Project</Link>
                </span>
            </div>
            <div onClick={()=>{setToggle(!toggle)}} className="w-full flex justify-center pt-8 cursor-pointer">
                <span className="text-xl font-bold">
                    <Link to="/add-session">Add Session</Link>
                </span>
            </div>
            <div onClick={()=>{setToggle(!toggle)}} className="w-full flex justify-center pt-8 cursor-pointer">
                <span className="text-xl font-bold">
                    <Link to="/register-list">Register List</Link>
                </span>
            </div>
            <div onClick={()=>{setToggle(!toggle)}} className="w-full flex justify-center pt-8 cursor-pointer">
                <span className="text-xl font-bold">Settings</span>
            </div>
            <div onClick={()=>{setToggle(!toggle)}} className="w-full flex justify-center pt-8 cursor-pointer">
                <span className="text-xl font-bold">Service</span>
            </div>
            <div onClick={()=>{setToggle(!toggle)}} className="w-full flex justify-center pt-8 cursor-pointer">
                <span className="text-xl bg-primary hover:bg-white hover:text-primary trans border border-primary px-5 rounded py-1 text-white font-bold">
                    Logout
                </span>
            </div>
        </div>
        </>
    )
}
export default Dropdown
