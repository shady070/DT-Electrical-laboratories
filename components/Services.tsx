import { Playfair_Display_SC } from "next/font/google"

const playfairDisplaySC = Playfair_Display_SC({
    subsets: ['latin'],
    weight: ['400', '700'],
  });
  
import ServiceScroller from './ServiceScroller'

const Services = () => {
  return (
    <div className="bg-black bg-gradient bg-cover bg-no-repeat">
        <div className="lg:py-[35px] py-[20px] flex flex-col items-center justify-center">
        <h1 className={`${playfairDisplaySC.className} pb-[20px] text-white text-[16px] lg:text-[38px]`}>SERVICE WE OFFER</h1>
        <ServiceScroller />
        </div>
    </div>
  )
}

export default Services