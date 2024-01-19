import { courseContent } from "@/constant/data";
import Image from "next/image";
import React from "react";

export default function CoursesTestimony() {
   return <div className="bg-white flex flex-col  justify-center text-center py-10 md:py-16">
      <div>
         <h2 className="text-[2rem] font-bold ">Courses offered</h2>
      </div>

      <p className="mt-2 md:mt-5 text-[0.9rem] text-typography text-center p-2">
         {courseContent.description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5  md:mt-10 md:ml-8">
         <div className="p-1">
            <Image src="/assets/card4.png" alt="stat-card" width={250} height={200} />

         </div>
         <div className="p-1">
            <Image src="/assets/card2.png" alt="stat-card" width={250} height={200} />

         </div>
         <div className="p-1">
            <Image src="/assets/card3.png" alt="stat-card" width={250} height={200} />

         </div>
         <div className="p-1">
            <Image src="/assets/card1.png" alt="stat-card" width={250} height={200} />

         </div>

      </div>

   </div>;
}
