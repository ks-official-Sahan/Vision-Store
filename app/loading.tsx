import Loading from "@/components/main/Loading";
import React from "react";

const SiteLoading = () => {
  return (
    <div className="flex-center fixed inset-0 z-[100] overflow-hidden backdrop-blur-lg">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
};

export default SiteLoading;
