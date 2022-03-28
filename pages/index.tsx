import type { NextPage } from 'next'
import Header from '../components/Header'
import bg from "../public/bg.png";
import Image from "next/Image"

import SocilaMedia from '../components/SocilaMedia';
import Fotter from '../components/Fotter';
import Mission from '../components/Mission';
import BannerMessage from '../components/BannerMessage';
import Crausal from '../components/Crausal';
import JoinMessage from '../components/JoinMessage';

const Home: NextPage = () => {

  return (
    <div >      

      <div className="mt-20 flex  flex-wrap-reverse w-full p-10 bg-white-100 h-auto text-slate-800"  >


       

        <div className=' flex flex-col first-line:w-full lg:w-1/2 justify-center items-end'>

          <div className='p-10'>
            <h3 className='text-xl text-slate-700'>Connect with a Counselor, anywhere, anytime </h3>

            <div className='text-slate-800 my-'>
              <h1 className='text-5xl'>Your Trust is Our</h1>
              <h1 className='text-5xl'>Greated Incentive</h1>
            </div>

            <p className='text-sm text-slate-600 text-justify mt-2 mb-2'>
              With video or audio and live chat. If you wish, stay completely anonymous.
              Book your session now.
              Begin your session via video chat or messaging. Track your nutritional and mental state daily. Browse counselors

            </p>



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
        <div className='w-full lg:w-1/2 '>
          <Image src={bg} objectFit="cover" />
        </div>
      </div>

      <BannerMessage />
      <Mission />     
        <Crausal /> 
      <JoinMessage />


    </div >


  )
}

export default Home
