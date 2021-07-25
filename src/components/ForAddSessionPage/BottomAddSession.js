import React from 'react'
import { FiFileText } from 'react-icons/fi';

const BottomAddProject = () => {
    return (
        <>
           <div className="w-1/6 text-md font-semibold">Upload</div>
                           <div className="w-1/4 mt-2 md:mt-0">
                               <div className="bg-white py-3 flex justify-end pr-2 rounded-lg border-2">
                                   <FiFileText style={{width:"24px", height:"24px"}}/>
                               </div>
                           </div>
                           <div className="w-4/12 mt-2 md:mt-0">
                               <div className="">
                                   <button className="ml-0 sm:ml-5 bg-blue text-white text-sm py-4 rounded-lg px-16 font-semibold">
                                       Add Session
                                    </button>
                            </div>
            </div> 
        </>
    )
}

export default BottomAddProject
