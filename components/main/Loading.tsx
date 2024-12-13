"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Loading = ({ isLoading }: { isLoading?: boolean }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isLoading) return null;

  return ReactDOM.createPortal(
    <div className="flex-center fixed inset-0 z-[100] overflow-hidden backdrop-blur-lg">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>,
    document.body
  );
};

export default Loading;
