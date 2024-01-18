import React from "react";
import Navbar from "../Navbar";
import { heroContents } from "@/constant/data";
import { Button } from "../ui/button";
import Image from "next/image";

export default function HeroSection() {
   return (
      <main className="flex flex-1 flex-col min-h-screen bg-coolGray">
         <Navbar />
         <div className="flex h-full items-center container">
            <div className="flex flex-col md:flex-row place-content-center">
               <div className="flex flex-col items-start space-y-4">
                  <h2>{heroContents.header}</h2>
                  <p>{heroContents.description}</p>
                  <div className="flex items-center gap-3">
                     <Button variant="default">Get Involved</Button>
                     <Button variant="outline">Learn More</Button>
                  </div>
               </div>
               <div>
                  <Image
                     src="/assets/mobile.png"
                     width={150}
                     height={200}
                     alt="mobile"
                  />
               </div>
            </div>
         </div>
      </main>
   );
}
