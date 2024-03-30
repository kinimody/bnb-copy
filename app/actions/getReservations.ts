import {prisma} from "@/libs/prismaClient";


interface Iparams {
    listingId?: string,
    userId?: string,
    authorId?: string
}

export default async function getReservations(params:Iparams) {
    
    const {listingId,userId,authorId} = params;
    const query: any = {};
    try {
        if(listingId) {
            query.listingId = listingId;
        }
        if(userId) {
            query.userId = userId;
        }
        if(authorId) {
            query.listing = {userId: authorId}
        }
    
        const reservations = await prisma.reservation.findMany({
            where: query,
            include: {
                listing:true,
            },
            orderBy:{
                createdAt:'desc'
            }
        });
        const safeReservations = reservations.map((reservation) => ({
            ...reservation,
            createdAt: reservation.createdAt.toISOString(),
            startDate: reservation.startDate.toISOString(),
            endDate: reservation.endDate.toDateString(),
            listing: reservation.listing.id, // Change this line
          }));
          
          return safeReservations;
    } catch (error:any) {
        throw new Error(error)
    }

    }