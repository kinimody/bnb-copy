import {Listing, Reservation, User} from "@prisma/client"
export type SafeUser = Omit<
  User,
  'emailVerified' | 'updatedAt' | 'createdAt'
> & {
  emailVerified: string | null | undefined;
  updatedAt: string;
  createdAt: string;
};

export type SafeReservation = Omit<Reservation, 'createdAt' | 'startDate' | 'endDate'| 'listing'> & {
   createdAt: string,
   startDate: string, 
   endDate: string , 
   listing: string

}

export type SafeListing = Omit<Listing,"createdAt"> & {
  createdAt: string;
}