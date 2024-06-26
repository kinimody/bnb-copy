"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "@/components/Avatar";
import MenuItem from "@/components/navbar/MenuItem";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { SafeUser } from "@/app/types";
import { signOut } from 'next-auth/react';
import useRentModal from "@/hooks/UseRentModal";
import { useRouter } from 'next/navigation';

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const rentModal = useRentModal()
  const router = useRouter()

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [setIsOpen]);

  const onRent = useCallback(() => {
    if(!currentUser) {
     return loginModal.onOpen();
    }
    rentModal.onOpen()

  },[currentUser,loginModal,rentModal])

  return (
    <div className="relative ">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold rounded-full px-4 py-3 hover:bg-neutral-100 transition cursor-pointer"
          onClick={onRent}
        >
          Airbnb your home
        </div>
        <div
          className="py-4 px-4 md:py-1 md:px-2 border-[1px] border-neutral-100 flex flex-row gap-3 items-center rounded-full cursor-pointer hover:shadow-md transition "
          onClick={toggleOpen}
        >
          <AiOutlineMenu size={16} />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && !currentUser && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col ">
            <>
              <MenuItem onClick={loginModal.onOpen} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign up" />
            </>
          </div>
        </div>
      )}
      {isOpen && currentUser && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col ">
            <>
              <MenuItem onClick={()=>router.push("/trips")} label="My trips" />
              <MenuItem onClick={() => router.push("/favorites")} label="My favorites" />
              <MenuItem onClick={() =>router.push("/myreservations")} label="My reservations" />
              <MenuItem onClick={() => router.push("/properties")} label="My properties" />
              <MenuItem onClick={rentModal.onOpen} label="Airbnb my home" />
              <hr />
              <MenuItem onClick={() => {signOut()}} label="Logout" />{}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
