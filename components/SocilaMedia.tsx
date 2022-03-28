import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
    faInstagram,
    faFacebookF,
    faTwitter,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
function SocilaMedia() {
    return (

        <div className='fixed right-0 top-52 social'>
            <div className="flex flex-col gap-2 ">
           
                <a href="https://www.google.com" target="_blank"  className="rounded-l-full  h-9 bg-slate-800  bg-opacity-40 flex 
                items-center gap-2  flex-grow cursor-pointer relative -right-14 hover:right-0 ease-in duration-300 group hover:bg-white ">

                    <div className="rounded-full w-7 h-7 flex justify-center items-center bg-white  ml-2 inside">
                        <FontAwesomeIcon
                            icon={faFacebookF}
                            style={{ fontSize: 13 }}
                            
                        />
                    </div>

                    <div className="text-slate-100 text-xs pr-1 text">
                        Facebook
                    </div>
                </a>

                <a href="https://www.google.com" target="_blank"  className="rounded-l-full  h-9 bg-slate-800  bg-opacity-40 flex 
                items-center gap-2  flex-grow cursor-pointer relative -right-14 hover:right-0 ease-in duration-300 group hover:bg-white ">

                    <div className="rounded-full w-7 h-7 flex justify-center items-center bg-white  ml-2 inside">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            style={{ fontSize: 13 }}
                            
                        />
                    </div>

                    <div className="text-slate-100 text-xs pr-1 text">
                    Instagram
                    </div>
                </a>

                <a href="https://www.google.com" target="_blank"  className="rounded-l-full  h-9 bg-slate-800  bg-opacity-40 flex 
                items-center gap-2  flex-grow cursor-pointer relative -right-14 hover:right-0 ease-in duration-300 group hover:bg-white ">

                    <div className="rounded-full w-7 h-7 flex justify-center items-center bg-white  ml-2 inside">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            style={{ fontSize: 13 }}
                            
                        />
                    </div>

                    <div className="text-slate-100 text-xs pr-1 text">
                        Twitter
                    </div>
                </a>

                <a href="https://www.google.com" target="_blank"  className="rounded-l-full  h-9 bg-slate-800  bg-opacity-40 flex 
                items-center gap-2  flex-grow cursor-pointer relative -right-14 hover:right-0 ease-in duration-300 group hover:bg-white ">

                    <div className="rounded-full w-7 h-7 flex justify-center items-center bg-white  ml-2 inside">
                        <FontAwesomeIcon
                            icon={faLinkedinIn}
                            style={{ fontSize: 13 }}
                            
                        />
                    </div>

                    <div className="text-slate-100 text-xs pr-1 text">
                        LinkedIn
                    </div>
                </a>


            </div>

        </div>
    )
}

export default SocilaMedia