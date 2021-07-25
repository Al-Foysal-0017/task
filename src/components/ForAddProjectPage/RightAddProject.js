import React from 'react'
import Switch from "react-switch";

const RightAddProject = () => {
    const [switchBtn, setSwitchBtn] = React.useState({ checked: false })
    const [switchBtn2, setSwitchBtn2] = React.useState({ checked: false })
    const handleChange =(checked) =>{setSwitchBtn({ checked });}
    const handleChange2 =(checked) =>{setSwitchBtn2({ checked });}
    return (
        <>
            <div className="py-5 pl-5 text-md font-semibold">Status</div>
                        <div className="flex mt-5">
                        <div className="flex pl-5">
                            <Switch 
                                offHandleColor={"#fff"} 
                                onHandleColor={"#fff"} 
                                onChange={handleChange} 
                                checked={switchBtn.checked} 
                                uncheckedIcon={false} 
                                checkedIcon={false} 
                                height={20} width={40} 
                                onColor={"#FB9301"} 
                                handleDiameter={19}
                            />
                            <div className="text-sm pl-1 pr-5">Special</div>
                        </div>
                        <div className="flex pr-5">
                            <Switch 
                            offHandleColor={"#fff"} 
                            onHandleColor={"#fff"} 
                            onChange={handleChange2} 
                            checked={switchBtn2.checked} 
                            uncheckedIcon={false} 
                            checkedIcon={false} 
                            height={20} width={40} 
                            onColor={"#FB9301"} 
                            handleDiameter={19}
                            />
                            <div className="text-sm pl-1 pr-5">Popular</div>
                        </div>
                        </div>
                        <div className="mt-5">
                            <div className="pt-5 pl-5 text-md font-semibold">Budget</div>
                            <div className="mx-5 mt-2">
                                <input className="border h-14 w-full px-4 rounded-lg bg-background"/>
                            </div>
                        </div>
                        <div className="">
                            <div className="pt-5 pl-5 text-md font-semibold">Duration</div>
                            <div className="mx-5 mt-2">
                                <input className="border h-14 w-full px-4 rounded-lg bg-background"/>
                        </div>
            </div>
        </>
    )
}

export default RightAddProject
