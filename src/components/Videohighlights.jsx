import React, { useEffect, useState, useRef } from 'react';
import { highlightsIn } from '../constants'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger); // Register the plugin

const VideoHighlights = () => {
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

  ///these commented-out lines of code took me days to fix, it is the hardest debug session of my life i'm keeping it here as a trophy.

  // useEffect(() => {
  //   const isSmallDevice = window.innerWidth < 768; // conditionnal stateent for small devices text
  
  //   scrollRef.current.forEach((textBlock) => {
  //     if (textBlock) {
  //       gsap.fromTo(textBlock, 
  //         { x: isSmallDevice ? -300 : 100, opacity: 0, }, // Starting position (from)
            
  //         { 
  //           x: isSmallDevice ? 20 : 500, opacity: 1, // Ending position (to)
  //           scrollTrigger: {
  //             trigger: textBlock,
  //             start: 'bottom bottom',
  //             end: 'top 50%',
  //             scrub: true,
  //           },
            
  //         }
  //       );
  //     }
  //   });
  // }, []);
  
  // useEffect(() => {
  //   const isSmallDevice = window.innerWidth < 768; // conditionnal stateent for small devices video
  
  //   videoRef.current.forEach((video) => {
  //     if (video) {
  //       gsap.fromTo(video, 
  //         { x: isSmallDevice ? 200 : 0,  opacity: 0, }, // Starting position (from)
  //         { 
  //           x: isSmallDevice ? 20 : -500, opacity: 1, // Ending position (to)
  //           scrollTrigger: {
  //             trigger: video,
  //             start: 'bottom bottom',
  //             end: 'top 50%',
  //             scrub: true,
  //           },
           
  //         }
  //       );
  //     }
  //   });
  // }, []);
  
  useEffect(() => {
    const isSmallDevice = window.innerWidth < 768; // conditionnal stateent for small devices text
  
    scrollRef.current.forEach((textBlock) => {
      if (textBlock) {
        gsap.fromTo(textBlock, 
          { x: isSmallDevice ? -300 : -300, opacity: 0, }, // Starting position (from)
            
          { 
            x: isSmallDevice ? 20 : 100, opacity: 1, // Ending position (to)
            scrollTrigger: {
              trigger: textBlock,
              start: 'bottom bottom',
              end: 'top 50%',
              scrub: true,
            },
            
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    const isSmallDevice = window.innerWidth < 768; // conditionnal stateent for small devices video
  
    videoRef.current.forEach((video) => {
      if (video) {
        gsap.fromTo(video, 
          { x: isSmallDevice ? 200 : 300,  opacity: 0, }, // Starting position (from)
          { 
            x: isSmallDevice ? 20 : 200, opacity: 1, // Ending position (to)
            scrollTrigger: {
              trigger: video,
              start: 'bottom bottom',
              end: 'top 50%',
              scrub: true,
            },
           
          }
        );
      }
    });
  }, []);
  
  
  return (
    <div className='flex content-center justify-between  text-white w-full screen-max-width  '>
      {highlightsIn.map(({ id, textList, video }, index) => (
        <div key={id} className='flex  pt-64 flex-col  md:flex-row items-start mb-8 space-y-4 md:space-y-0 s:space-y-5 md:space-x-4'>
          <div ref={(el) => (scrollRef.current[index] = el)} className=' flex-1  text1 justify-items-center '>
            {textList.map((text, textIndex) => (
              <p key={textIndex} id='text1' className='mb box-border '>{text}</p>
            ))}
          </div>
          <video
            id={`video-${index}`}
            className="w-96 h-70"
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
        
      ))}
      
    </div>
    
  );
};

export default VideoHighlights;
