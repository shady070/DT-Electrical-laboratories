import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="lg:py-[38px] bg-black lg:px-[87px] px-[22px] flex flex-col items-center">
      <div className="lg:flex lg:justify-between lg:items-center">
        <div>
          <div className="lg:pr-[650px]">
            <Image className="pb-[10px] pt-[20px]" src='/sayhello.svg' alt="Say Hello" height={48} width={171} />
            <Link className="text-white text-[12px] lg:text-[16px]" href="#">DTElectricallaboratories@gmail.com</Link>
          </div>
        </div>
        <div className="pt-[10px]">
          <Link href="https://wa.me/27731128948" target="_blank" rel="noopener noreferrer">
            <button className="w-[87px] h-[35px] lg:w-[122px] lg:h-[50px] lg:text-[16px] bg-green rounded-full text-[12px]">
              Let&apos;s Talk
            </button>
          </Link> 
        </div>
      </div>
      <div className="h-[1px] bg-white w-[270px] lg:w-[950px] mt-[20px]" />
      <h1 className="lg:pt-[30px] text-white lg:text-[18px] text-[12px] pt-[10px] pb-[10px]">© 2024 ByteBrush. All Rights Reserved.</h1>
    </div>
  )
}

export default Footer
