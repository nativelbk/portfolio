import HeroImage from "./heroCard";
import HeroText from "./heroText";
import { motion } from "framer-motion";
export default function Hero() {
    return(
        <section id="home" className="flex overflow-hidden  max-lg:justify-between overflow-x-hidden max-lg:px-20 max-md:px-0  max-lg:h-fit max-lg:gap-[80px] max-lg:items-center max-[883px]:flex-col max-[883px]:mt-16  w-[100%] min-h-[90vh] items-center relative justify-around " >
            <img src="/1.svg" className="absolute z-0 w-[40px] top-[90px] left-0"  />
            <img  src="/2.svg" className="absolute z-0 max-[1276px]:left-[10px] max-[1002px]:left-[60px] top-[20px] left-[60px] w-[40px]"  />
            <img src="/3.svg" className="absolute z-0 bottom-[20px] left-0 w-[90px] "  />
            <img src="/4.svg" className="absolute max-lg:top-[4px] max-[877px]:right-3 z-0 top-4 right-[240px] w-[25px] "  />
            <img src="/5.svg" className="absolute z-0 top-[50px] max-lg:right-[-32px] right-[-05px]"  />
            <img src="/6.svg" className="absolute z-0 bottom-[60px] w-[20px] right-[300px]"  />
            <img src="/7.svg" className="absolute z-0 bottom-[30px] w-[20px] right-[500px]"  />
            <HeroText/>
            <HeroImage/>
        </section>
    )
}
