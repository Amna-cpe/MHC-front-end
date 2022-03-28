import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/Image"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import Boss from "../public/boss.jpg"
function AboutMessage() {
    return (
        <div className='w-full bg-black h-auto '>
            <div className='flex flex-col lg:flex-row w-full'>
                <div className=' lg:w-2/4  bg-gray-100 p-5 text-black'>
                    <div className='flex flex-col gap-4 pl-5'>
                        <div className='text-3xl'>ABEER MEDICAL GROUP, KSA</div>
                        <div className="w-10 border-b-2 border-green-500"></div>
                        <div className='lg:w-9/12 text-sm text-slate-800'>Abeer Medical Group is a healthcare organization well known for
                            quality and affordable healthcare. The healthcare company owns and
                            operates a chain of medical centers, hospitals, pharmacies and optical outlets across
                            the major cities in Saudi Arabia. Abeer established at Sharafiyah in Jeddah in 1999 is catering
                            to the healthcare needs of nearly 4 million patients every year. The healthcare company is keen on
                            providing patient care of exceptional standards through its best-in-class
                            hospitals and medical centers featuring advanced medical technology and modernized care-giving methods... </div>
                        <div><button className="px-5 py-3 bg-green-500 text-white text-sm border-green-500
                        hover:bg-white border-2  hover:text-green-500 
                        ">READ MORE</button></div>

                    </div>
                </div>
                <div className='lg:w-2/4 boss p-4 text-white flex px-6'>
                   <div className="relative flex lg:gap-4 lg:pl-5">
                   <FontAwesomeIcon
                        icon={faQuoteLeft}
                        style={{ fontSize: 40 }}
                        className="hidden lg:block"

                    />
                    <div className='flex flex-col gap-4 pl-5'>
                        <div className='text-3xl'>   President's Message</div>
                        <div className="w-10 border-b-2"></div>
                        <div>Thank you for visiting us. With utmost pleasure, I welcome you to feel Abeer’s cordial care-giving. In my view, the actual growth of healthcare industry should never be understood in terms of the mushrooming of healthcare institutions. It has to be rather on the basis of increasing awareness on the ways to enhance... </div>
                        <div className='flex gap-5'>
                            {/* image */}
                            <div className="w-20 h-20">
                                <Image src={Boss} />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <h1 className="text-xl font-bold">Alungal Mohamed</h1>
                                <h4>President of Abeer Group</h4>
                            </div>
                        </div>
                        <div><button className="px-5 py-3 bg-transparent border-2 border-white text-white text-sm
                         hover:bg-white hover:text-green-500 
                        ">READ MORE</button></div>

                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMessage