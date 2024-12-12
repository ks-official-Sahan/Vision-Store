"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Burger } from "@mantine/core";
import NavItem from "../NavItem";
import ThemeSwitch from "@/components/theme/theme-switch";

const NavBar = ({
  title,
  currentPath,
  opened,
  toggle,
  data,
  type = "user",
}: NavBarProps) => {
  return (
    <nav className="flex items-center justify-between w-full relative">
      {/* LEFT */}
      <div className="z-[50]">
        <Link href={"/"} className="font-bold uppercase text-xl text-main">
          {title}
        </Link>
      </div>

      {/* CENTER lg */}
      <div className="absolute hidden lg:flex flex-col items-center w-full z-[10]">
        <div
          className={`px-[4px] flex items-center  text-[14px] h-[41px] rounded-full border border-[#0000001f] dark:border-[#ffffff1f] backdrop-blur-sm `}
        >
          {data.navbar.map((item) => (
            <NavItem
              key={item.title}
              currentPath={currentPath}
              title={item.title}
            />
          ))}
        </div>
      </div>

      {/* CENTER md */}
      <div className="absolute hidden md:flex lg:hidden flex-col items-center w-full z-[10] ">
        <div
          className={`px-[4px] flex items-center  text-[14px] h-[41px] rounded-full border border-[#0000001f] dark:border-[#ffffff1f] backdrop-blur-sm `}
        >
          {data.sidebar.map((item) => (
            <NavItem
              key={item.title}
              currentPath={currentPath}
              title={item.title}
            />
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex items-center gap-6 z-[50]">
        <ThemeSwitch />
        <Link href={`/contact`} className="md:hidden lg:flex">
          <Button className="text-[14px] font-semibold dark:text-black text-white bg-primary-50 h-[37px] px-[20px] rounded-[15px] flex justify-center items-center">
            {type === "user" ? "Sign In" : "Profile"}
          </Button>
        </Link>
      </div>

      {/* MENUBAR */}
      {/* <div className="flex-sm-hidden-lg"> */}
      <div className="hidden">
        <Burger
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
        />
      </div>
    </nav>
  );
};

export default NavBar;