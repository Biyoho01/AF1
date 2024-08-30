import React, { useEffect, useState, useRef } from 'react';
import { highlightsIn } from '../constants'; // Adjust the import path as needed
import gsap from 'gsap'; // Make sure to import gsap if you're using it

const VideoHighlights = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  
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
    const span = videoSpanRef.current;
    if (span[videoId]) {
      gsap.to(span[videoId], {
        onUpdate: () => {},
        onComplete: () => {}
      });
    }
  }, [videoId, startPlay]);

  return (
    <div className='flex flex-col items-center text-white screen-max-width'>
      {highlightsIn.map(({ id, textList, video }, index) => (
        <div key={id} className='flex px-16 pt-48 flex-col md:flex-row items-start mb-8 space-y-4 md:space-y-0 md:space-x-4' id="content">
          <div className='flex-1 text1'>
            {textList.map((text, textIndex) => (
              <p key={textIndex} className='mb-2'>{text}</p>
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
            ref={(el) => (videoRef.current[index] = el)}
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
