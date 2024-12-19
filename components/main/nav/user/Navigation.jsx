"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useDisclosure } from "@mantine/hooks";
import SideBar from "../SideBar";
import NavBar from "./NavBar";
import { routes, Site, siteNavigations } from "@/data";
import WrapperBody from "@/components/wrapper/WrapperBody";
import { isUserAvailable } from "@/lib/actions/fetch/auth";

const Navigation = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const path = usePathname();

  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    isUserAvailable().then((res) => {
      setIsUser(res);
    });
  }, []);

  const [opened, { toggle, close }] = useDisclosure();

  useEffect(() => {
    for (const page in routes) {
      if (path === routes[page].path)
        setCurrentPath(routes[page].title.toLowerCase());
    }
    isUserAvailable().then((res) => {
      setIsUser(res);
    });
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > scrollPosition) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setScrollPosition(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.4, type: "spring" }}
      className="w-full fixed top-0 pt-[30px] z-[100]"
    >
      {/* Drawer --> SideBar */}
      <SideBar
        data={siteNavigations}
        title={Site.siteName}
        opened={opened}
        close={close}
        currentPath={currentPath}
        isUser={isUser}
      />

      {/* <div className="w-full flex flex-row items-center"> */}
      <WrapperBody>
        <NavBar
          data={siteNavigations}
          title={Site.siteName}
          currentPath={currentPath}
          opened={opened}
          toggle={toggle}
          isUser={isUser}
        />
      </WrapperBody>
      {/* </div> */}
    </motion.header>
  );
};

export default Navigation;
