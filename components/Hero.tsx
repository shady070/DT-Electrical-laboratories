import { Playfair_Display_SC } from "next/font/google"
import ImageBox from "./ImageBox";
import Clients from "./Clients";
import { motion } from "framer-motion"


const playfairDisplaySC = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Hero = () => {
  return (
    <div className="px-[22px] py-[16px] lg:flex lg:flex-col lg:items-center lg:text-center lg:pt-[48px] lg:h-[745px] h-[940px] bg-black bg-gradient bg-no-repeat bg-cover  ">
    <div className="text-white">
    <div className={`${playfairDisplaySC.className} text-[24px] w-[180px] lg:w-full lg:text-[68px]  leading-extra-tight pb-[4px]`}>
        <span>DT Electrical</span>
        <span className="text-green"> laboratories</span>
      </div>
      <p className="text-[#616358] text-[16px] lg:text-[53px] ">THE ELECTRICIAN YOU NEED”</p>
    </div>
    <div className="lg:flex lg:gap-[24px]">
    <div className="pt-[26px]">
    <ImageBox />
    </div>
    <div className="pt-[26px]">
    <Clients />
    </div>
    </div>
    </div>
  )
}

export default Hero