import { introContenet } from "@/constant/data";
import Image from "next/image";
import React from "react";

export default function TNHIntro() {

   return <div className="w-screen bg-coolGray ">
   <div className="flex flex-col justify-center items-center mt-5 md:mt-10 ">
      <div className="flex flex-col  justify-center items-center ">
         <h2 className="text-[1.3rem] md:text-[2rem] font-bold py-5 text-center text-typography">Bibendum amet at molestie mattis.</h2>
         <p className="text-typography text-center text[0.9rem] md:px-20 ">{introContenet.description}</p>
      </div>
      <div className="mt-5 md:mt-10">
         <Image src="/assets/Desktop.png" alt="desktop"  width={500} height={500}/>
      </div>

</div>
   </div>;
}
