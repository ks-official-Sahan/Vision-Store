import Link from "next/link";
import React from "react";

const PathNav = ({ data }: { data: Array<object> }) => {
  return (
    <nav className="text-sm text-[12px] text-gray-500 -mt-3 mb-4">
      <Link href={"/admin/dashboard"}>VISION STORE</Link>
      {data.map((item: any) => (
        <React.Fragment key={item.name}>
          {" > "}
          <Link href={item.path}>{item.name}</Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default PathNav;
