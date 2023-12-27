import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import {menuItems} from "./navBar"
import { Link } from "react-scroll"
import { MdCopyright } from "react-icons/md";


export default function Footer () {
    return (
        <main className="flex gap-12 p-4 items-start bg-frame border-1.5 border-whiteBorder " >
            <section className="text-white flex flex-col gap-3 " >
                <h2 className="text-blue text-2xl " > Informations </h2>
                <div className="flex gap-2 items-center  " >
                    <MdEmail className="text-[20px]" />
                    <span>nativelbk@gmail.com</span>
                </div>
                <div className="flex gap-2 items-center  " >
                    <FaPhone className="text-[20px]" />
                    <span>+261341328678</span>
                </div>
                <div className="flex gap-2 items-center  " >
                    <FaLocationDot className="text-[22px]" />
                    <span>Fianarantsoa Madagascar</span>
                </div>
            </section>
            <section className="flex flex-col gap-2" >
                <h2 className="text-blue text-2xl " >
                    Liens
                </h2>
                {menuItems?.map((item, index) => (
                    <Link
                    className="w-full hover:cursor-pointer "
                    to={item.to}
                    key={index}
                    >
                    {item.name}
                    </Link>
                ))}
            </section>
            <section className=" items-center flex gap-2 justify-center  " >
                <MdCopyright/> Nativel 2023
            </section>
        </main>
    )
}