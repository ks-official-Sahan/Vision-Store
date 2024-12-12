import Navigation from "@/components/main/nav/user/Navigation";
import React from "react";

const UserLayout = ({ children }: RegularComponentProps) => {
  return (
    <>
      <Navigation />
      <main className="mt-24 px-4 md:px-6 sm:px-8">{children}</main>
    </>
  );
};

export default UserLayout;
