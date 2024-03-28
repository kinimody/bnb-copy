"use client"
import React from 'react'

interface HeadingProps {
    title: string,
    subtitle?: string,
    center?: boolean,
    primary?: boolean
}

const Heading = ({title,subtitle,center,primary}:HeadingProps) => {
  return (
    <div className={center? "text-center" :"text start"}>
        <div className="text-2xl font-bold">
            {title}
        </div>
        <div className={primary ? "font-light text-rose-500 mt-2" : "font-light text-neutral-500 mt-2"}>
            {subtitle}
        </div>
    </div>
  )
}

export default Heading