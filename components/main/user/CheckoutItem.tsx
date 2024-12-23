import { CURRENCY, IMAGE_PATH } from "@/lib/api";
import { Image } from "@nextui-org/image";
import React from "react";

const CheckoutItem = ({
  name,
  title,
  price,
  qty,
  itemImagePath = "static-image.jpg",
}: {
  name?: string;
  title?: string;
  price: number | string;
  qty: number | string;
  itemImagePath?: string;
}) => {
  price = parseFloat(price as string);
  qty = parseInt(qty as string);

  return (
    <div className="w-full bg-black/5 dark:bg-white/5 border gap-[16px] shadow-sm border-[#0000001f] rounded-[12px] box-border p-[12px] flex items-center">
      <div className="w-[44px] h-[44px] bg-gray-300 rounded-[10px] relative">
        <Image
          src={`${IMAGE_PATH}${itemImagePath}`}
          alt="CartItem"
          width={44}
          height={44}
          className="rounded-[10px] object-cover object-center w-[44px] h-[44px]"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-[12px] font-medium line-clamp-1 text-ellipsis">
          {name ? name : title}
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-[8px] pt-[4px]">
            <div className="text-[12px] font-medium opacity-65">
              {CURRENCY} {price.toFixed(2)}
            </div>
            <div className="text-[10px] font-bold px-[10px] rounded-full border border-[#0000001f] w-fit opacity-65">
              x{qty}
            </div>
          </div>
          <div className={`text-[12px] font-medium font-circular-web`}>
            Total:{" "}
            <span className=" opacity-65">
              {CURRENCY} {(price * qty).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
