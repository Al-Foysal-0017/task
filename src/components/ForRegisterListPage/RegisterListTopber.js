import React from 'react'
import { RiCake3Fill } from 'react-icons/ri';
import {FaRegBell } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const RegisterListTopber = ({toggle, setToggle}) => {
    return (
        <>
                    <div className="flex pl-0 lg:pl-5 w-full justify-end">
                        <div className="shadow-md trans ml-5 h-12 w-12 bg-white hover:bg-primary text-primary hover:text-white rounded-full flex justify-center items-center cursor-pointer">
                            <RiCake3Fill style={{height:"25px", width:"25px"}}/>
                        </div>
                            <Link to="/notification">
                            <div className="shadow-md trans ml-5 h-12 w-12 bg-white hover:bg-primary text-primary hover:text-white rounded-full flex justify-center items-center cursor-pointer">
                            <div className="h-2 animate-ping w-2 bg-primary absolute ml-6 rounded-full" style={{marginTop:"-14px"}}></div>
                            <div className="h-2 w-2 bg-primary absolute ml-6 rounded-full" style={{marginTop:"-14px"}}></div>
                            <FaRegBell style={{height:"20px", width:"20px"}}/>
                            </div>
                        </Link>
                        <div className="ml-5 h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
                            <img style={{height:"48px", width:"48px", objectFit:"cover"}} className="shadow-md rounded-full borde" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        </div>
                        <div className="shadow-md trans flex lg:hidden ml-5 h-12 w-12 bg-white hover:bg-primary text-primary hover:text-white rounded-full flex justify-center items-center cursor-pointer">
                            <FaBars onClick={()=> setToggle(!toggle)} style={{height:"25px", width:"25px"}}/>
                        </div>
                    </div>
        </>
    )
}

export default RegisterListTopber
