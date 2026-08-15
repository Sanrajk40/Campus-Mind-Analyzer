import React from 'react'

const Workxp = ({role,comp,desc}) => {
    return (
        <>
            <div className="box flex flex-col md:w-[13vw] w-full">
                <img src="avatar.gif" width={30} className="mx-16 mb-2" alt="" />
                <h1 className="border-b border-violet-800 w-full"></h1>

                <div className="flex flex-col items-start md:w-[8.1vw] w-[80%] mx-19">
                    <div className="bg-violet-800 h-[12vh] w-[1px]"></div>
                    <div className="text text-violet-300 flex flex-col text-wrap gap-2 my-3">
                        <div className="gap-1">
                            <h1 className="font-bold">{role}</h1>
                            <h1 className="font-bold">{comp}</h1>
                        </div>
                        <p className="text-sm text-violet-600 text-wrap">{desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Workxp