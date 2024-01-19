import React from "react";
import Image from "next/image";

export default function OurPartners() {
   return <div className="bg-coolGray">
        <div className="flex justify-center items-center gap-3 p-5 md:p-10">
         <div>
         <Image src="/assets/logo (3).png" alt="desktop" width={150} height={150}/>
         </div>

         <div>
         <Image src="/assets/logo (4).png" alt="desktop" width={150} height={150}/>
         </div>

         <div>
         <Image src="/assets/logo (5).png" alt="desktop" width={150} height={150}/>
         </div>

         <div>
         <Image src="/assets/logo (5).png" alt="desktop" width={150} height={150}/>
         </div>
      </div>
   </div>;
}
