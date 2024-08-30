import React from 'react'
import { nikeImg, bagImg, searchImg, Heart } from '../utils'
import { navList } from '../constants'


const Navbar = () => {
  return (
    <header className=" bg-white w-full py-5 sm:px-10 px-5 flex justify-between ites-center">
      
      <nav className="flex w-full screen-max-width ">
        <img src = {nikeImg} alt="Nike logo" width={56} height={18*2} className="sm:center"/>
        <div className="flex flex-1 justify-center max-sm:hidden">
                {navList.map((nav,i) => (
                    <div key={nav} className="px-3 text-sm cursor-pointer font-semibold text-black hover:underline transition-all">
                    {nav}
                </div>))}
            </div>
            <div className = "flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">

            <div className="relative flex items-center  ">
              
                <input 
                 
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="pl-8 p-1 border bg-gray-100 rounded-full w-full max-md:hidden cursor-pointer hover:bg-slate-50"
                />

                <img
                  src={searchImg}
                  alt="search"
                  className="absolute left-2 w-4 h- pointer-events-none"
                />
              </div>
                 <img
                      src={searchImg}
                      alt="search"
                      width={18}
                      height={18}
                      className="block md:hidden"
                    />

                <img src={bagImg} alt="bag" width={18} height={18}/>
                <img src={Heart} alt="hert" width={18} height={18}/>
            </div>
      </nav>
    </header>
  )
}

export default Navbar