'use client'
import { Playfair_Display_SC } from "next/font/google"
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"


const images = [
  '/supmrk1.jpeg',
  '/supmrk2.jpeg',
  '/supmrk3.jpeg'
];
const imagev1 = [
  '/supmrk4.jpeg',
  '/supmrk5.jpeg',
  '/supmrk6.jpeg'
]
const playfairDisplaySC = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const supermarket = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black ">
      <div className="h-[260px] lg:px-[72px]  w-full bg-head2 bg-cover px-[22px] py-[30px] bg-center bg-no-repeat ">
       <h1 className={`${playfairDisplaySC.className} text-[24px] lg:w-[515px] lg:text-[38px] text-green leading-tight`}>Supermarket<span className="text-white"> Electrical Installation</span></h1>
       <p className="text-white text-[12px] lg:text-[20px] pt-[7px]">A comprehensive electrical solution for a modern retail space.</p>
      </div>
      <div className="lg:flex lg:mb-[140px]">
        <div className="mx-[22px] lg:mx-[85px] h-[202px] my-[24px] rounded-lg">
          <img
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className='w-full lg:w-[523px] lg:h-[383px]  h-full object-cover transition-all duration-1000 rounded-lg'
          />
        </div>
      <div className="mx-[22px] text-white text-[22px] lg:text-[24px] lg:pt-[30px] ">
        <h1>Project Description</h1>
        <p className="text-[12px] italic my-[20px] lg:text-[20px] lg:w-[547px] ">This project entailed a comprehensive rewiring of a single-phase residential property. Our team meticulously ran cables for various installations, ensuring a safe and efficient electrical system throughout the home.</p>
      </div>
      </div>
      <div className="lg:flex lg:flex-row-reverse ">
      <div className="mx-[22px] lg:mx-[85px] h-[202px] my-[24px] rounded-lg">
          <img
          src={imagev1[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className='w-full lg:w-[523px] lg:h-[383px] h-full object-cover transition-all duration-1000 rounded-lg'
          />
      </div>
      <div className="mx-[22px] lg:mx-[85px] text-white text-[22px] lg:text-[24px] lg:w-[523px] ">
        <h1>Key Features</h1>
        <p className="text-[14px] lg:text-[20px] my-[20px] text-green font-medium ">Industrial Finish: <span className="italic text-white ">Included galvanized pipes, surface plugs, and overhead cable trays mounted on the lap-channels.</span> </p>
        <p className="text-[14px] lg:text-[20px] my-[20px] text-green font-medium ">Wiring: <span className="italic text-white ">Used 1.5 mm and 2.5 mm cables respectively for lights and plugs to ensure safety and efficiency.</span> </p>
        <p className="text-[14px] lg:text-[20px] my-[20px] text-green font-medium ">Lighting: <span className="italic text-white ">Installed fluorescent tubes and fittings under the trays for optimal illumination.</span> </p>
        <p className="text-[14px] lg:text-[20px] my-[20px] text-green font-medium ">Switches: <span className="italic text-white ">Implemented day and night switches for outside lights and the supermarket sign.</span> </p>
    </div>
  </div>
  <div className="bg-[#F4F4F2] px-[22px] py-[16px] lg:px-[72px] lg:py-[50px] flex flex-col lg:gap-[20px] justify-center items-center"> 
    <div>
        <h1 className={`${playfairDisplaySC.className} lg:text-[138px] text-[50px]`}>“</h1>
    </div>
    <div className="lg:text-[36px] ">
        <h1 className="lg:w-[698px] text-center">Exceptional Service and Professionalism</h1>
    </div>
    <div>
        <p className="text-[12px] lg:text-[20px] italic lg:w-[834px] text-center ">I recently hired DT Electrical Laboratories for the electrical installation of our new supermarket, and I couldn't be happier with the results. From the initial consultation to the final touches, their team demonstrated outstanding professionalism and expertise. The project involved complex tasks such as running a 3-phase cable, installing galvanized pipes, and setting up fluorescent lighting, all of which were executed flawlessly. They also installed day and night switches for our outside lights and sign, which added great convenience. The attention to detail and commitment to quality were evident throughout the process. I am thoroughly satisfied with their work and highly recommend DT Electrical Laboratories for any electrical projects. Their services have made a significant positive impact on our business.</p>
    </div>
    </div>
    </div>
  );
}

export default supermarket;