import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Community = () => {
  const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1
    }
  };
  return (
    
    <div className='md:pl-10  screen-max-width  content-center justify-center pt-20'>
    <h1 className=' flex content-center   text-white   pb-10 text-xl'>Communities of Force</h1>
      <Carousel responsive={responsive}>
      
        <div className='mx-auto w-80 h-70'>
          <img src="/public/Assets/image/Community1.jpg" alt="Community 1 "  />
        </div>
        <div className='mx-auto w-80 h-70'>
          <img src="/public/Assets/image/Community2.jpg" alt="Community 1"  />
        </div>
        <div className='mx-auto w-80 h-70'>
          <img src="/public/Assets/image/Community3.jpg" alt="Community 1"  />
        </div>
        <div className='mx-auto w-80 h-70'>
          <img src="/public/Assets/image/Community4.jpg" alt="Community 1"  />
        </div>
        <div className='mx-auto w-80 h-70'>
          <img src="/public/Assets/image/Community5.jpg" alt="Community 1"  />
        </div>
      </Carousel>
  </div>
  )
}

export default Community