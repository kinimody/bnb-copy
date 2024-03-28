"use client";
import React from 'react'
import Container from '../Container'
import CategoryBox from './CategoryBox'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { MdOutlineVilla } from 'react-icons/md'
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi'
import { useParams, useSearchParams,usePathname } from 'next/navigation'
import { FaSkiing } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'
import { IoDiamond } from 'react-icons/io5'

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!',
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills!',
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!',
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!',
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property is near the pool!',
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an Island!',
    },
    {
        label: 'Lakes',
        icon: GiBoatFishing,
        description: 'This property is near to a lake!',
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This propertyhas skiing activities!',
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This propertyhas is in a castle!',
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This propertyhas  has camping activities!',
    },
    {
        label: 'Artic',
        icon: BsSnow,
        description: 'This property is cold!',
    },
    {
        label: 'Caves',
        icon: GiCaveEntrance,
        description: 'This property is near to a cave!',
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in the desert!',
    },
    {
        label: 'Bart',
        icon: GiBarn,
        description: 'This property is a barn!',
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This is luxurious property!',
    },
]

const Categories = () => {
    const params = useSearchParams(); 
    const category = params?.get('category')
    const pathName = usePathname();

    const isMainPage = pathName === '/';
    if(!isMainPage){
        return null
    }

  return (
    <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map((item)=>
            <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            description={item.description}
            selected={category === item.label}
            />
            )}
        </div>
    </Container>
  )
}

export default Categories