import React from 'react'
import Image from "next/Image"
import bg from "../public/banner2.png";

function BannerMessage() {
    return (
        <div className=' h-80'>
            <div className="0 w-full h-full object-contain bg-right  bg-no-repeat bg-[url('../public/banner2.png')]">
                <div className=' lg:w-2/3  h-full flex flex-col gap-2 items-center justify-center '>
                    <h2 className='text-2xl lg:text-4xl font-bold text-slate-800'>Join an award winning platform</h2>
                    <h3 className='text-md lg:w-3/5 lg:text-lg text-center text-slate-800'>We connect individuals and organizations directly with professional
                        counselors through a private and personalized digital experience. </h3>
                </div>
            </div>
        </div>

    )
}

export default BannerMessage