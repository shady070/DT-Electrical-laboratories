'use client'
import { Playfair_Display_SC } from "next/font/google"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/rewire1.jpeg',
  '/rewire2.jpeg',
  '/rewire3.jpeg'
];
const imagev1 = [
  '/rewire4.jpeg',
  '/rewire5.jpeg',
  '/rewire6.jpeg'
]
const playfairDisplaySC = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const HouseRewiring = () => {
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
       <h1 className={`${playfairDisplaySC.className} text-[24px] lg:w-[515px] lg:text-[38px] text-green leading-tight`}>Single Phase <span className="text-white">House Rewiring Project</span></h1>
       <p className="text-white text-[12px] lg:text-[20px] pt-[7px]">A comprehensive electrical solution for Home.</p>
      </div>
      <div className="lg:flex lg:mb-[140px]">
        <div className="mx-[22px] lg:mx-[85px] h-[202px] my-[24px] rounded-lg">
          <Image
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          width={523}
          height={383}
          className='w-full lg:w-[523px] lg:h-[383px]  h-full object-cover transition-all duration-1000 rounded-lg'
          />
        </div>
      <div className="mx-[22px] text-white text-[22px] lg:text-[24px] lg:pt-[30px] ">
        <h1>Project Description</h1>
        <p className="text-[12px] italic my-[20px] lg:text-[20px] lg:w-[547px] ">This project involved the complete electrical installation for a newly opened supermarket, consisting of two main sections: the office area and the floor area. Our team successfully ran a 3-phase cable from the Main Distribution Board (DB) into the supermarket, ensuring a robust and reliable power supply.</p>
      </div>
      </div>
      <div className="lg:flex lg:flex-row-reverse ">
      <div className="mx-[22px] lg:mx-[85px] h-[202px] my-[24px] rounded-lg">
          <Image
          src={imagev1[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          width={523}
          height={383}
          className='w-full lg:w-[523px] lg:h-[383px] h-full object-cover transition-all duration-1000 rounded-lg'
          />
      </div>
      <div className="mx-[22px] lg:mx-[85px] text-white text-[22px] lg:text-[24px] lg:w-[523px] lg:mb-[30px] ">
        <h1>Key Features</h1>
        <p className="text-[14px] lg:text-[20px] my-[20px] text-green font-medium ">Cable Installation: <span className="italic text-white ">Cables for lights, plugs, geyser, stove, swimming pool, and an outside building.</span> </p>
        <p className="text-[14px] lg:text-[20px] my-[20px] text-green font-medium ">Power Outlets: <span className="italic text-white ">Plugs installed in every room and outside, equipped with an automatic day/night switch for exterior lighting.</span> </p>
        <p className="text-[14px] lg:text-[20px] my-[20px] text-green font-medium ">DB Installations: <span className="italic text-white ">Separate Distribution Boards (DB) for the primary and secondary buildings.</span> </p>
        <p className="text-[14px] lg:text-[20px] my-[20px] text-green font-medium ">Stove Supply: <span className="italic text-white ">Dedicated stove supply with an isolator for safety and convenience.</span> </p>
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
        <p className="text-[12px] lg:text-[20px] italic lg:w-[834px] text-center ">I recently hired DT Electrical Laboratories for the electrical installation of our new supermarket, and I couldnt be happier with the results. From the initial consultation to the final touches, their team demonstrated outstanding professionalism and expertise. The project involved complex tasks such as running a 3-phase cable, installing galvanized pipes, and setting up fluorescent lighting, all of which were executed flawlessly. They also installed day and night switches for our outside lights and sign, which added great convenience. The attention to detail and commitment to quality were evident throughout the process. I am thoroughly satisfied with their work and highly recommend DT Electrical Laboratories for any electrical projects. Their services have made a significant positive impact on our business.</p>
    </div>
    </div>
    </div>
  );
}

export default HouseRewiring;
