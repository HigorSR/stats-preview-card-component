import Image from "next/image";
import img_mobile from "../../public/image-header-mobile.jpg"

function ImgMobile() {
    return (
        <div className="bg-Soft-violet(accent) rounded-t-lg mb-8 lg:invisible lg:w-0">
            <Image src={img_mobile} alt="image header" className="mix-blend-multiply rounded-t-lg" />
        </div>
    );
}

export default ImgMobile;