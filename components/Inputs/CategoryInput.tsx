"use client"
import React from 'react'
import { IconType } from 'react-icons'

interface CateforyInputProps {
    label: string
    selected?: boolean
    icon: IconType
    onClick: (value: string) => void
}
const CategoryInput = ({label,selected,icon:Icon,onClick}:CateforyInputProps) => {
  return (
    <div
    onClick={()=>onClick(label)}
    className={`rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-rose-300 transition cursor-pointer ${selected? "border-rose-500": "border-neutral-200"}`}
    >
    <Icon size={30} />
    <div className="font-semibold">
        {label}
    </div>
    </div>
  )
}

export default CategoryInput