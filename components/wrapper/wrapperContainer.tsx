import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const WrapperContainer = ({ children, className }: WrapperProps) => {
  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <div className="lg:w-[1133px] xl:w-[1400px] sm:w-full md:w-[90%] sm:box-border sm:px-[16px] ">
        {children}
      </div>
    </div>
  );
};

export default WrapperContainer;
