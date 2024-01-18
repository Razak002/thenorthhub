import { navLinks } from "@/constant/data";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
   return (
      <nav className="flex items-center justify-between w-full h-16 bg-white">
         <div className="flex container items-center justify-between">
            <Image src="/assets/logo.png" width={100} height={40} alt="logo" />
            <div className="flex items-center space-x-5">
               {navLinks.map((link, i) => (
                  <Link key={i} href="#">
                     <small className="hover:text-gray-800">{link.title}</small>
                  </Link>
               ))}
            </div>

            <div className="flex items-center gap-4">
               <Button variant="outline">Contact</Button>
               <Button variant="default">Donate</Button>
            </div>
         </div>
      </nav>
   );
}
