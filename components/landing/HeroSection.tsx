import React from "react";
import Navbar from "../Navbar";
import { heroContents } from "@/constant/data";
import { Button } from "../ui/button";
import Image from "next/image";

export default function HeroSection() {
   return (
      <main className="flex flex-1 flex-col min-h-screen bg-coolGray">
         <Navbar />
         <div className="flex flex-1 items-end container max-lg:mt-10">
            <div className="flex h-full flex-col lg:flex-row lg:space-x-24 max-lg:space-y-8 max-lg:items-center">
               <div className="flex flex-col lg:w-2/4 items-start space-y-4">
                  <h2 className="text-5xl text-typography leading-tight font-bold">
                     {heroContents.header}{" "}
                     <span className="text-yellow">{heroContents.hub}</span>
                  </h2>
                  <p className="text-typography">{heroContents.description}</p>
                  <div className="flex items-center gap-3">
                     <Button variant="default">Get Involved</Button>
                     <Button variant="outline">Learn More</Button>
                  </div>
               </div>
               <div className="">
                  <Image
                     src="/assets/phone.png"
                     width={350}
                     height={400}
                     alt="mobile"
                  />
               </div>
            </div>
         </div>
      </main>
   );
}
