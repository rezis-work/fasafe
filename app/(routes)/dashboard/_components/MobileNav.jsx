"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlignRight,
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const MobileNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budget",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <AlignRight />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Image
              src={"/fasafe-b-svg.svg"}
              alt="logo"
              width={100}
              height={100}
            />
          </SheetTitle>
          <div className=" mt-5 ">
            {menuList.map((menu, index) => (
              <Link key={menu.id} href={menu.path}>
                <h2
                  key={menu.id}
                  className={`flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 mb-2 ${
                    path === menu.path && "text-primary bg-blue-100"
                  }`}
                >
                  <menu.icon />
                  {menu.name}
                </h2>
              </Link>
            ))}
          </div>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
