import { motion } from "framer-motion"
import Image from "next/image"
export default function HeroImage() {
    return (
        <motion.section  transition={{duration:0.8}} animate={{
            x:[90,0],
            opacity:[0,1],
            display: 'block',
            borderColor:'#3A86FF',
            borderWidth:['0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','0px','2px']
        }} className="w-[320px] max-lg:w-[300px] max-lg:h-[300px] max-[347px]:h-[270px] max-[347px]:w-[270px] hidden relative h-[320px] rounded-lg border-0 border-transparent" >
            <motion.main 
                animate={{ x: -11, y: 11 }} 
                
                className="w-[320px] max-lg:w-[300px] max-lg:h-[300px] max-[347px]:h-[270px] max-[347px]:w-[270px] absolute bottom-3 left-3 h-[320px] flex justify-center items-center backdrop-blur-xl rounded-lg border-[1px] bg-frame border-whiteBorder" 
                transition={{ ease: "linear", duration: 1, repeat: Infinity, repeatType: 'reverse'  }}
            >
                <div className=" max-[347px]:w-[270px] max-[347px]:h-[270px] flex justify-center  items-center w-[300px] h-[300px]  rounded-lg " >
                    <Image
                    src="/hero-image.jpg" 
                    alt="hero image"
                    width={280}
                    height={100}
                    priority={true}
                    className="rounded-lg max-[347px]:w-[260px]  "
                    />
                </div>
            </motion.main>
        </motion.section>
    )
}