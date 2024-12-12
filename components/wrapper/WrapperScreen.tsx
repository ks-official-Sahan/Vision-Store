import React from "react";

const WrapperScreen = ({ children }: RegularComponentProps) => {
  return (
    <div className="w-screen min-h-dvh flex-center flex-col overflow-x-hidden px-4 md:px-6 sm:px-10">
      {children}
    </div>
  );
};

export default WrapperScreen;
