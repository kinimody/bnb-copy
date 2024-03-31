 import {prisma} from "@/libs/prismaClient";
 import getCurrnetUser from "@/app/actions/getCurrentUser";




 export default async function getFavoriteListings(){
    try {
        const currentUser = await getCurrnetUser();
        if(!currentUser) {
            return [];
        }
        const favorites = await prisma.listing.findMany({
            where:{
                id: {
                    in:[...(currentUser.favoriteIds || [] )]
                }
            }
        })
        const safeFavorites = favorites.map((favorite)=>({
            ...favorite,
            createdAt: favorite.createdAt.toISOString()
        }))
        console.log(safeFavorites)
        return safeFavorites;
        
    } catch (error:any) {
        throw new Error(error);
    }

    
 }