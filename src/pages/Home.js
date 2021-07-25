import React from 'react'
import LeftSideHome from '../components/LeftSideBar';
import RightSideHome from '../components/ForHomePage/RightSideHome';
import CenterElementHome from '../components/ForHomePage/CenterElementHome';
import Dropdown from '../components/DropDown';
import Topbar from '../components/Topbar';


const Home = () => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <>
        {toggle ?<Dropdown toggle={toggle} setToggle={setToggle}/>:""}
        
        <div className="flex py-5 px-5 lg:px-10 bg-background">

            <div className="hidden lg:inline bg-secondary w-10 h-screen text-white rounded-xl" style={{width:"295px"}}>
                <LeftSideHome/>   
            </div>

            <div className=" w-full bg-background rounded-xl ml- 5">
                
                <Topbar toggle={toggle} setToggle={setToggle}/>

                <div className="bg-background lg:pr-0 flex flex-col md:flex-row justify-between">
                    <div className="mt-3 pl-0 lg:pl-5 w-full">
                        <CenterElementHome/>
                    </div>

                    <div className="ml-0 md:ml-5 mt-12 md:mt-3 flex flex-col items-center shadow-2xl bg-white rounded-xl" > {/* style={{width:"362px"}} */}
                        <RightSideHome/>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}

export default Home
