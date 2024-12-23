"use client";

import React from "react";
import NavItem from "./NavItem";
import { Drawer } from "@mantine/core";
import ThemeSwitch from "@/components/theme/theme-switch";
import { routes } from "@/data";

const SideBar = ({
  currentPath,
  title,
  opened,
  close,
  data,
  isUser,
}: SideBarProps) => {
  return (
    <Drawer.Root offset={8} radius="md" opened={opened} onClose={close}>
      <Drawer.Overlay />
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title className="uppercase text-green-500">
            {title}
          </Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body>
          <div className="flex justify-between items-center mt-4">
            <span>Theme:</span>
            <ThemeSwitch />
          </div>

          <div
            className={`px-[4px] flex flex-col items-center  text-[14px] h-auto mt-6 gap-4 w-full`}
          >
            {data.sidebar.map((item) => {
              return (
                <NavItem
                  key={item.title}
                  currentPath={currentPath}
                  title={item.title}
                  isSideBarItem={true}
                />
              );
            })}
            {isUser ? (
              // Show "Account" and "Logout" for authenticated users
              <>
                <NavItem
                  key="account"
                  currentPath={currentPath}
                  title={routes.ACCOUNT.title}
                  isSideBarItem={true}
                />
                <NavItem
                  key="logout"
                  currentPath={currentPath}
                  title={routes.LOGOUT.title}
                  isSideBarItem={true}
                />
              </>
            ) : (
              // Show "Sign In" for unauthenticated users
              <NavItem
                key="sign-in"
                currentPath={currentPath}
                title={routes.SIGN_IN.title}
                path={`${routes.SIGN_IN.path}`}
                isSideBarItem={true}
              />
            )}
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default SideBar;
