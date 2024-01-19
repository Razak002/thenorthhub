import { courseContent } from "@/constant/data";
import Image from "next/image";
import React from "react";

export default function CoursesTestimony() {
   return <div className="flex flex-col  justify-center text-center p-3 md:p-10">
      <div>
         <h2 className="text-[2rem] font-bold py-4 ">Courses offered</h2>
      </div>

      <p className="text-[0.8rem] mt-2 md:mt-5  md:text-sm text-center">
         {courseContent.description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mt-10 justify-between ">
         <div>
            <Image src="/assets/card4.png" alt="stat-card" width={250} height={200} />

         </div>
         <div>
            <Image src="/assets/card2.png" alt="stat-card" width={250} height={200} />

         </div>
         <div>
            <Image src="/assets/card3.png" alt="stat-card" width={250} height={200} />

         </div>
         <div>
            <Image src="/assets/card1.png" alt="stat-card" width={250} height={200} />

         </div>

      </div>

   </div>;
}
