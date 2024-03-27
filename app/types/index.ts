import {User} from "@prisma/client"
export type SafeUser = Omit<
  User,
  'emailVerified' | 'updatedAt' | 'createdAt'
> & {
  emailVerified: string | null;
  updatedAt: string;
  createdAt: string;
};