import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import RegisterModal from "@/components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "@/components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
const inter = Inter({ subsets: ["latin"] });
const font = Nunito({
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "BnB",
  description: "bnb copy",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">

      <body className={font.className}>
        <ToasterProvider/>
        <Navbar currentUser={currentUser}/>
        <LoginModal/>
        <RegisterModal/>
        {children}
        </body>
    </html>
  );
}
