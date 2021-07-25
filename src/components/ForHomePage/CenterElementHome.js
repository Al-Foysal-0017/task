import React from 'react'
import { RiMessage3Fill } from 'react-icons/ri';

const CenterElementHome = () => {
    return (
        <>
            <div className="flex bg-gradient-to-b from-primary to-yellow py-4 px-0 lg:px-7 rounded-lg">
                <div className="flex w-1/2 lg:w-4/6 flex-col bg-gradient-to-b from-primary to-yellow py-4 px-7 rounded-lg">
                    <div className="font-bold">
                        <div class="wrapper">
                            <div class="typing-demo tracking-widest">
                            Hello, Maisam
                            </div>
                        </div>
                    </div>
                    <div className="pt- text-sm text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div>
                        <button className="animate-bounce mt-3 mb-2 rounded bg-white hover:bg-primary hover:text-white translate-all pt-2 pb-1 trans border border-primary px-7">
                        Upgrade
                        </button>
                    </div>
                </div>
                <div className="flex flex-row items-center w-1/2 lg:w-5/12 ">
                    <img style={{height:"100px", width:"100px", objectFit:"cover"}} className="rounded-full border " src="https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                    <div className="">
                    <div className="mt-10 animate-pulse bg-red-600 text-white py-1 px-3 rounded">
                        Let's chat
                    </div>
                    <div className="animate-pulse"><RiMessage3Fill style={{width:"50px", height:"50px", color:"#fff", marginLeft:"-30px"}}/></div>
                    </div>
                </div>
            </div>
            {/* style={{background:"#FDEBD0"}} */}
            <div style={{height:"278px"}} className="mt-3 bg-primary shadow-2xl rounded-lg"><div className="flex items-center justify-center h-full">
                    <div className="pl-5 w-4/6 flex flex-col">
                        {/* Total Projects */}
                        <h1 style={{marginTop:"40px", fontSize:"30px",}}>
                            <span>T</span>
                            <span>o</span>
                            <span>t</span>
                            <span>a</span>
                            <span>l</span>
                            <span>&nbsp; </span> <span>&nbsp; </span>
                            <span>P</span>
                            <span>r</span>
                            <span>o</span>
                            <span>j</span>
                            <span>e</span>
                            <span>c</span>
                            <span>t</span>
                            <span>s</span>
                            </h1>
                        <div className="text-6xl md:text-7xl lg:text-8xl text-white font-bold">
                            <h1 style={{marginTop:"40px"}}>
                            <span>5</span>
                            <span>0</span>
                            <span>0</span>
                            <span>+</span>
                            </h1>
                        </div>
                    </div>
                    <div className="w-4/12 text-white">
                       <div className="bg-yellow py-5 mr-5 flex flex-col justify-end h-full items-center rounded-lg" style={{height:"240px"}}>
                        <div className="text-sm">Existing Clients</div>
                        <div className="text-4xl font-bold">48+</div>
                       </div>
                    </div>
                </div>
            </div>

            <div style={{height:"276px"}} className="mt-3 flex flex-col flex rounded-lg">
                <div className="mb- text-xl">Top Project</div>
                <div className="flex justify-center">
                    <div className="mr-2 pb-3 bg-white rounded-lg flex px-2 flex-col items-center shadow-2xl" style={{height:"250px", width:"238px", objectFit:"cover"}}>
                        <img style={{height:"174px", width:"222px", objectFit:"cover"}} className="mt-2 rounded-lg" src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        <div className="text-xs pt-1 pb-2">
                            Lorem ipsum dolor sit.
                        </div>
                        <div className="animate-bounce bg-primary cursor-pointer hover:text-primary hover:bg-white border border-primary trans text-white flex justify-center text-sm py-1 w-full rounded-3xl">
                            More Details
                        </div>
                    </div>
                    <div className="ml-2 pb-3 bg-white rounded-lg flex px-2 flex-col items-center shadow-2xl" style={{height:"250px", width:"238px", objectFit:"cover"}}>
                        <img style={{height:"174px", width:"222px", objectFit:"cover"}} className="mt-2 rounded-lg" src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        <div className="text-xs pt-1 pb-2">
                            Lorem ipsum dolor sit.
                        </div>
                        <div className="animate-bounce bg-primary cursor-pointer hover:text-primary hover:bg-white border border-primary trans text-white flex justify-center text-sm py-1 w-full rounded-3xl">
                            More Details
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}

export default CenterElementHome
