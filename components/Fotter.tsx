import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faMapMarker,
    faPhone,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

function Fotter() {
    return (
        <div className="w-full flex flex-col">
            <div className="h-auto w-full bg-gray-200 text-slate-900 p-12">
                <div className="flex lg:flex-row flex-col justify-between items-center w-full">

                    <div className="flex flex-col gap-2 lg:w-2/5 w-full " >
                        <h1 className=" text-xl lg:text-3xl">Subscribe For Newsletter</h1>
                        <p className="text-sm lg:text-md mb-3">Share you email ID we will share Healthy Tips- Sharing is Caring.
                            We promise that we will not share your email address.</p>

                    </div>
                    <div className="flex gap-3 lg:flex-row flex-col lg:w-2/5 w-full" >
                        <input type="text" className="flex-grow rounded h-10 border-2 border-slate-100  p-3 text-slate-100 text-sm" placeholder="Please Enter Your Email.." />
                        <button className="bg-yellow-100  font-bols px-2   hover:shadow-md rounded">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-blue-200 p-12 text-slate-900 flex flex-col border-b border-gray-400 ">


                <div className="flex gap-16 flex-col lg:flex-row ">

                    <div className="flex flex-col gap-3 ">

                        <h1 className="text-xl mb-2">CONTACT DETAILS</h1>
                        <div className="flex gap-4  items-start">
                            <div>
                                <FontAwesomeIcon
                                    icon={faMapMarker}
                                    style={{ fontSize: 14 }}
                                />
                            </div>
                            <div className="text-sm" >MHC  Jeddah, KSA</div>

                        </div>

                        <div className="flex gap-4 items-center">
                            <FontAwesomeIcon
                                icon={faPhone}
                                style={{ fontSize: 14 }}

                            />
                            <div className="text-sm">
                                +965666666666
                            </div>

                        </div>

                        <div className="flex gap-4 items-center">
                            <FontAwesomeIcon
                                icon={faEnvelope
                                }
                                style={{ fontSize: 14 }}

                            />
                            <div className="text-sm">
                                amnaalthaferi@gmail.com
                            </div>

                        </div>
                    </div>

                    <div>
                        <h1 className="text-xl mb-2">CONTACT DETAILS</h1>
                        <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-4 gap-10">
                            <div className="flex flex-col gap-3 text-sm text-slate-900 cursor-pointer">


                                <div className="contact-anim">Home</div>
                                <div className="contact-anim">About Us</div>
                                <div className="contact-anim">Abeer KSA</div>
                                <div className="contact-anim">Presidentʼs Message</div>

                            </div>

                            <div className="flex flex-col gap-3 text-sm text-slate-900 cursor-pointer">


                                <div className="contact-anim">Mission&Vision</div>
                                <div className="contact-anim"> Departments</div>
                                <div className="contact-anim"> Facilities</div>
                                <div className="contact-anim">Insurence Partners</div>

                            </div>
                       

                         
                        </div>


                    </div>




                </div>

            </div>

            <div className="text-xs px-20 bg-blue-200 text-slate-400 p-4 ">
                © Amna Jasser | Designed and developed By
                <small className="text-white text-xs"> {" "}Amna J. Aldhafeeri</small>

            </div>

        </div>
    )
}

export default Fotter