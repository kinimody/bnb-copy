"use client"
import React from 'react'
import Image from 'next/image'
interface AvatarProps {
  src: string | null | undefined
}
const Avatar = ({ src }: AvatarProps) => {
  return (
    <Image
      height="30"
      width="30"
      alt="Avatar"
      src={src || '/images/placeholder.jpg'}
      className="rounded-full"
    />
  )
}

export default Avatar