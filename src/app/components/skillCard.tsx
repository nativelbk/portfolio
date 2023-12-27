import Image from "next/image"
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion} from "framer-motion";
import { LangageInfo } from "./skills";
import React, { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function SkillCard ({name, src, alt, id}:  LangageInfo) {
    return (
        <motion.section viewport={{once: true}} transition={{delay: id<4 ? id * 0.3: (id-(id/2))*0.3, duration:0.5}} whileInView={{
            y: [60, -10, 0],
            opacity:[0,1],
        }}
            className="w-[200px] skill max-sm:w-[160px] max-[363px]:w-[250px] p-2 h-[200px] flex flex-col items-center justify-around backdrop-blur-xl rounded " 
        >
            <div>
                <Image
                    src={src}
                    width={100}
                    height={100}
                    alt={alt}
                    className=" select-none rounded "
                />
            </div>
            <div   className="flex    justify-around w-[100%] items-center" >
                <p className=" text-lg " >
                    {name}
                </p>
                <motion.div whileHover={{scale:0.9}} className="w-[37px] hover:cursor-pointer flex justify-center items-center h-[37px] link rounded" >
                    <FaArrowRight className="w-[25px]" />
                </motion.div>
            </div>
        </motion.section>
    )
}