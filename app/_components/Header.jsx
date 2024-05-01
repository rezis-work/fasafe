"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className=" p-5 flex justify-between items-center border shadow-sm">
      <Image src="/fasafe-b-svg.svg" alt="logo" width={160} height={160} />
      <div className=" flex gap-5">
        {isSignedIn ? (
          <div className=" flex items-center gap-5">
            <Link href={"/dashboard"}>
              <Button>Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <div>
            <Link href={"/sign-in"}>
              <Button>Get Started</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
