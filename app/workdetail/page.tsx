'use client'
import { Playfair_Display_SC } from "next/font/google"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/solar1.jpeg',
  '/solar2.jpeg',
  '/solar3.jpeg'
];
const imagev1 = [
  '/solar4.jpeg',
  '/solar5.jpeg',
  '/solar6.jpeg'
]
const playfairDisplaySC = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const SolarInstallation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black">
      <div className="h-[260px] lg:px-[72px] w-full bg-head1 bg-cover px-[22px] py-[30px] bg-center bg-no-repeat">
        <h1 className={`${playfairDisplaySC.className} text-[24px] lg:w-[515px] lg:text-[38px] text-green leading-tight`}>On/Off Grid Solar<span className="text-white"> and Inverter Installation</span></h1>
        <p className="text-white text-[12px] lg:text-[20px] pt-[7px]">A comprehensive electrical solution for Home.</p>
      </div>
      <div className="lg:flex lg:mb-[140px]">
        <div className="mx-[22px] lg:mx-[85px] h-[202px] my-[24px] rounded-lg">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width={523}
            height={383}
            className='w-full lg:w-[523px] lg:h-[383px] h-full object-cover transition-all duration-1000 rounded-lg'
          />
        </div>
        <div className="mx-[22px] text-white text-[22px] lg:text-[24px] lg:pt-[30px]">
          <h1>Project Description</h1>
          <p className="text-[12px] italic my-[20px] lg:text-[20px] lg:w-[547px]">This project involved the complete electrical installation for a newly opened supermarket, consisting of two main sections: the office area and the floor area. Our team successfully ran a 3-phase cable from the Main Distribution Board (DB) into the supermarket, ensuring a robust and reliable power supply.</p>
        </div>
      </div>
      <div className="lg:flex lg:flex-row-reverse">
        <div className="mx-[22px] lg:mx-[85px] h-[202px] my-[24px] rounded-lg">
          <Image
            src={imagev1[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width={523}
            height={383}
            className='w-full lg:w-[523px] lg:h-[383px] h-full object-cover transition-all duration-1000 rounded-lg'
          />
        </div>
        <div className="mx-[22px] lg:mx-[85px] text-white text-[22px] lg:text-[24px] lg:w-[523px] lg:mb-[30px]">
          <h1>Key Features</h1>
          <p className="text-[14px] lg:text-[20px] my-[20px] text-green font-medium">Solar Panels: <span className="italic text-white">8 panels, each with a capacity of 460 watts, providing substantial power generation.</span></p>
          <p className="text-[14px] lg:text-[20px] my-[20px] text-green font-medium">Inverter: <span className="italic text-white">A 6.2kVA inverter capable of powering essential appliances such as the fridge, TV, lights, and secondary plugs.</span></p>
          <p className="text-[14px] lg:text-[20px] my-[20px] text-green font-medium">Exclusions: <span className="italic text-white"> Stove and geyser were excluded to optimize battery usage.</span></p>
          <p className="text-[14px] lg:text-[20px] my-[20px] text-green font-medium">Battery Storage:  <span className="italic text-white">A 48V 100Ah Hubble battery for efficient energy storage.</span></p>
        </div>
      </div>
      <div className="bg-[#F4F4F2] px-[22px] py-[16px] lg:px-[72px] lg:py-[50px] flex flex-col lg:gap-[20px] justify-center items-center">
        <div>
          <h1 className={`${playfairDisplaySC.className} lg:text-[138px] text-[50px]`}>“</h1>
        </div>
        <div className="lg:text-[36px]">
          <h1 className="lg:w-[698px] text-center">Reliable and Efficient Solar Solution</h1>
        </div>
        <div>
          <p className="text-[12px] lg:text-[20px] italic lg:w-[834px] text-center">I recently hired DT Electrical Laboratories for the installation of an on/off grid solar and inverter system, and I am extremely satisfied with the results. The setup includes 8 high-capacity solar panels and a Hubble battery, providing us with reliable power for our essential appliances like the fridge, TV, and lights. The 6.2kVA inverter works perfectly, ensuring we have continuous power even during outages. The installation was handled professionally, and the team's attention to detail was impressive. I highly recommend DT Electrical Laboratories for their expertise and excellent service. This solar system has significantly improved our energy independence and peace of mind.</p>
        </div>
      </div>
    </div>
  );
}

export default SolarInstallation;
