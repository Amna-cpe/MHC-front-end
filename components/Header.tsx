import { useEffect, useState } from "react";
import cn from "classnames";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 0? true : false)
     
    

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
}, []);


  let classNameNav = cn("w-full lg:flex lg:items-center lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 border-2 lg:border-none ", { "hidden": !open });
  let mainNavXlasses = cn("flex  justify-between flex-wrap  items-center lg:px-40  z-30 top-0 w-full fixed social",{"bg-yellow-100":scroll})
  let buttonSignUp = cn(
    `font-bold uppercase inline-block text-sm lg:px-3 py-2 mr-2 leading-none rounded text-slate-800 border-white px-2
    hover:border-transparent hover:text-slate-800 hover:bg-yellow-100 mt-4 lg:mt-0`,
   {"   ":scroll})

   let buttonSignIn = cn(`font-bold uppercase inline-block text-sm lg:px-3 py-2 leading-none  px-2
   lg:border rounded text-slate-800 border-slate-800 hover:border-transparent hover:text-slate-800 hover:bg-yellow-100 mt-4 lg:mt-0`,
   {"hover:border-slate-900":scroll})





  return (

    <nav className={mainNavXlasses}>

      <div className="flex items-center flex-shrink-0 text-slate-600 mr-6">
        <svg width="120px" height="60px" fill={scroll ? "#fafafa" : "#e3f6f5"} >
          <path className="infinity-path"
            d="M 30 10 a 20 20 0 1 0 0 40 c 20 0 40 -40 60 -40 a 20 20 0 0 1 0 40 c -20 0 -40 -40 -60 -40"></path>
        </svg>
        <span className="font-semibold text-xl tracking-tight">MHC</span>
      </div>

      <div className="block lg:hidden" onClick={() => setOpen(prev => !prev)}>
        <button className="flex items-center px-3 py-2 border rounded text-green-500 border-green-500 ">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>


      <div className={classNameNav}>

        <div className="text-sm mr-6 ">
          <a href="/" className="font-bold uppercase block mt-4 lg:inline-block lg:mt-0 text-slate-500 hover:text-slate-400 mr-4 hover:bg-yellow-100 lg:hover:bg-transparent p-3 lg:p-0">
            Home
          </a>
          <a href="About" className= "font-bold uppercase block mt-4 lg:inline-block lg:mt-0 text-slate-500 hover:text-slate-400 mr-4 hover:bg-yellow-100 lg:hover:bg-transparent p-3 lg:p-0">
            About
          </a>
          <a href="Couresr" className="font-bold uppercase block mt-4 lg:inline-block lg:mt-0 text-slate-500 hover:text-slate-400 mr-4 hover:bg-yellow-100 lg:hover:bg-transparent p-3 lg:p-0">
            Coures
          </a>

          <a href="Counselors" className="font-bold uppercase block mt-4 lg:inline-block lg:mt-0 text-slate-500 hover:text-slate-400 mr-4 hover:bg-yellow-100 lg:hover:bg-transparent p-3 lg:p-0" >
            Counselors
          </a>

          <a href="JoinUs" className="font-bold uppercase block mt-4 lg:inline-block lg:mt-0 text-slate-500 hover:text-slate-400 mr-4 hover:bg-yellow-100 lg:hover:bg-transparent p-3 lg:p-0">
           Join Us
          </a>

        
        </div>


        <div className="flex flex-col lg:flex-row">
          <div>
            <a href="#" className={buttonSignUp}>Sign up</a>
          </div>

          <div>
            <a href="#" className={buttonSignIn}>Log In</a>
          </div>
        </div>

      </div>






    </nav>
  )
}

export default Header
