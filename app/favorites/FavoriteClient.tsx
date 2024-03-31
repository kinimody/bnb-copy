import Container from '@/components/Container'
import React from 'react'
import { SafeListing, SafeUser } from '../types'
import Heading from '@/components/Heading';
import ListingCard from '@/components/listings/ListingCard';

interface FavoriteClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null
}
const FavoriteClient = ({listings,currentUser}:FavoriteClientProps) => {
  return (
   <Container>
        <Heading title="Favorites" subtitle="List of places you have favorited"/>
        
        <div 
            className="
              grid 
              grid-cols-1 
              mt-10
              ms:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              2xl:grid-cols-6
              gap-8
            "
          >
            {listings.map((listing)=>{
                return(
                <ListingCard 
                    currentUser={currentUser}
                    key={listing.id}
                    data={listing}
                />)
            })}
          </div>

   </Container>
  )
}

export default FavoriteClient