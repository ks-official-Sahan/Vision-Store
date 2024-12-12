"use client";

import { useMantineColorScheme } from "@mantine/core";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

type themeProps = {
  theme: "light" | "dark" | "system";
};
const ThemeSwitch = () => {
  const { setTheme } = useTheme();
  const { setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const handleChangeTheme = ({ theme }: themeProps) => {
    if (theme === "light") {
      setTheme("light");
      setColorScheme("light");
    } else if (theme === "dark") {
      setTheme("dark");
      setColorScheme("dark");
    } else if (theme === "system") {
      setTheme("system");
      setColorScheme("auto");
    }
  };

  return (
    <div className="h-[41px] backdrop-blur-sm flex items-center px-[6px] py-[4px] rounded-full border border-opacity-30 border-[#f7f7f760] dark:border-[#1A1A1A60] w-fit">
      <div
        onClick={() => handleChangeTheme({ theme: "light" })}
        className={`w-[28px] h-[28px] rounded-full flex justify-center items-center cursor-pointer bg-[#f7f7f780] dark:bg-[#1A1A1A80]`}
      >
        <Sun
          size={16}
          className="rotate-0 ease-in-out duration-500 transition-all dark:-rotate-90"
        />
      </div>
      <div
        onClick={() => handleChangeTheme({ theme: "system" })}
        className={`w-[28px] h-[28px] rounded-full flex justify-center items-center cursor-pointer bg-[#f7f7f780] dark:bg-[#1A1A1A80]
        `}
      >
        <Monitor
          size={16}
          className="ease-in-out duration-500 transition-all"
        />
      </div>
      <div
        onClick={() => handleChangeTheme({ theme: "dark" })}
        className={`w-[28px] h-[28px] rounded-full flex justify-center items-center cursor-pointer bg-[#f7f7f780] dark:bg-[#1A1A1A80] `}
      >
        <Moon
          size={16}
          className="rotate-0 ease-in-out duration-500 transition-all dark:-rotate-90"
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;
