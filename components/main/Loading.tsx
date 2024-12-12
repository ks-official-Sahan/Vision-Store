import React from "react";
import ReactDOM from "react-dom";

const Loading = ({ isLoading }: { isLoading?: boolean }) => {
  if (!isLoading) return null;

  if (typeof window === "undefined") return null;

  return ReactDOM.createPortal(
    <div className="flex-center fixed inset-0 z-[100] overflow-hidden backdrop-blur-lg">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>,
    document.body // Render directly inside the body
  );
};

export default Loading;
