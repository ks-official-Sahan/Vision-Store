"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import { useRouter } from "next/navigation";
import { routes } from "@/data";
import { RATE } from "@/lib/api";

interface ProductCardProps {
  src?: any;
  alt?: any;
  title?: any;
  url?: any;
  width?: number;
  height?: number;
  price?: number | string;
  currency?: string;
  quantity?: number | string;
}

const ProductCard = ({
  src,
  alt = "Product Image",
  title,
  url,
  height = 250,
  width = 200,
  currency = "$",
  price = 250,
  quantity = 1,
}: ProductCardProps) => {
  const router = useRouter();

  const handleBuyNow = () => {
    router.push(`${routes.VIEW_PRODUCT.path}/${url}`);
    // router.push(`${routes.VIEW_PRODUCT.path}/id=${url}`);
  };

  const handleAddToCart = () => {
    router.push(`${routes.CART.path}/${url}`);
    router.push(`${routes.CART.path}?id=${url}`);
  };

  const getValue = (discount?: number) => {
    if (discount) {
      price = parseFloat(price as string);
      price = (price * (discount + 100)) / 100;
    }
    return `${currency} ${price}`;
  };

  return (
    <Card className="max-w-[270px] min-h-[480px] max-h-[510 px]">
      <CardHeader>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover object-center w-[250px] h-[200px]"
        />
      </CardHeader>
      <CardContent>
        <p className="max-h-14 overflow-hidden text-ellipsis whitespace-nowrap line-clamp-2 ">
          {title}
        </p>
        <div className="flex items-center justify-between flex-wrap mt-3 gap-2 px-2">
          <div className="flex gap-1 items-center">
            <span className="font-robert-medium text-lg">{getValue()}</span>
            <span className="font-robert-medium text-md line-through text-red-400">
              {getValue(RATE)}
            </span>
          </div>
          <span className="rounded-full bg-white text-black-200 text-sm flex-center px-2 ">
            {parseInt(quantity as string) > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <CustomButton
          className="w-full"
          handlePress={handleBuyNow}
          title="Buy Now"
        />
        <CustomButton
          className="w-full"
          handlePress={handleAddToCart}
          title="Add To Cart"
        />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
