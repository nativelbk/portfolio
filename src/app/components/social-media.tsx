import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Social {
    src: string
    alt: string,
    link: string
}

const tab: Social[] = [
    {
        src:'/facebook.svg',
        alt:'facebook logo',
        link:"https://www.facebook.com/joseph.infinity.98"
    },
    {
        src:'/linkedin.svg',
        alt:'likedin logo',
        link: "https://linkedin.com/in/nativel-bakoize-9754a4288"
    },
    {
        src:'/github.svg',
        alt:'github logo',
        link:"https://github.com/nativelbk/"
    }
]

export default function SocialMedia () {
    return(
    <section className="flex gap-4" >
        {
            tab.map((value, index) => {
                return (
                    <Link href={value.link}  className="w-[50px] max-sm:h-[40px] max-sm:w-[40px] select-none m relative h-[50px] rounded-full border-2 border-blue" key={index}  >
                        <motion.div 
                            whileHover={{
                                y:1,
                                x:3
                            }}
                            whileTap={{
                                scale:0.9,
                                y:5,
                                x: -7,
                            }}
                            className="w-[50px] max-sm:h-[40px] max-sm:w-[40px] absolute bottom-1 left-1 h-[50px] flex justify-center items-center backdrop-blur-xl rounded-full border-[1px] bg-white "
                        >
                            <Image
                                src={value.src}
                                width={30}
                                height={30}
                                alt={value.alt}
                                />
                        </motion.div>
                    </Link>
                )
            })
        }
    </section>
    )
}