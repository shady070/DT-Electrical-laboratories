import { Playfair_Display_SC } from "next/font/google"

const playfairDisplaySC = Playfair_Display_SC({
    subsets: ['latin'],
    weight: ['400', '700'],
  });
  

const AboutUs = () => {
  return (
    <div className="bg-[#F4F4F2] px-[22px] py-[16px] lg:px-[72px] lg:py-[50px] lg:flex lg:gap-[105px] justify-center"> 
        <div>
            <h1 className={`${playfairDisplaySC.className} lg:text-[38px] pb-[10px]`}>ABOUT US</h1>
        </div>
        <div>
            <p className="text-[12px] lg:text-[20px] italic lg:w-[834px]">Welcome to DT Electrical Laboratories, your trusted partner for all electrical solutions in South Africa. With a team of highly skilled professionals, we specialize in a wide range of services, including the Flood Lights Installation, Downlights Installation, Electrical Fence Installation, Solar Installation, Trip Fault Finding, Issue of (COCs) and comprehensive electrical work for both residential and commercial properties. Our commitment to excellence and safety ensures that every project is completed to the highest standards. At DT Electrical Laboratories, we are dedicated to providing innovative and reliable electrical solutions to meet all your needs.</p>
        </div>
    </div>
  )
}

export default AboutUs