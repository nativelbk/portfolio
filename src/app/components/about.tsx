import { BsTelephone } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { SplitText } from "@cyriacbr/react-split-text";
import { motion, animate, stagger } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import CardInfo from "./cardInfo"
import AboutText from "./aboutText";

export default function About() {


    return(
        <section className="w-[100%] relative   " >
            <img src="/Group.png" alt="Image" className="absolute index top-8 left-[-50px] " />
            <motion.h2 id="about" transition={{duration:1}} viewport={{once:true}} whileInView={{ y:[50, 1], opacity:[0,1]}} className="font-semibold text-white flex justify-center text-2xl " >
                A PROPOS DE 
                <span className="text-blue" >&nbsp; MOI</span>
            </motion.h2>
            <section className="flex  relative max-[883px]:flex-col items-center justify-around " >
                <AboutText/>
                <motion.img animate={{rotate:[0,180],scale:[1,1.3,1]}} drag className=" max-[1194px]:w-[350px] max-[1058px]:w-[300px] hover:cursor-grab active:cursor-grabbing   "
                    dragConstraints={{ left: 20, right: 20,top:20, bottom:20 }} dragElastic={0.2} transition={{ ease: "linear", duration: 30, repeat: Infinity, repeatType: 'mirror'  }} src="/img2.png" alt="illustration" 
                />
            </section>
        </section>
    )
}   