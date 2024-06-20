'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Image component from next/image

// Define array of images
const images = [
  '/1img.png',
  '/2img.png',
  '/3img.png'
];

// ImageBox component
const ImageBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Interval to change image every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <motion.div className='relative w-[320px] h-[380px] lg:w-[636px] lg:h-[434px]'>
      <div className='w-full h-full overflow-hidden rounded-[12px] border-l-[2px] border-white border-t-[2px]'>
        {/* Replace <img> with <Image> from next/image */}
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={320} // Specify the width of the image
          height={380} // Specify the height of the image
          className='w-full h-full object-cover transition-all duration-1000'
        />
      </div>
      {/* Image indicator dots */}
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
