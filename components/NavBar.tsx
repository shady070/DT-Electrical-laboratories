import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-black px-[22px]  lg:px-[74px] py-[15px] flex items-center justify-between ">
      <Link href="/"><Image className='lg:w-[179px] lg:h-[69px]' src="/dtlogo.svg" width={83} height={32} alt="Logo" /></Link>   
      <div className="flex flex-col items-center">
      <Link href="https://wa.me/27731128948" target="_blank" rel="noopener noreferrer"><button className="text-white lg:text-[18px] text-[12px]">Let's Talk</button></Link> 
      <div className="w-[86px] h-[1px] bg-green " />
      </div>
    </nav>
  )
}

export default NavBar