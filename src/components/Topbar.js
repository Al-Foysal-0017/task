import React from 'react'
import { IoSearch } from 'react-icons/io5';
import { RiCake3Fill } from 'react-icons/ri';
import { CgNotifications } from 'react-icons/cg';
import { FaBars, FaRegBell } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const Topbar = ({toggle, setToggle}) => {
    const {pathname} = useLocation();
    return (
        <>
            <div className="grid text-label grid-cols-7 row-1 gap-1 w-full">
                    {(pathname==="/" || pathname==="/add-project" || pathname==="/add-session") &&
                        <div className="pl-0 lg:pl-5 col-start-1 col-end-4 md:col-start-1 md:col-end-2">
                            <div className="text-sm tracking-wide">Welcome</div>
                            <div className="font-semibold tracking-wide">
                                Maisam Ali
                            </div>
                        </div>
                    }
                    <div className={(pathname==="/" || pathname==="/add-project" || pathname==="/add-session") ? "hidden md:flex md:col-start-2 md:col-end-6 lg:col-start-2 lg:col-end-7":"hidden md:flex md:col-start-1 md:col-end-6 lg:col-start-1 lg:col-end-6"}>
                        <input className="shadow-md  ml-5 border rounded-lg pl-3 pr-10 w-full"/>
                        <div className="h-full flex items-center">
                            <IoSearch style={{marginLeft:"-30px", height:"25px", width:"25px", color:"gray"}}/> 
                        </div>
                    </div>
                    <div className={(pathname==="/" || pathname==="/add-project" || pathname==="/add-session") ? "flex items-center justify-end col-start-4 col-end-8 md:col-start-6 md:col-end-8 lg:col-start-7 lg:col-end-8" : "flex items-center justify-end col-start-4 col-end-8 md:col-start-6 md:col-end-8 lg:col-start-6 lg:col-end-8"}>
                        {(pathname==="/notification" || pathname==="/register-list") &&
                            <div className="shadow-md trans ml-5 h-12 w-12 bg-white hover:bg-primary text-primary hover:text-white rounded-full flex justify-center items-center cursor-pointer">
                            <RiCake3Fill style={{height:"25px", width:"25px"}}/>
                            </div>
                        }
                        <Link to="/notification">
                            <div className="shadow-md trans ml-5 h-12 w-12 bg-white hover:bg-primary text-primary hover:text-white rounded-full flex justify-center items-center cursor-pointer">
                            <div className="h-3 animate-ping w-3 bg-primary absolute ml-6 rounded-full" style={{marginTop:"-14px"}}></div>
                            <div className="h-2 w-2 bg-primary absolute ml-6 rounded-full" style={{marginTop:"-14px"}}></div>
                            <FaRegBell className="" style={{height:"20px", width:"20px"}}/>
                            </div>
                        </Link>
                        <div className="shadow-md ml-5 h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
                        <img style={{height:"48px", width:"48px", objectFit:"cover"}} className="shadow-md  rounded-full borde " src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        </div>
                        <div className="shadow-md trans lg:hidden flex ml-5 h-12 w-12 bg-white hover:bg-primary text-primary hover:text-white rounded-full flex justify-center items-center cursor-pointer">
                        <FaBars onClick={()=> setToggle(!toggle)} style={{height:"25px", width:"25px"}}/>
                        </div>
                    </div>
                </div>
                <div className="mt-2 flex md:hidden col-start-2 col-end-6">
                    <input className="shadow-md  border rounded-lg pl-3 pr-10 py-1 w-full"/>
                    <div className="h-full mt-1 flex items-center">
                    <IoSearch style={{marginLeft:"-30px", height:"25px", width:"25px", color:"gray"}}/> 
                    </div>
                </div>
        </>
    )
}

export default Topbar
