import { Playfair_Display_SC } from "next/font/google"
import WorkCard from "./WorkCard";
import SupMrk from "./SupMrk";
import HomePro from "./HomePro";
import Link from "next/link";

const playfairDisplaySC = Playfair_Display_SC({
    subsets: ['latin'],
    weight: ['400', '700'],
  });
  

const PreviousWork = () => {
  return (
    <div className="pt-[16px] px-[22px] lg:px-[72px] lg:py-[45px] bg-prev bg-no-repeat bg-cover ">
      <div className="text-[#616358]">
        <h1 className={`${playfairDisplaySC.className} lg:text-[38px] text-white `}>Previous work</h1>
        <div className="text-[12px] lg:text-[20px] pt-[4px] lg:flex lg:gap-[20px]">
            <div className="flex gap-[4px] items-center">
            <div className="w-[10px] h-[10px] rounded-lg bg-green " />
            <p>SOLAR INSTALLATION</p>
            </div>
            <div className="flex gap-[4px] items-center">
            <div className="w-[10px] h-[10px] rounded-lg bg-green" />
            <p>ELECTRICAL SYSTEM REINSTALLS</p>
            </div>
        </div>
      </div>
      <div>
      <WorkCard />
      <SupMrk />
      <HomePro />
      </div>
      <div className="flex item-center justify-center py-[10px] lg:py-[30px]">
        <Link href="https://wa.me/27731128948" target="_blank" rel="noopener noreferrer"><button className="w-[87px] h-[35px] lg:w-[122px] lg:h-[50px] lg:text-[16px] bg-green rounded-full text-[12px]">Let's Talk</button></Link> 
      </div>
    </div>
  )
}

export default PreviousWork