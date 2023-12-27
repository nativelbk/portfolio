import { BsTelephone } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import SocialMedia from "./social-media";

export default function Info () {
    return(
        <div className="flex gap-2 flex-col" >
            <div className="flex gap-4 items-center" >
                <div className="w-[37px] flex justify-center items-center h-[37px] border-[1px] border-whiteBorder bg-blue rounded-md" >
                    <FaPhone className="w-[35px]" />
                </div>
                <p className=" text-white text-base  " >+261341328678</p>
            </div>
            <div className="flex gap-4 items-center" >
                <div className="w-[37px] flex justify-center items-center h-[37px] border-[1px] border-whiteBorder bg-blue rounded-md" >
                    <CiMail className="w-[35px]" />
                </div>
                <p className=" text-white text-base  " >nativelbk@gmail.com</p>
            </div>
            <div className="flex gap-4 items-center" >
                <div className="w-[37px] flex justify-center items-center h-[37px] border-[1px] border-whiteBorder bg-blue rounded-md" >
                    <CiLocationOn className="w-[35px]" />
                </div>
                <p className=" text-white text-base  " > Fianarantsoa Madagascar</p>
            </div>
            <section>
                
            </section>
        </div>
    )
}