import React from 'react'
import LeftSideHome from '../components/LeftSideHome';
import { IoSearch } from 'react-icons/io5';
import { RiMessage3Fill } from 'react-icons/ri';
import { CgNotifications } from 'react-icons/cg';
import { SiGooglecalendar } from 'react-icons/si';


const Home = () => {
    return (
        <>
        <div className="flex py-5 px-10 bg-background">

            <div className="hidden lg:inline bg-secondary w-10 h-screen text-white rounded-xl" style={{width:"295px"}}>
                <LeftSideHome/>   
            </div>

            <div className=" w-full rounded-xl ml-5">
                <div className="grid text-label grid-cols-7 row-1 gap-1 w-full">
                    <div className="col-start-1 col-end-4 md:col-start-1 md:col-end-2">
                        <div className="text-sm tracking-wide">Welcome</div>
                        <div className="font-semibold tracking-wide">Maisam Ali</div>
                    </div>
                    <div className="hidden md:flex col-start-2 col-end-7">
                        <input className="border rounded-lg pl-3 pr-10 w-full"/>
                        <div className="h-full flex items-center">
                            <IoSearch style={{marginLeft:"-30px", height:"25px", width:"25px", color:"gray"}}/> 
                            </div>
                    </div>
                    <div className="flex items-center justify-center col-start-4 col-end-8 md:col-start-7 md:col-end-8">
                        <div className="ml-5 h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
                        <CgNotifications style={{height:"25px", width:"25px", color:"#FF5C00"}}/>
                        </div>
                        <div className="ml-5 h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
                        <img style={{height:"48px", width:"48px", objectFit:"cover"}} className="rounded-full border " src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="mt-2 flex md:hidden col-start-2 col-end-6">
                    <input className="border rounded-lg pl-3 pr-10 py-1 w-full"/>
                    <div className="h-full mt-1 flex items-center">
                    <IoSearch style={{marginLeft:"-30px", height:"25px", width:"25px", color:"gray"}}/> 
                    </div>
                </div>


                {/* Left Side After Top section */}
                <div className="flex flex-col md:flex-row justify-between">

                    <div className="mt-3 w-full">
                        <div className="flex bg-gradient-to-b from-primary to-yellow py-4 px-7 rounded-lg">
                            <div className="w-7/12pr-3 flex flex-col justify-center">
                                <div className="font-bold">Hello, Maisam</div>
                                <div className="pt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                                <div><button className="mt-2 mb-2 rounded bg-white hover:bg-primary hover:text-white translate-all py-1 px-7">Upgrade</button></div>
                            </div>
                            <div className="flex flex-row items-center w-5/12">
                                <img style={{height:"100px", width:"100px", objectFit:"cover"}} className="rounded-full border " src="https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                                <div className="">
                                <div className="mt-10 bg-red-600 text-white py-1 px-3 rounded">Let's chat</div>
                                <div className="mt-"><RiMessage3Fill style={{width:"50px", height:"50px", color:"#fff", marginLeft:"-30px"}}/></div>
                                </div>
                            </div>
                        </div>

                        <div style={{height:"278px"}} className="shadow-2xl rounded-lg">
                            <div className="mt-3 flex justify-between py-2 px-7 rounded-t-lg items-center" style={{background:"#FDEBD0"}}>
                                <div className="pr-3 flex flex-col">
                                    <div className="font-semibold">Activity Report</div>
                                    <div className="text-xs">Every Month</div>
                                </div>
                                <div className="flex flex-row">
                                <div className="text-xs">
                                    <span className="mr-2">All</span>
                                    <span className="mr-2">Client</span>
                                    <span className="mr-2">Income</span>
                                    <span className="mr-2">Project</span>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div style={{height:"276px"}} className="mt-3 flex flex-col flex rounded-lg">
                            <div className="mb-2 text-xl">Top Project</div>
                            <div className="flex justify-center">
                                <div className="mr-2 bg-white rounded-lg flex px-2 flex-col items-center shadow-2xl" style={{height:"250px", width:"238px", objectFit:"cover"}}>
                                    <img style={{height:"174px", width:"222px", objectFit:"cover"}} className="mt-2 rounded-lg" src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                                    <div className="text-sm pt-1 pb-2">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                    <div className="bg-primary text-white flex justify-center text-sm py-1 w-full rounded-3xl">
                                        More Details
                                    </div>
                                </div>
                                <div className="ml-2 bg-white rounded-lg flex px-2 flex-col items-center shadow-2xl" style={{height:"250px", width:"238px", objectFit:"cover"}}>
                                    <img style={{height:"174px", width:"222px", objectFit:"cover"}} className="mt-2 rounded-lg" src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                                    <div className="text-sm pt-1 pb-2">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                    <div className="bg-primary text-white flex justify-center text-sm py-1 w-full rounded-3xl">
                                        More Details
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div className="ml-0 md:ml-5 mt-12 md:mt-3 flex flex-col items-center shadow-2xl bg-white rounded-xl" > {/* style={{width:"362px"}} */}
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
                            <div className="text-2xl mb-4 font-light tracking-wide">Schedle Planning</div>
                            <SiGooglecalendar style={{width:"150px", height:"150px"}}/>
                            </div>
                            </div>
                        </div>
                        <div className="mb-3"></div>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}

export default Home
