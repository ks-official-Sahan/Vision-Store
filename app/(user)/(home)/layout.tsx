import Navigation from "@/components/main/nav/user/Navigation";
import WrapperBody from "@/components/wrapper/WrapperBody";
import React from "react";

const UserLayout = ({ children }: RegularComponentProps) => {
  return (
    <>
      <Navigation />
      <WrapperBody>
        {/* <main className="mt-24 px-4 md:px-6 sm:px-8">{children}</main> */}
        <main className="mt-24">{children}</main>
      </WrapperBody>
    </>
  );
};

export default UserLayout;
