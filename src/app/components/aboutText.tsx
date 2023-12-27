import { BsTelephone } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { SplitText } from "@cyriacbr/react-split-text";
import { motion, animate, stagger } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import CardInfo from "./cardInfo"

export default function AboutText () {
    return(
        <section className="flex flex-col items-start gap-4 " >
                <main className="flex max-lg:flex-col max-lg:gap-[40px] justify-around  mt-4 " >
                    <section className=" max-sm:max-w-[400px] max-[422px]:max-w-[300px] max-w-[600px] max-[883px]:w-[600px] max-[1194px]:max-w-[550px] max-[979px]:w-[480px] text-justify font-normal max-lg:leading-2  leading-8 text-md text-whiteText " >
                        {/* <SplitText 
                            WordWrapper={({ children, countIndex }) => (
                                <motion.span className="inline-block text-justify wrapper text-whiteText " viewport={{ once: true }} whileInView={{ y:[15, 1], opacity:[0,1]}} transition={{delay: countIndex*0.05}}  >
                                    &nbsp;{children}
                                </motion.span>
                            )}
                            className=" text-justify "
                        > */}
                            Étant actuellement un étudiant de l&apos;ENI (Ecole Nationale d&apos;Informatique) Fianarantsoa, je suis passioné par le développement web et les technologies du web en partculier le javascript et ses frameworks. Je suis une personne dynamique qui a toujours envie d&apos;apprendre de nouvelles choses et de constamment me perfectionner.
                        {/* </SplitText> */}
                    </section>
                </main>
                <main>
                </main>
        </section>
    )
}