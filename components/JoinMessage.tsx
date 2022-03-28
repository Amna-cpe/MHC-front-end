import React from 'react'
import Image from "next/Image"
import bg from "../public/banner2.png";

function JoinMessage() {
    return (
        <div className=' h-80'>
            <div className="0 w-full h-full object-contain bg-right  bg-no-repeat bg-[url('../public/banner2.png')]">
                <div className=' lg:w-2/3  h-full flex flex-col gap-2 items-center justify-center '>
                    <h2 className='text-2xl lg:text-4xl font-bold text-slate-800'>Take a step towards
                        your self</h2>

                    <div className=' flex gap-5 my-2'>
                        <button className="bg-yellow-100 hover:shadow-md  font-bold py-2 px-2 rounded w-36">
                            Get Started
                        </button>
                        <button className=" hover:shadow-md font-bold py-2 px-2 rounded border-slate-900 border-2 ">
                            Find me an Expert
                        </button>
                    </div>

                    <small>
                        If you want to join our team of counselors apply <a href='#' className='font-bold underline text-yellow-100'> here</a>
                    </small>
                </div>
            </div>
        </div>
       

    )
}

export default JoinMessage