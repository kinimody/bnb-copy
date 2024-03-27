"use client"
import React from 'react'
import { IconType } from 'react-icons';
interface ButtonProps{
    label:string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>)=> void;
    disabled?: boolean,
    outline?: boolean,
    icon?: IconType,
    small?: boolean
}

const Button = ({small, label,onClick,disabled,outline,icon: Icon}:ButtonProps) => {
  return (
    <button
    onClick={onClick}
    disabled={disabled}
    className={`relative disabled:opacity-70 disabled:corsor-not-allowed rounded-lg hover:opacity-80 transition w-full 
    ${outline? "bg-white" : "bg-rose-500"}
    ${outline?"border-black": "border-rose-500"}
    ${outline?"text-black" : "text-white"}
    ${small? "py-1" : "py-3"}
    ${small? "font-lg" : "font-semibold"}
    ${small? "border-[1px]" : "border-2"}
    `}
    >
        {Icon && (
            <Icon
            size="24" 
            className='absolute left-4 top-3'/>
        )}
        {label}
    </button>
  )
}

export default Button