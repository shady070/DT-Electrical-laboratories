import { Playfair_Display_SC } from "next/font/google"
import Image from "next/image";
import Link from "next/link";


const playfairDisplaySC = Playfair_Display_SC({
    subsets: ['latin'],
    weight: ['400', '700'],
  });

const HomePro = () => {
  return (
    <div className="h-[338px] w-[320px] lg:w-full lg:h-[156px] bg-home mt-[25px] rounded-[12px] bg-cover ">
      <div className="flex flex-col px-[20px] py-[12px]">
        <p className="text-[12px] text-green">Location</p>
        <div className="text-[16px] text-white w-[200px] ">
            <h1>Gauteng Johannesburg</h1>
        </div>
        <div>
            <div className={`${playfairDisplaySC.className} pt-[79px] lg:pt-[10px] lg:flex lg:justify-end text-white text-[16px]`}>
                <h1>Single Phase House Rewiring Project</h1>
            </div>
            <h1 className="text-[14px] text-white pt-[78px] lg:pt-[10px]" >April, 26-2024</h1>
            <a href="#" target='_blank'>
            <Link href="/houserewiring"><Image alt="Contact" src='/Contact-btn.svg' width={105} height={23} /></Link> 
            </a>
        </div>
      </div>
    </div>
  )
}

export default HomePro