import React, { useEffect, useState, useRef } from 'react';
import { highlightsIn2 } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


    gsap.registerPlugin(ScrollTrigger); // Register the plugin

const vhighlight2 = () => {
  const scrollRef = useRef([]);
  const videoRef = useRef([]);
  
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false
  });

  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId]?.pause();
      } else {
        startPlay && videoRef.current[videoId]?.play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useEffect(() => {
    const isSmallDevice = window.innerWidth < 768; // conditional statement for small devices text
  
    scrollRef.current.forEach((textBlock, index) => {
      const parentDiv = textBlock?.closest('.border'); // Target the parent div with the border
      if (textBlock && parentDiv) {
        gsap.fromTo(
          [textBlock, parentDiv], // Animate both the textBlock and its parent with the border
          {
            x: isSmallDevice ? 0 : 0,
            opacity: 0,
            y: 50,
            borderColor: 'transparent', // Animate the border color from transparent
          },
          {
            x: isSmallDevice ? 0 : 0,
            opacity: 1,
            y: 0,
            borderColor: 'white', // End with the white border color
            scrollTrigger: {
              trigger: textBlock,
              start: 'bottom bottom',
              end: 'top 70%',
              scrub: true,
            },
          }
        );
      }
    });
  }, []);
  
  useEffect(() => {
    const isSmallDevice = window.innerWidth < 768; // conditional statement for small devices video
  
    videoRef.current.forEach((video, index) => {
      const parentDiv = video?.closest('.border'); // Target the parent div with the border
      if (video && parentDiv) {
        gsap.fromTo(
          [video, parentDiv], // Animate both the video and its parent with the border
          {
            x: isSmallDevice ? 0 : 0,
            opacity: 0,
            y: 50,
            borderColor: 'transparent', // Animate the border color from transparent
          },
          {
            x: isSmallDevice ? 0 : 0,
            opacity: 1,
            y: 0,
            borderColor: 'white', // End with the white border color
            scrollTrigger: {
              trigger: video,
              start: 'bottom bottom',
              end: 'top 70%',
              scrub: true,
            },
          }
        );
      }
    });
  }, []);
  
  
  
  
  return (
  <div className=''>
    <div className=' pt-20 sm:pt-10 flex flex-col text-white text-center justify-center w-full screen-max-width '>
      {highlightsIn2.map(({ id, textList, video }, index) => (
        <div 
          key={id} 
          className=' pt-20 sm:pt-10 border border-solid border-2 border-x-0   transition-all duration-300 ease-in-out border-white flex-col md:flex-row items-start mb-8 space-y-50 md:space-y-5'>

          <div ref={(el) => (scrollRef.current[index] = el)} className='ftext1 lg:pt-20 sm:pt-20 '>
            {textList.map((text, textIndex) => (
              <p key={textIndex} id='text1' className='mb-2 box-border '>{text}</p>
            ))}
          </div>
          <div className="flex items-center justify-center pt-10 ">
            <video
              id={`video-${index}`}
              className="lg:w-6/12 lg:h-70"
              playsInline
              preload='auto'
              muted
              autoPlay
              loop
              ref={(el) => (videoRef.current[index] = el)} // Single ref assignment
              onPlay={() => {
                setVideo((prevVideo) => ({
                  ...prevVideo,
                  isPlaying: true
                }));
              }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="flex space-x-4 justify-center w-full screen-max-width pt-10">
      {/* Shop the Collection Button */}
      <button className="px-2.5 py-1 text-xs text-black border rounded-full bg-white hover:bg-gray-300 hover:text-black transition-colors duration-300">
        Shop the Collection
      </button>

      {/* Become a Member Button */}
      <button className="px-2.5 py-1 text-xs text-black border rounded-full bg-white hover:bg-gray-300 hover:text-black transition-colors duration-300">
        Become a Member
      </button>
    </div>
          <div className='pb-20'></div>
        </div>
        
      ))}
      
    </div>
    
    <div>
    
    </div>
  </div>
);

};


export default vhighlight2
