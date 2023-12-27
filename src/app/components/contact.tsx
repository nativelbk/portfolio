import { SplitText } from "@cyriacbr/react-split-text";
import { motion } from "framer-motion";
import Form from "./form";
import { BsTelephone } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";
import Info from "./contact-info";
import SocialMedia from "./social-media";
import {Button} from "@nextui-org/react";
import { LuUser2, LuDownload } from "react-icons/lu";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Element, scroller } from 'react-scroll';

export default function Contact() {
    return (
        <main id="test1" className="relative bg-[url('/img3.svg')] min-h-[400px] bg-no-repeat bg-left "  >
            <Element name="contact" id="cont" className="font-semibold text-white flex justify-center text-2xl " >
                CONTACT 
            </Element>
            <section className="font-thin leading-8 text-md mt-14 text-whiteText min-w-[150px] flex  max-md:justify-center max-md:items-center max-md:gap-8 relative items-center  justify-end flex-col " >
                
                    <SplitText 
                        className=" flex justify-center"
                        WordWrapper={({ children, countIndex }) => (
                            <motion.span className="inline-block wrapper " viewport={{ once: true }} whileInView={{ y:[15, 1], opacity:[0,1]}} transition={{delay: countIndex*0.05}}  >
                                &nbsp;{children}
                            </motion.span>
                        )}
                    >
                        N&apos;hesitez à me contacter je répondrai dans les plus bref délais
                    </SplitText>
                    <Form/>
                    
            </section>
        </main>
    )
}