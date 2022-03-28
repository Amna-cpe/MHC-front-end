import React from 'react'
import Image from 'next/image';
import caring from "../public/caring.png"

function SectionCard({title,msg , item}:{title:string , msg:string ,item:number}) {
    return (
        <div className="flex-shrink-0 flex-grow-0 lg:inline-flex flex flex-wrap h-full justify-center items-center font-medium text-xl "
        style={{ width: "100%", flexBasis: "100%" }} id={`item${item}`}>

            <div className='lg:w-1/3'>
                <Image src={caring} className="bg-transparent"/>
            </div>

            <div className='bg-blue-100 rounded-md shadow-md text-red-200 lg:w-2/4  lg:h-72'>
                <div className='p-5 '>
                    <div className='font-bold text-l py-4'>{title}</div>
                    <div className='text-sm  w-4/5 text-slate-900'>
                        {msg}</div>
                </div>
            </div>

        </div>
    )
}

export default SectionCard