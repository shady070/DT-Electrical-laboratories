"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"


const textData = [
  {
    clients: "60+",
    description: "I recently hired DT Electrical laboratories for some electrical work in my home, and I couldn't be happier with the service I received. The team was professional, efficient, and extremely knowledgeable. They took the time to explain everything and ensured that all the work was done to the highest standard."
  },
  {
    clients: "60+",
    description: "I recently renovated my office space and needed extensive electrical upgrades. DT Electrical Laboratories handled the project with professionalism and efficiency. They provided innovative solutions to enhance energy efficiency and ensure optimal functionality. The entire team was courteous, knowledgeable, and delivered exceptional results. I am delighted with their service and would recommend them without hesitation."
  },
  {
    clients: "60+",
    description: "After experiencing constant electrical issues, I decided to hire DT Electrical Laboratories based on a friend's recommendation. From the initial consultation to the completion of the project, they exceeded my expectations. Their expertise in diagnosing and fixing electrical problems was evident, and the final results were flawless. I am grateful for their expertise and would not hesitate to hire them again."
  }
];

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textData.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div  className='w-[320px] h-[380px] lg:w-[396px] lg:flex lg:flex-col lg:justify-center lg:item-center lg:h-[434px] bg-[rgba(43,43,43,.5)] rounded-[12px] border-l-[2px] border-white border-t-[2px] '>
      <div className='pt-[8px] px-[18px]'>
        <div className='text-[24px] text-green flex flex-col leading-extra-tight'>
          <span>{textData[currentIndex].clients}</span>
          <span className="text-green text-[16px]">SATISFIED CLIENTS</span>
        </div>
        <Image alt="Profile" className="pt-[7px]" src='/profile.png' width={90} height={40} />
        <p className="text-[12px] lg:text-[16px] text-white italic pt-[10px]">{textData[currentIndex].description}</p>
        <div className="flex gap-[5px]">
          {textData.map((_, index) => (
            <div key={index} className={`w-[7px] h-[7px] rounded-lg mt-[15px] ${index === currentIndex ? 'bg-green' : 'bg-[#616358]'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
