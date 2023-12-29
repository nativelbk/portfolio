import {Button} from "@nextui-org/react";
import { LuUser2, LuDownload } from "react-icons/lu";
import { TypeAnimation } from 'react-type-animation';
import SocialMedia from "./social-media";
import { SplitText, WordWrapperProp } from "@cyriacbr/react-split-text";
import { motion } from "framer-motion";
import { FC, FunctionComponent, useEffect, useRef } from "react";
import { scroller } from 'react-scroll';

export default function HeroText() {
    const connect = useRef()

    function onClick () {
        document.getElementById("test1").scrollIntoView();
    }

    return (
        <motion.section  transition={{duration:1}} animate={{
            x:[-5,0],
            opacity:[0,1],
            display: 'flex'
        }} className=" hidden max-lg:gap-5 max-[883px]:items-center max-[883px]:gap-6  z-1 relative text-white flex-col gap-8 " >
            <div className="flex max-lg:gap-4 gap-6 max-[883px]:gap-8 max-[512px]:gap-3 max-[883px]:items-center flex-col " >
                <h1 className=" z-1 max-[512px]:text-4xl max-[512px]:gap-0 max-[512px]:items-center max-sm:text-5xl flex flex-col max-lg:text-5xl max-[883px]:gap-3 max-[883px]:text-6xl max-md:text-6xl max-[883px]:items-center text-6xl" >
                    <span>Salut, je suis</span>
                    <SplitText
                        WordWrapper={({ children, wordIndex }) => (
                            <motion.span whileInView={{
                                opacity:[0,1],
                                y:[60,0]
                            }} viewport={{once: true}}  transition={{
                                delay:wordIndex*0.7,
                                duration:.5
                            }} className="inline-block font z-1 overflow-hidden text-yellow ">
                            {wordIndex === 1 && <span>&nbsp;</span> }{children}
                            </motion.span>
                        )}
                        className=" pt-1 z-1  sm:min-w-[348px] max-[512px]:text-center font max-[883px]:items-center flex h-[54px] text-transparent "
                    >
                        Bakoize Nativel  
                    </SplitText>
                </h1>
                <SplitText
                        WordWrapper={({ children, wordIndex }) => (
                            <motion.span whileInView={{
                                opacity:[0,1],
                                scale:[2,1,1.2,1]
                            }} viewport={{once: true}}  transition={{
                                delay:wordIndex*0.7,
                                duration:.5
                            }} className="inline-block overflow-hidden ">
                            {((wordIndex === 1) || (wordIndex === 2)) && <span>&nbsp;</span> }{children}
                            </motion.span>
                        )}
                        className="   max-[512px]:text-3xl max-sm:text-4xl max-[883px]:text-4xl max-md:text-4xl max-lg:text-2xl text-4xl text-blue "
                    >
                        Développeur Web FullStack
                    </SplitText>
                {/* <h2 className=" text-3xl text-blue " >
                    Développeur Web FullStack
                </h2> */}
            </div>
            <motion.div transition={{delay:1}} animate={{
                borderWidth:['0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','2px']
            }} className="w-[320px] max-[343px]:w-[280px] mt-2 relative h-[50px] rounded-lg border-2 border-blue ">
                <section className="w-[320px] max-[343px]:w-[280px] absolute bottom-1 left-1 h-[50px] flex justify-center items-center backdrop-blur-xl rounded-lg border-[1px] bg-frame border-whiteBorder" >
                    <TypeAnimation
                        className=" font-medium text-4xl "
                        preRenderFirstString={true}
                        sequence={[
                            'Développeur MERN',
                            1000, 
                            'Javascript addict',
                            1000,
                            'Développeur Web Créatif ',
                            1000, 
                        ]} 
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '18px', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </section>
            </motion.div>
            <section className="flex gap-3 " >
                <Button radius="sm" className="bg-blue text-white font-medium w-[200px] max-lg:w-[150px] " 
                 endContent={<LuUser2/>} size="lg"
                 onClick={()=>onClick()}
                >
                    Me contacter 
                </Button>
                {/* <Button radius="sm" className="bg-frame backdrop-blur-xl max-lg:w-[150px] border-whiteBorder border-[1px] text-white font-medium w-[200px] " endContent={<LuDownload/>} size="lg" 
                >
                    CV
                </Button> */}
            </section>
            <SocialMedia/>
        </motion.section>
    )
}