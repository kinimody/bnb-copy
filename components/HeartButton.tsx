import React from 'react'

import { SafeUser } from '@/app/types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import useFavorite from '@/hooks/useFavorite';

interface HeartButtonProps {
    listingId: string;
    currentUser?: SafeUser | null;
    size?: number;
}

const HeartButton = ({listingId,currentUser,size=28}:HeartButtonProps) => {
   const {hasFavorited,toggleFavorite} =useFavorite({
    listingId,currentUser
   });
  return (
    <div onClick={toggleFavorite} className='relative hover:opacity-80 transition cursort-pointer'>
        <AiOutlineHeart 
        size={size}
        className='fill-white absolute -top-[1px] -right-[1px]'
        />
        <AiFillHeart
        size={size}
        className={hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}/>
    </div>
  )
}

export default HeartButton