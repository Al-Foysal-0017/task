import React from 'react'
import LeftSideHome from '../components/LeftSideBar';
import CenterRegisterList from "../components/ForRegisterListPage/CenterRegisterList"
import Dropdown from '../components/DropDown';
import RightSideRegisterList from '../components/ForRegisterListPage/RightSideRegisterList';
import RegisterListTopber from '../components/ForRegisterListPage/RegisterListTopber';

const RegisterList = () => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <>
        {toggle ?<Dropdown toggle={toggle} setToggle={setToggle}/>:""}
        
        <div className="flex md:flex-row flex-col py-5 px-5 lg:px-10 bg-background">

            <div className="hidden lg:inline bg-secondary w-10 h-screen text-white rounded-xl" style={{width:"295px"}}>
                <LeftSideHome/>   
            </div>

            <div className="bg-primar md:hidden mb-5 lg:pr-0 flex flex-col  md:flex-row justify-between">
                <RegisterListTopber toggle={toggle} setToggle={setToggle}/>
            </div>

            <div className="ml-0 md:ml-5 shadow-2xl border w-10 text-white rounded-xl w-full md:w-2/5">
                <CenterRegisterList/>   
            </div>            
            
            <div className="w-full md:w-3/5 bg-">
                <div className=" bg-primar hidden lg:pr-0 md:flex flex-col  md:flex-row justify-between">
                    <RegisterListTopber/>
                </div>
                
                <div style={{height:"600px"}} className="ml-0 flex flex-col justify-between md:ml-5 mt-5 rounded-lg border shadow-xl">
                    <RightSideRegisterList/>
                </div>
            </div>
        </div>
        </>
    )
}

export default RegisterList
