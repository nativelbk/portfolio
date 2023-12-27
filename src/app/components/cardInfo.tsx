import { Button } from "@nextui-org/react"
import React, {FC} from "react"
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function CardInfo () {
    return (
        <section className="card--info flex flex-col gap-[16px] py-[12px] " >
            <section className="name--container text-lg flex items-center pl-2 font-lg " >
                Bakoize Nativel
            </section>
            <section className="info--container flex flex-col pl-3 gap-5 items-start justify-center " >
                <div className="flex gap-3 justify-center " >
                    <FaPhone className="text-[20px]" />
                    <span className="text-base" > +261341328678 </span>
                </div>
                <div className="flex gap-3 justify-center " >
                    <MdEmail className="text-[20px]" />
                    <span className="text-base" > nativelbk@gmail.com </span>
                </div>
                <div className="flex gap-3 justify-center " >
                    <IoLocationSharp className="text-[20px]" />
                    <span className="text-base" > Fianarantsoa Madagascar </span>
                </div>
            </section>
            <section className="w-[100%] flex justify-end pr-[16px] " >
                <Button className="info--button font-medium text-base " >
                    Contacter
                </Button>
            </section>
        </section>
    )
}