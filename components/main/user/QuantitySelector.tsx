import React from "react";

interface QuantitySelectorProps {
  getQty: number;
  setQty: (qty: number) => void;
  getItemQty: number;
}

const QuantitySelector = ({
  getQty,
  setQty,
  getItemQty = 1,
}: QuantitySelectorProps) => {
  return (
    <>
      {/* QTY */}
      <div className="flex-center gap-4 box-border px-7 py-2 border-[2px] border-zinc-500 rounded-full">
        <span
          className="cursor-pointer text-2xl font-extrabold opacity-65"
          onClick={() => {
            if (getQty != 0) setQty(getQty - 1);
          }}
        >
          -
        </span>
        <span className="cursor-pointer text-xl font-bold">{getQty}</span>
        <span
          className="cursor-pointer text-xl font-extrabold opacity-65"
          onClick={() => {
            if (getQty < getItemQty) setQty(getQty + 1);
          }}
        >
          +
        </span>
      </div>
    </>
  );
};

export default QuantitySelector;
