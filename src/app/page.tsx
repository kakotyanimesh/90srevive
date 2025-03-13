import Button from "@/components/Button";
import AllButtons from "@/components/ButtonFile";
import InputBox from "@/components/Input";
import Notification from "@/components/Notification";
import Image from "next/image";
import { useRef, useState } from "react";

export default async function Home() {
  
  return (
    <div className="flex flex-col justify-center items-center text-center  min-h-screen">
      {/* <Notification/> */}
      <div className="space-y-4 mx-2">
        <h1 className="md:text-xl text-lg font-bold ">Turn Any Modern website into classic 90s style </h1>
          {/* <InputBox/> */}
          <AllButtons/>
        
      </div>
    </div>
  );
}
