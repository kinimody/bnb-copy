import EmptyState from "@/components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoriteClient from "./FavoriteClient";
import Container from "@/components/Container";

const ListingPage = async ()=> {
    const listing = await getFavoriteListings();
    const currentUser = await getCurrentUser();
    if(listing.length === 0){
        return(
            <EmptyState 
            title="No favorites found"
            subtitle="looks like you have no favorited listings"
            />
        )

    }
    return (
       
            <FavoriteClient 
                listings={listing}
                currentUser={currentUser}
            />
            

     
        
    )
}
export default ListingPage