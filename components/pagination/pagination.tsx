"use client";

import { MutableRefObject, useEffect, useRef } from "react";

interface Props {
  pageCount: number;
  setFirstNum: any;
}

export default function Pagination({ pageCount, setFirstNum }: Props) {
  return (
    <div className=" w-full flex flex-row justify-center items-center box-border p-[30px] gap-[20px]">
      <div className=" flex flex-row items-center justify-center border-[2px] box-border px-[12px] py-[8px] border-black rounded-[6px]">
        <span className=" text-black font-medium text-[15px]">Previous</span>
      </div>

      <div className="  flex flex-row  justify-center items-center gap-[12px] cursor-pointer">
        {Array.from({ length: pageCount }, (_, index) => (
          <div
            key={index}
            className=" flex flex-row items-center justify-center border-[2px] box-border cursor-pointer px-[12px] py-[8px]  bg-[#ABFF52] border-black rounded-[6px]"
            onClick={() => {
              setFirstNum(index * 5);
            }}
          >
            <span className=" text-black font-medium text-[15px]">
              {index + 1}
            </span>
          </div>
        ))}
      </div>

      <div className=" flex flex-row items-center justify-center border-[2px] box-border px-[12px] py-[8px] border-black rounded-[6px]">
        <span className=" text-black font-medium text-[15px]">Next</span>
      </div>
    </div>
  );
}
