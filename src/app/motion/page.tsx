"use client"

import { animate, stagger } from "framer-motion"
import { useEffect } from "react"

export default function MyComponent() {
    useEffect(()=> {
        animate('span',{ y: [0, 100] }, {delay: stagger(0.1)})
    },[])
  return (
    <div>
        <span className=" inline-block " >a</span>
        <span className=" inline-block " >a</span>
        <span className=" inline-block " >a</span>
        <span className=" inline-block " >a</span>
        <span className=" inline-block " >a</span>
        <span className=" inline-block " >a</span>
        <span className=" inline-block " >a</span>
        <span className=" inline-block " >a</span>
        <span className=" inline-block " >a</span>
        <span className=" inline-block " >a</span>
        <span className=" inline-block " >a</span>
        <span className=" inline-block " >a</span>
    </div>
  )
}