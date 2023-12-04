import Image from "next/image";
import img_desktop from "../../public/image-header-desktop.jpg"


function ImgDesktop() {
    return (
        <div className="bg-Soft-violet(accent) rounded-r-lg invisible w-0 lg:visible lg:w-full">
            <Image src={img_desktop} alt="" className="mix-blend-multiply rounded-r-lg" />
        </div>
    );
}

export default ImgDesktop;