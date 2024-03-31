"use client";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import Container from "@/components/Container";
import ListingHead from "@/components/listings/ListingHead";
import ListingInfo from "@/components/listings/ListingInfo";
import ListingReservation from "@/components/listings/ListingReservation";
import { categories } from "@/components/navbar/Categories";
import useLoginModal from "@/hooks/useLoginModal";
import axios from "axios";
import { eachDayOfInterval,differenceInCalendarDays } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Range } from "react-date-range";



const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
}
interface ListingClinetProps {
  reservations?: SafeReservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser;
 
}
const ListingClient: React.FC<ListingClinetProps> = ({
  listing,
  currentUser,
  reservations = [],
}) => {
  const [isLoading,setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const loginModal =useLoginModal();
  const router = useRouter();
  
  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    setIsLoading(true);
    axios.post('/api/reservations', {
      totalPrice,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      listingId: listing?.id
    }).then(() => {
      toast.success('Listing reserved');
      setDateRange(initialDateRange);
      router.refresh();
      setTotalPrice(listing.price);
    }).catch(() => {
      toast.error('Something went wrong');
    }).finally(() => {
      setIsLoading(false);
    })
  },[totalPrice,dateRange,listing?.id,currentUser,loginModal,router]);

  useEffect(() => {
    if(dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );
      if(dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  },[dateRange,listing.price]);

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];
    reservations.forEach((reservation:any) => {
      const range =  eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate)
      });
      dates = [...dates, ...range];
      console.log(dates)
    });
    return dates;
  },[reservations]);

  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing]);

  return (
  
         <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
           <div 
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
          <ListingInfo
            user={listing.user}
            category={category}
            description={listing.description}
            roomCount={listing.roomCount}
            guestCount={listing.guestCount}
            bathroomCount={listing.bathroomCount}
            locationValue={listing.locationValue}
          />
          <div className="order-first mb-10 md:order-last md:col-span-3">
              <ListingReservation 
                price= {listing.price}
                totalPrice={totalPrice}
                onChangeDate={(value:any) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
              </div>
          </div>
        </div>
      </div>
    </Container>
  
   
  );
};

export default ListingClient;
