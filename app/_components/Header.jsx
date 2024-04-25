import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SelectButton from "./SelectButton";

const Header = () => {
  return (
    <div className=" p-5 flex justify-between items-center border shadow-sm">
      <Image src="/fasafe-b-svg.svg" alt="logo" width={160} height={160} />
      <div className=" flex gap-5">
        <div className=" hidden md:block">
          <SelectButton />
        </div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Header;
