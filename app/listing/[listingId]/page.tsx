
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/components/EmptyState";
import React from "react";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

interface Iparams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: Iparams }) => {
  const listing = await getListingById(params);
  const currentUser=await getCurrentUser();
  const reservations = await getReservations(params)
  if(!listing) {
    return(
        <EmptyState/>
    )
  }

  return (
    <div>
        <ListingClient
        listing={listing}
        currentUser={currentUser ? currentUser : undefined}
        reservations={reservations}
        />
    </div>
  )
};

export default ListingPage;
