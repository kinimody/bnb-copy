"use client"

import React, { useCallback } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { TbPhotoPlus } from 'react-icons/tb'
import { Result } from 'postcss'


declare global {
    var cloudinary: any
}
interface ImageUPloadProps {
    onChange:(value:string) => void;
    value: string;
}

const ImageUpload = ({onChange,value}:ImageUPloadProps) => {

    const handleUpload = useCallback((result:any)=>{
        onChange(result.info.secure_url);
    },[])

  return (
   <CldUploadWidget
        onSuccess={handleUpload}
        uploadPreset='nstbwxsa'
        options={{
            maxFiles:1
        }}
   >
    {({open})=>{
        return(
            <div onClick={()=>{open?.()}} className='relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center gap-4 text-neutral-600'>
                    <TbPhotoPlus size={50} />
                    <div className='font-semibold text-lg'>
                        Click to upload
                    </div>
                    {value && (
                        <div className='absolute inset-0 w-full h-full'>
                            <Image
                            alt="upload"
                            fill 
                            style={{objectFit:'cover'}}
                            src={value}
                            />
                        </div>
                    )}
            </div>
        )
    }}
   </CldUploadWidget>
  )
}

export default ImageUpload