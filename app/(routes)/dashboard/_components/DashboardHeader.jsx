import { UserButton } from "@clerk/nextjs";
import React from "react";
import MobileNav from "./MobileNav";

const DashboardHeader = () => {
  return (
    <div className=" p-5 shadow-sm border-b flex justify-between items-center">
      <div></div>
      <div className=" flex items-center gap-5">
        <UserButton />
        <div className=" md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
