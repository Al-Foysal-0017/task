import React from 'react'

const CenterAddProject = () => {
    return (
        <>
           <div className="flex items-center">
                            <div className="w-1/5 text-md font-semibold">Session Title</div>
                            <div className="w-4/5">
                                <input className="w-full py-3 rounded-lg border-2 px-4" />
                            </div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="w-1/5 text-md font-semibold">Description</div>
                            <div className="w-4/5">
                                <textarea className="w-full border-2 rounded-lg px-4 py-4" rows = "8" cols = "60" name = "description">
                                </textarea>
                            </div>
                        </div>
                        {/* <div className="mt-5 flex items-center">
                            <div className="w-1/5 text-md font-semibold">Date</div>
                            <div className="w-4/5">
                                <input className="w-full py-3 rounded-lg border-2 px-4" />
                            </div>
                        </div> */}
                        {/* <div className="mt-5 flex items-center">
                            <div className="w-1/5 text-md font-semibold">Department</div>
                            <div className="w-4/5">
                                <input className="w-full py-3 rounded-lg border-2 px-4" />
                            </div>
                        </div>  */}
        </>
    )
}

export default CenterAddProject
