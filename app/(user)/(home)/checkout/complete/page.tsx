"use client";

import CustomButton from "@/components/main/CustomButton";
import { routes } from "@/data";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useRouter } from "next/router";

const CheckoutComplete = () => {
  const searchParams = useSearchParams();
  // let orderId = searchParams?.get("orderId") || "N/A";
  let orderId = searchParams?.get("orderId");
  // const router = useRouter();
  // let orderId = router.query.orderId;
  if (!orderId) orderId = "N/A";

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center pt-[100px] pb-[60px]">
      <div className="flex flex-col items-center gap-[12px]">
        <div className="font-circular-web font-medium opacity-65 text-[20px]">
          Amazing!
        </div>
      </div>

      <div className="text-center mt-4">
        <div className="text-[26px] font-bold">Congratulations</div>
        <div className="text-[20px] font-medium">Your Order is Processing</div>
      </div>

      <div className="mt-[10px]">
        <div className="text-[14px] font-medium">
          <span className="opacity-65">ORDER ID:</span>{" "}
          <span className="font-circular-web font-semibold">#{orderId}</span>
        </div>
      </div>

      <div className="flex items-center gap-[16px] pt-[24px] pb-[40px] z-[200]">
        <Link href={routes.CART?.path || "/cart"}>
          <CustomButton variant="faded" title="Back to Cart" />
        </Link>
        <Link href={routes.HOME?.path || "/"}>
          <CustomButton variant="shadow" title="Continue Shopping" />
        </Link>
      </div>

      <div className="border-t-2 border-[#0000003e] border-dashed">
        <div className="flex flex-col gap-[10px] mt-[30px]"></div>
      </div>
    </div>
  );
};

export default CheckoutComplete;
