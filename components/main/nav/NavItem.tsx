"use client";

import { getData } from "@/lib/api";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const NavItem = ({
  currentPath,
  title,
  path = title === "Home" ? "" : title.toLowerCase(),
  isSideBarItem = false,
}: NavItemProps) => {
  const isCurrentPath = currentPath === title.toLowerCase();

  const handlePress = () => {
    redirect(isCurrentPath ? "" : path);
  };

  return (
    <div
      className={isSideBarItem ? "w-full" : ""}
      // href={isCurrentPath ? "" : `/${path as string}`}
    >
      <Button
        variant="ghost"
        className={`${
          isCurrentPath
            ? " border font-medium opacity-100 px-[24px] flex-center bg-[#f7f7f7] dark:bg-[#00000025] "
            : " px-0 border-none focus:outline-none opacity-80"
        } rounded-full ${
          isSideBarItem ? "h-[40px] w-full " : "h-[33px]"
        } border-[#0000001f] dark:border-[#ffffff1f] text-center`}
        onPress={handlePress}
      >
        {title}
      </Button>
    </div>
  );
};

export default NavItem;
