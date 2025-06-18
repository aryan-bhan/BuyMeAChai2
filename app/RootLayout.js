'use client'; // Client Component

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";


// import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  // const pathname = usePathname(); // Get the current path

  return (
    <SessionWrapper>
      <SessionWrapper>
        <div className="min-h-screen bg-[#ffe8d6]  bottom-0 left-0 right-0 top-0 "> 
        {/* {pathname !== "/login" && <Navbar/>} */}
        <Navbar/>
        {children}
        </div>
        </SessionWrapper>
        <Footer/>
    </SessionWrapper>);
}