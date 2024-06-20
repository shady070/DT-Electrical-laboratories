'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

// Define an array of objects with the data for each box
const services = [
  {
    id: 1,
    buttonText: "Let's Talk",
    title: "Trip Fault Finding",
    imageUrl: "/COS.png"
  },
  {
    id: 2,
    buttonText: "Contact Us",
    title: "Electrical Repairs",
    imageUrl: "/service2.png"
  },
  {
    id: 3,
    buttonText: "Learn More",
    title: "Installation Services",
    imageUrl: "/service4.png"
  },
  {
    id: 4,
    buttonText: "Let's Talk",
    title: "Flood Lights Installation",
    imageUrl: "/service3.png"
  },
  {
    id: 5,
    buttonText: "Let's Talk",
    title: "Issue of Certificates of Compliance (COCs)",
    imageUrl: "/service5.png"
  },
  {
    id: 6,
    buttonText: "Let's Talk",
    title: "General Maintenance",
    imageUrl: "/service6.png"
  },
];

const ServiceScroller = ({ buttonText, title, imageUrl }) => {
  return (
    <div className='min-w-[270px] px-[20px]'>
      <div className='h-[160px] w-[270px] rounded-t-lg border-l-[5px] flex items-center justify-center relative overflow-hidden'>
      <Image
          src={imageUrl}
          alt={title}
          layout='fill' // Use 'fill' to stretch image within its container
          objectFit='cover' // Maintain aspect ratio and cover container
          className='absolute inset-0 opacity-50' // Style for opacity and positioning
        />
        <Link href="tel:+27731128948"><button className="w-[87px] h-[35px] bg-[#B4BF6A] rounded-full drop-shadow-lg text-[12px] z-10">{buttonText}</button></Link> 
      </div>
      <div className="h-[66px] bg-[#6F7E70] rounded-b-lg border-l-[5px] border-b-[2px]">
        <h1 className="w-[250px] text-[16px] text-white py-[10px] px-[10px]">{title}</h1>
      </div>
    </div>
  );
};

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : services.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < services.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className='relative w-full'>
      <div className='flex overflow-hidden'>
        <div
          className='flex transition-transform duration-300 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 310}px)` }}
        >
          {services.map(service => (
            <ServiceScroller 
              key={service.id} 
              buttonText={service.buttonText} 
              title={service.title} 
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
      <button onClick={handlePrev} className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-green text-black p-2 rounded-full'>
        &lt;
      </button>
      <button onClick={handleNext} className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-green text-black p-2 rounded-full'>
        &gt;
      </button>
    </div>
  );
};

export default Services;
