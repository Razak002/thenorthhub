"use client";

import { navLinks } from "@/constant/data";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { AlignRight, X } from "lucide-react";
import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerFooter,
   DrawerHeader,
   DrawerTrigger,
} from "@/components/ui/drawer";

export default function Navbar() {
   const [isMobile, setIsMobile] = useState<boolean>(false);
   const drawerTriggerRef = useRef<HTMLButtonElement>(null);

   const openMobileNav = () => {
      setIsMobile((isMobile) => !isMobile);
      if (isMobile && drawerTriggerRef.current) {
         drawerTriggerRef.current.click();
      }
   };
   return (
      <nav className="flex items-center justify-between w-full h-16 bg-white">
         <div className="flex container items-center justify-between">
            <Image src="/assets/logo.png" width={100} height={40} alt="logo" />
            <div className="hidden lg:flex items-center space-x-5">
               {navLinks.map((link, i) => (
                  <Link key={i} href="#">
                     <small className="hover:text-gray-800 text-sm">
                        {link.title}
                     </small>
                  </Link>
               ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
               <Button variant="outline">Contact</Button>
               <Button variant="default">Donate</Button>
            </div>

            <Drawer>
               <DrawerTrigger asChild ref={drawerTriggerRef}>
                  <Button
                     className="lg:hidden"
                     onClick={openMobileNav}
                     variant="outline"
                     size="icon"
                  >
                     <AlignRight className="h-4 w-4" /> Done with hero, I think
                     && added lucide
                  </Button>
               </DrawerTrigger>
               {isMobile && (
                  <DrawerContent>
                     <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                           <div className="space-y-8">
                              <div className="flex items-center w-full justify-between">
                                 <Image
                                    src="/assets/logo.png"
                                    width={100}
                                    height={40}
                                    alt="logo"
                                 />
                                 <Button
                                    className="lg:hidden"
                                    onClick={() => setIsMobile(false)}
                                    variant="outline"
                                    size="icon"
                                 >
                                    <X className="h-4 w-4" />
                                 </Button>
                              </div>
                              <div className="flex flex-col items-start space-y-3">
                                 {navLinks.map((link, i) => (
                                    <Link key={i} href="#">
                                       <small className="hover:text-gray-800 text-sm">
                                          {link.title}
                                       </small>
                                    </Link>
                                 ))}
                              </div>
                           </div>
                        </DrawerHeader>

                        <DrawerFooter>
                           <Button>Donate</Button>
                           <DrawerClose asChild>
                              <Button variant="outline">Contact</Button>
                           </DrawerClose>
                        </DrawerFooter>
                     </div>
                  </DrawerContent>
               )}
            </Drawer>
         </div>
      </nav>
   );
}
