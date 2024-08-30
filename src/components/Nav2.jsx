import React from 'react';
import { jordanImg } from '../utils';
import { navItems } from '../constants/index';


const Nav2 = () => {
  return (
    <header className='max-sm:hidden h-8 py-1 sm:px-10 bg-gray-100'>
    
    <nav className=" pl-1 justify-between flex px-0 w-full screen-max-width pt-1">
      <img src={jordanImg} width={16} height={36} alt="Jordan Logo" />
      <div className=" flex justify-center space-x-4 text-xs font-semibold  text-black">
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="cursor-pointer hover:text-gray-400 transition-all">{item}</span>
            {index < navItems.length - 1 && <span className="mx-2">|</span>}
          </React.Fragment>
        ))}
      </div>
    </nav>
    </header>
  );
};

export default Nav2;
