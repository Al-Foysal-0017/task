import React from 'react'
import { FiFileText } from 'react-icons/fi';

const BottomAddProject = () => {
    return (
        <>
           <div className="w-1/6 text-md font-semibold">Upload</div>
                           <div className="w-1/4">
                               <div className="flex items-center">
                               <input className="ml-2 cursor-pointer" type="radio" id="html" name="fav_language" value="HTML"/>
                               <div className="ml-2">File</div>
                               </div>
                               <div className="bg-white py-3 flex justify-end pr-2 rounded-lg border-2">
                                   <FiFileText style={{width:"24px", height:"24px"}}/>
                               </div>
                           </div>
                           <div className="w-1/4 pl-0 sm:pl-5">
                            <div className="ml-2 flex items-center">
                            <input className="mr-2 cursor-pointer" type="radio" id="html" name="fav_language" value="HTML"/>
                            <div className="">Link</div>
                            </div>
                               <div style={{height:"52px"}} className="bg-gray-200 py-3 pr-2 rounded-lg border-2">
                               </div>
                           </div>
                           <div className="w-4/12">
                               <div className="">
                                   <div className="invisible">****</div>
                                   <button className="ml-0 sm:ml-5 bg-blue text-white text-sm py-4 rounded-lg px-16 font-semibold">
                                       Add Project
                                    </button>
                            </div>
            </div> 
        </>
    )
}

export default BottomAddProject
