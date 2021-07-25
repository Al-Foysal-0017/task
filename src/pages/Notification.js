import React from 'react'
import LeftSideHome from '../components/LeftSideBar';
import { CgNotifications } from 'react-icons/cg';
import Dropdown from '../components/DropDown';
import Topbar from '../components/Topbar';

const Notification = () => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <>
        {toggle ?<Dropdown toggle={toggle} setToggle={setToggle}/>:""}
        
        <div className="flex py-5 px-5 lg:px-10 bg-background">

            <div className="SclFont hidden lg:inline bg-secondary w-10 h-screen text-white rounded-xl" style={{width:"295px"}}>
                <LeftSideHome/>   
            </div>

            <div className=" w-full bg-background rounded-xl ml- 5">
                
                <Topbar toggle={toggle} setToggle={setToggle}/>

                <div className="bg-primar lg:pr-0 flex flex-col md:flex-row justify-between">
                    <div className="mt-3 pl-0 lg:pl-5 w-full">
                        {/* Notification-1 */}
                        <div className="shadow-lg mt-3 w-full md:w-11/12 py-3 rounded-lg flex justify-between items-center bg-white">
                            <div className="pl-3 md:pl-7 pr-1"><CgNotifications style={{height:"25px", width:"25px", color:"#000"}}/></div>
                            <div className="px-1">
                                <div className="text-md font-semibold">New Client</div>
                                <div className="text-xs">Lorem ipsum dolor sit amert, sit amert.</div>
                            </div>
                            <div className="px-1 text-sm text-gray-500">11:30 PM</div>
                            <div className="pl-1 text-sm pr-3 md:pr-7 font-semibold">Consult</div>
                        </div>
                        {/* Notification-2 */}
                        <div className="shadow-lg mt-3 w-full md:w-11/12 py-3 rounded-lg flex justify-between items-center bg-background">
                            <div className="pl-3 md:pl-7 pr-1"><CgNotifications style={{height:"25px", width:"25px", color:"#000"}}/></div>
                            <div className="px-1">
                                <div className="text-md font-semibold">New Client</div>
                                <div className="text-xs">Lorem ipsum dolor sit amert, sit amert.</div>
                            </div>
                            <div className="px-1 text-sm text-gray-500">11:30 PM</div>
                            <div className="pl-1 text-sm pr-3 md:pr-7 font-semibold">Consult</div>
                        </div>
                        {/* Notification-3 */}
                        <div className="shadow-lg mt-3 w-full md:w-11/12 py-3 rounded-lg flex justify-between items-center bg-white">
                            <div className="pl-3 md:pl-7 pr-1"><CgNotifications style={{height:"25px", width:"25px", color:"#000"}}/></div>
                            <div className="px-1">
                                <div className="text-md font-semibold">New Client</div>
                                <div className="text-xs">Lorem ipsum dolor sit amert, sit amert.</div>
                            </div>
                            <div className="px-1 text-sm text-gray-500">11:30 PM</div>
                            <div className="pl-1 text-sm pr-3 md:pr-7 font-semibold">Consult</div>
                        </div>
                        {/* Notification-4 */}
                        <div className="shadow-lg mt-3 w-full md:w-11/12 py-3 rounded-lg flex justify-between items-center bg-background">
                            <div className="pl-3 md:pl-7 pr-1"><CgNotifications style={{height:"25px", width:"25px", color:"#000"}}/></div>
                            <div className="px-1">
                                <div className="text-md font-semibold">New Client</div>
                                <div className="text-xs">Lorem ipsum dolor sit amert, sit amert.</div>
                            </div>
                            <div className="px-1 text-sm text-gray-500">11:30 PM</div>
                            <div className="pl-1 text-sm pr-3 md:pr-7 font-semibold">Consult</div>
                        </div>
                        {/* Notification-5 */}
                        <div className="shadow-lg mt-3 w-full md:w-11/12 py-3 rounded-lg flex justify-between items-center bg-white">
                            <div className="pl-3 md:pl-7 pr-1"><CgNotifications style={{height:"25px", width:"25px", color:"#000"}}/></div>
                            <div className="px-1">
                                <div className="text-md font-semibold">New Client</div>
                                <div className="text-xs">Lorem ipsum dolor sit amert, sit amert.</div>
                            </div>
                            <div className="px-1 text-sm text-gray-500">11:30 PM</div>
                            <div className="pl-1 text-sm pr-3 md:pr-7 font-semibold">Consult</div>
                        </div>
                        {/* Notification-6 */}
                        <div className="shadow-lg mt-3 w-full md:w-11/12 py-3 rounded-lg flex justify-between items-center bg-background">
                            <div className="pl-3 md:pl-7 pr-1"><CgNotifications style={{height:"25px", width:"25px", color:"#000"}}/></div>
                            <div className="px-1">
                                <div className="text-md font-semibold">New Client</div>
                                <div className="text-xs">Lorem ipsum dolor sit amert, sit amert.</div>
                            </div>
                            <div className="px-1 text-sm text-gray-500">11:30 PM</div>
                            <div className="pl-1 text-sm pr-3 md:pr-7 font-semibold">Consult</div>
                        </div>
                        {/* Notification-7 */}
                        <div className="shadow-lg mt-3 w-full md:w-11/12 py-3 rounded-lg flex justify-between items-center bg-white">
                            <div className="pl-3 md:pl-7 pr-1"><CgNotifications style={{height:"25px", width:"25px", color:"#000"}}/></div>
                            <div className="px-1">
                                <div className="text-md font-semibold">New Client</div>
                                <div className="text-xs">Lorem ipsum dolor sit amert, sit amert.</div>
                            </div>
                            <div className="px-1 text-sm text-gray-500">11:30 PM</div>
                            <div className="pl-1 text-sm pr-3 md:pr-7 font-semibold">Consult</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}

export default Notification
