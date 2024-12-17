import Link from "next/link";
import React from "react";

const PathNav = ({
  data,
  userType = "admin",
}: {
  data: Array<object>;
  userType?: "user" | "admin";
}) => {
  console.log(JSON.stringify(data));

  return (
    <nav className="text-sm text-[12px] text-gray-500 -mt-3 mb-4">
      <Link href={userType === "admin" ? "/admin/dashboard" : "/"}>
        VISION STORE
      </Link>
      {data.map((item: any) => (
        <React.Fragment key={item.title}>
          {" > "}
          <Link href={item.path}>{item.title}</Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default PathNav;
