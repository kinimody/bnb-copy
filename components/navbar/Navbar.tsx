"use client"
import React from "react";
import Container from "@/components/Container";
import Logo from "@/components/navbar/Logo";
import Search from "@/components/navbar/Search";
import UserMenu from "@/components/navbar/UserMenu";
import { SafeUser } from "@/app/types";
import Categories from "@/components/navbar/Categories";
import { useRouter } from "next/navigation";

interface NavbarProps {
  currentUser:  SafeUser | null
}
const Navbar = ({currentUser}:NavbarProps) => {
  const router = useRouter();
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex items-center" onClick={() => router.push("/")}>
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
      <Categories/>
    </div>
  );
};

export default Navbar;
