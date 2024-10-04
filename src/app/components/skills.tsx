import { ReactComponentElement, ReactNode } from "react";
import SkillCard from "./skillCard";

export interface LangageInfo {
    name: string
    alt: string
    src: string
    id: number

}

const tab: LangageInfo[]  = [
    {
        name: 'JavaScript',
        alt: 'JavaScript logo',
        src: '/js.svg',
        id: 0
    },
    {
        name: 'TypeScript',
        alt: 'TypeScrip logo',
        src: '/ts.svg',
        id: 1
    },
    {
        name: 'React js',
        alt: 'React js logo',
        src: '/react.svg',
        id: 2
    },
    {
        name: 'Next js',
        alt: 'Next js logo',
        src: '/next.svg',
        id: 3
    },
    {
        name: 'Angular',
        alt: 'Angular logo',
        src: '/angular.png',
        id:4
    },
    {
        name: 'Node js',
        alt: 'Node js logo',
        src: '/node js.svg',
        id: 5
    },
    {
        name: 'Express js',
        alt: 'Express js logo',
        src: '/express.svg',
        id: 6
    },
    {
        name: 'Nest js',
        alt: 'Nest js logo',
        src: '/nest.svg',
        id: 7
    },
    {
        name: "PHP",
        alt: "php logo",
        src:"/php.svg",
        id: 8
    },
    {
        name: "Laravel",
        alt: "laravel logo",
        src:"/laravel.svg",
        id: 9
    },
    {
        name: "HTML",
        alt: "HTML logo",
        src:"/html.svg",
        id: 10
    },
    {
        name: "CSS",
        alt: "CSS logo",
        src:"/css.svg",
        id: 11
    },
    {
        name: "Tailwind css",
        alt: "Tailwind logo",
        src:"/tailwind.svg",
        id: 12
    },
    {
        name:"Git",
        alt: "Git logo",
        src:"/git.svg",
        id: 13
    },
    {
        name: "Mongodb",
        alt: "Mobgodb logo",
        src:"/mongo.svg",
        id: 14
    },
    {
        name: "MySQL",
        alt: "MySQL logo",
        src:"/mysql.svg",
        id: 15
    },
]

export default function Skills () {


    return(
        <section className="flex flex-col justify-center items-center" >
            <h2 id="skills" className="font-semibold flex justify-center text-2xl " >
                COMPETENCES
            </h2>
            <main className="flex gap-4 mt-10 max-w-[1024px] flex-wrap mt-10 justify-between " >
                {
                    tab.map((value,index)=><SkillCard {...value} key={index} />)
                }
            </main>
        </section>
    )
}