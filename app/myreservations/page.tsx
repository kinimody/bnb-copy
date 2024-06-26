import EmptyState from "@/components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import MyReservationsClient from "./MyReservationsClient";

const ReservationsPage = async()=>{
    const currentUser=await getCurrentUser();

    if(!currentUser) {
        return(
            <EmptyState title="Unauthorized" subtitle="Please login" />
        )
    }
    const reservations = await getReservations({
        authorId: currentUser.id
    });
    if(reservations.length === 0) {
        return(
            <EmptyState  title="No reservations found" subtitle="Looks like you have no reservations on your property"/>
        )
    }       
    return (
        <MyReservationsClient 
            reservations={reservations}
            currentUser={currentUser}
        />
        
    )
}

export default ReservationsPage