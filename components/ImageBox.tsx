
'use client'
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"


const images = [
  '/1img.png',
  '/2img.png',
  '/3img.png'
];

const ImageBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className='relative w-[320px] h-[380px] lg:w-[636px] lg:h-[434px]'>
      <div className='w-full h-full overflow-hidden rounded-[12px] border-l-[2px] border-white border-t-[2px]'>
        <img
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className='w-full h-full object-cover transition-all duration-1000'
        />
      </div>
      <div className='absolute bottom-2 flex space-x-2 pl-[30px] pb-[30px]'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-[2px] w-8 ${index === currentIndex ? 'bg-green' : 'bg-[#616358]'}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default ImageBox;