"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useDisclosure } from "@mantine/hooks";
import SideBar from "../SideBar";
import { adminRoutes, adminSiteNavigations, Site } from "@/data";
import WrapperBody from "@/components/wrapper/WrapperBody";
import AdminNavBar from "./AdminNavBar";

const AdminNavigation = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const path = usePathname();

  const [opened, { toggle, close }] = useDisclosure();

  useEffect(() => {
    for (const page in adminRoutes) {
      if (path === adminRoutes[page].path)
        setCurrentPath(adminRoutes[page].title.toLowerCase());
    }
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
        data={adminSiteNavigations}
        title={Site.siteName}
        opened={opened}
        close={close}
        currentPath={currentPath}
      />

      <WrapperBody>
        <AdminNavBar
          data={adminSiteNavigations}
          title={Site.siteName}
          currentPath={currentPath}
          opened={opened}
          toggle={toggle}
          type="admin"
        />
      </WrapperBody>
    </motion.header>
  );
};

export default AdminNavigation;
