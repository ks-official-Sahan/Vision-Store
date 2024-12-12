import React from "react";

const WrapperBody = ({ children }: RegularComponentProps) => {
  return (
    <div className={`w-full flex flex-col items-center`}>
      <div className={`responsive-container`}>{children}</div>
    </div>
  );
};

export default WrapperBody;
