import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faTree, faHandHolding } from "@fortawesome/free-solid-svg-icons"
import search from "../public/search.png";
import Image from "next/Image"
function Mission() {
    return (
        <div className='bg-blue-100 w-full text-black'>
            <div className='flex w-full justify-around px-8 py-5 text-center flex-col lg:flex-row'>


                <div className='mb-4 lg:w-1/4 bg-white-100 rounded-md h-80 p-5'>
                    <div className='flex flex-col gap-3 items-center '>
                        <div className='relative mb-4'>
                            <div className='w-20 h-20 absolute top-2 -right-1 ' id="con">
                                <Image src={search} objectFit='contain' />
                            </div>
                            <div id="sub" className='relative flex mt-auto justify-center rounded-l-full rounded-br-full border-2 border-yellow-100 w-24 h-24 hover:rotate-133 ease-linear duration-500 hover:duration-500'>

                            </div>
                        </div>

                        <div className='font-bold text-l '>What you are looking for</div>
                        <div className='text-sm text-gray-600 w-4/5'>To refine and redefine healthcare standards through consistent quality enhancement endeavors... </div>


                    </div>
                </div>

                <div className='mb-4 lg:w-1/4 bg-white-100 rounded-md h-80 p-5'>
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='relative mb-4'>
                        <div className='w-20 h-20 absolute top-2 -right-1 ' id="con">
                                <Image src={search} objectFit='contain' />
                            </div>
                            <div id="sub" className='relative flex mt-auto justify-center rounded-l-full rounded-br-full border-2 border-yellow-100 w-24 h-24 hover:rotate-133 ease-linear duration-500 hover:duration-500'>

                            </div>
                        </div> <div className='font-bold text-l '>Choose Experts </div>
                        <div className='text-sm text-gray-600 w-4/5'>To achieve global preference in healthcare through our distinctive services based on excellence... </div>


                    </div>
                </div>


                <div className='mb-4 lg:w-1/4 bg-white-100 rounded-md h-80 p-5'>
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='relative mb-4'>
                        <div className='w-20 h-20 absolute top-2 -right-1 ' id="con">
                                <Image src={search} objectFit='contain' />
                            </div>
                            <div id="sub" className='relative flex mt-auto justify-center rounded-l-full rounded-br-full border-2 border-yellow-100 w-24 h-24 hover:rotate-133 ease-linear duration-500 hover:duration-500'>

                            </div>
                        </div><div className='font-bold text-l  '>Book and track sessions  </div>
                        <div className='text-sm text-gray-600 w-4/5'>TExcellence, Diversity, Integrity, Compassion, Teamwork, Social Commitment... </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission