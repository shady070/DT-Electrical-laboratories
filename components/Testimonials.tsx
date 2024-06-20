import { Playfair_Display_SC } from "next/font/google"

const playfairDisplaySC = Playfair_Display_SC({
    subsets: ['latin'],
    weight: ['400', '700'],
  });

const Testimonials = () => {
  return (
    <div className="bg-[#F4F4F2] px-[22px] py-[16px] lg:px-[72px] lg:py-[50px] flex flex-col lg:gap-[20px] justify-center items-center"> 
    <div>
        <h1 className={`${playfairDisplaySC.className} lg:text-[138px] text-[50px]`}>“</h1>
    </div>
    <div className="lg:text-[36px] ">
        <h1 className="lg:w-[698px] text-center">I feel confident and empowered in my home's electrical safety.</h1>
    </div>
    <div>
        <p className="text-[12px] lg:text-[20px] italic lg:w-[834px] text-center ">Before, I was struggling with constant electrical issues in my home, and it made me feel frustrated and anxious. Now, with DT Electrical Laboratories' expert services, I've resolved all my electrical problems and enjoy peace of mind knowing my home is safe and efficient.</p>
    </div>
    </div>
  )
}

export default Testimonials