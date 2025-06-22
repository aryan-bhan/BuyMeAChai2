'use client'; // Client Component

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

export default function RootLayout({ children }) {

  return (
    <SessionWrapper>
        <div className="min-h-screen bg-[#FAE6CE]  bottom-0 left-0 right-0 top-0 "> 
        <Navbar/>
        {children}
        </div>
    </SessionWrapper>);
}