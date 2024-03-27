"use client"
import React from "react";
import Container from "@/components/Container";
import Logo from "@/components/navbar/Logo";
import Search from "@/components/navbar/Search";
import UserMenu from "@/components/navbar/UserMenu";
import { SafeUser } from "@/app/types";


interface NavbarProps {
  currentUser:  SafeUser | null
}
const Navbar = ({currentUser}:NavbarProps) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex items-center">
              <Logo />
              <span className="lg:block hidden text-red-400 text-xl font-bold pl-4">
                airbnb
              </span>
            </div>
            <Search/>
            <UserMenu currentUser={currentUser}/>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
