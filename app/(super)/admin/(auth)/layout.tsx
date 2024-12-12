import React from "react";

const AdminAuthLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (<main>{children}</main>);
};

export default AdminAuthLayout;
