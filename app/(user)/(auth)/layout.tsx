import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <main>{children}</main>;
};

export default AuthLayout;
