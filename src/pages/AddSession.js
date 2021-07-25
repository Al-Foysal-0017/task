import React from 'react'
import LeftSideHome from '../components/LeftSideBar';
import Dropdown from '../components/DropDown';
import Topbar from '../components/Topbar';
import CenterAddSession from '../components/ForAddSessionPage/CenterAddSession';
import RightAddSession from '../components/ForAddSessionPage/RightAddSession';
import BottomAddSession from '../components//ForAddSessionPage/BottomAddSession';


const AddSession = () => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <>
        {toggle ?<Dropdown toggle={toggle} setToggle={setToggle}/>:""}
        
        <div className="flex py-5 px-5 lg:px-10 bg-background h-auto lg:h-auto md:h-screen">

            <div className="hidden lg:inline bg-secondary w-10 h-screen text-white rounded-xl" style={{width:"295px"}}>
                <LeftSideHome/>   
            </div>

            <div className=" w-full bg-background rounded-xl ml- 5">
                
                <Topbar toggle={toggle} setToggle={setToggle}/>

                <div className="bg-white ml-0 mb-2 lg:ml-5 mt-3 py-3 rounded-lg  border-2 shadow-md lg:pr-0 flex flex-col md:flex-row justify-between">
                    <div className="w-full flex justify-center text-lg font-semibold">
                        Add New Session
                    </div>
                </div>

                <div className="lg:pr-0 flex flex-col md:flex-row justify-between">
                    <div className="mt-3 flex flex-col justify-betwee pl-0 lg:pl-5 w-full">
                        <CenterAddSession/>
                    </div>
                    <div className="ml-0 w-full w-295 bg-yello md:ml-5 mt-12 md:mt-3 flex flex-col shadow-2xl bg-white rounded-xl" style={{height:"330px",}} > {/* style={{width:"362px"}} */}
                        <RightAddSession/>
                    </div>
                </div>

                <div className="lg:pr-0 mt-5 flex flex-col md:flex-row justify-between">
                    <div className="mt-3 pl-0 lg:pl-5 w-full">
                       <div className="flex flex-col sm:flex-row">
                           <BottomAddSession/>
                       </div>   
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}

export default AddSession
