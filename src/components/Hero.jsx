
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Hero, smallHero } from '../utils'
import { useEffect, useState } from 'react'

const hero = () => {
    
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760? smallHero : Hero)

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760 ){
            setVideoSrc(smallHero)
        }else{
            setVideoSrc(Hero)
        }
    }

    useEffect(() => {
      window.addEventListener('resize', handleVideoSrcSet);

      return () => {
        window.removeEventListener('resize', handleVideoSrcSet)
      }
    
      
    }, [])
    
    

  return (
    
    <section className= "w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
        
        
        <video id='HeroVideo' className="pointer-events-none " autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4"/>
        </video>
        </div>
        <div id="cta"
        className="flex flex-col items-center opacity-0 -translate-y-20"
        ></div>
        
        </section>
        
  )
}

export default hero