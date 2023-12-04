import Image from "next/image";
import ImgMobile from "@/components/img-mobile";
import Description from "@/components/description";
import ImgDesktop from "@/components/img-desktop";


export default function Home() {
  return (
    <div className="flex items-center justify-center bg-Very-dark-blue(main-background)">
      <div className="h-screen"></div>
      <div className="bg-Dark-desaturated-blue(card-background) rounded-lg w-[320px] my-6 lg:flex lg:w-[1020px]">
        <ImgMobile />
        <Description />
        <ImgDesktop/>
      </div>
    </div>
  )
}
