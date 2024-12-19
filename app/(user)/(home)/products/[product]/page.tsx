/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import PathNav from "@/components/main/admin/PathNav";
import CustomButton from "@/components/main/CustomButton";
import Loading from "@/components/main/Loading";
import ShopSVG from "@/components/main/svg/ShopSVG";
import ProductCard from "@/components/main/user/ProductCard";
import QuantitySelector from "@/components/main/user/QuantitySelector";
import WrapperContainer from "@/components/wrapper/wrapperContainer";
import { routes } from "@/data";
import { getSingleProduct } from "@/lib/actions/fetch/product";
import { CURRENCY, IMAGE_PATH, RATE, RESULT } from "@/lib/api";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const ProductPage = () => {
  const { product } = useParams();
  // console.log(product);

  const [isLoading, setIsLoading] = useState(false);

  // const imagePath = `${IMAGE_PATH}/${product}/image1.png`;
  const imagePath = `${IMAGE_PATH}`;

  const [fetchedProducts, setFetchedProducts] = useState<any>([]); // Similar Items

  const [getProduct, setProduct] = useState(null);
  const [getQty, setQty] = useState<number>(1); // Selected Quantity
  const [getItemQty, setItemQty] = useState<number>(1); // Real Quantity

  const handleSimilarProducts = (similarProducts: Array<object>) => {
    setFetchedProducts([...similarProducts]);
  };

  const handleCurrentProduct = (currentProduct: object | any) => {
    setProduct(currentProduct);
    setItemQty(parseInt(currentProduct.quantity));
    if (getProduct) setIsLoading(false);
  };

  const handleFetchItem = async () => {
    try {
      setIsLoading(true);

      const result = await getSingleProduct(product);

      if (result?.status === RESULT.error) return alert("Something Failed");
      if (result?.status === RESULT.message) {
        return alert(result.message);
      }

      if (result?.status === RESULT.data) {
        console.log(result.data);
        const { similarItems, singleItem } = result.data;

        handleSimilarProducts([...similarItems]);
        handleCurrentProduct(singleItem);
      }
      if (result?.status === RESULT.success) {
        console.log("No DATA Received");
      }
    } catch (error: Error | any) {
      alert(`Something went wrong: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleFetching = useCallback(() => {
  //   handleFetchItem();
  // }, [handleFetchItem]);

  useEffect(() => {
    // handleFetching();
    handleFetchItem();
  }, [product]);

  const add = async (itemId: string, qty: string) => {
    // const response = await AddToCart(itemId, qty);
    // if (response.status) {
    //   console.log(response.message);
    // } else {
    //   console.log(response.message);
    // }
  };

  const [currency, setCurrency] = useState(CURRENCY);

  const getValue = (price: number | string, discount?: number) => {
    if (discount) {
      price = parseFloat(price as string);
      price = (price * (discount + 100)) / 100;
    }
    return `${currency}${price}`;
  };

  return (
    <>
      <section className=" w-full flex flex-col min-h-screen sm:mt-0 mt-[80px]">
        <div>
          <Loading isLoading={isLoading} />

          <div className="w-full flex flex-col">
            {/* 01 start*/}
            <PathNav
              userType="user"
              data={[
                routes.VIEW_PRODUCT,
                {
                  title: product,
                  path: `${routes.VIEW_PRODUCT.path}/${product}`,
                },
              ]}
            />
            {getProduct && (
              <>
                {/* image and detalis section */}
                <div className="w-full flex flex-row  mid:flex-col sm:flex-col gap-[10px]">
                  {/* image section */}
                  <div className="w-2/5 sm:w-full mid:w-full ">
                    <div className="w-[460px] h-[460px] sm:w-full border border-zinc-300 rounded-[10px] flex flex-row justify-center items-center">
                      <Image
                        src={`${imagePath}${getProduct.imagePath}`}
                        width={300}
                        height={300}
                        className="object-cover object-center min-w-[300px] min-h-[300px] w-full h-full rounded-2xl p-2"
                        quality={95}
                        alt={""}
                        priority
                      />
                    </div>
                  </div>

                  {/* detalis section */}
                  <div className="w-3/5 sm:w-full  mid:w-full sm:items-center gap-3 flex box-border p-5 pt-0 sm:pl-0 sm:pr-0 sm:pt-5 flex-col">
                    {/* item name */}
                    <div className="w-full flex">
                      <span className="text-xl font-robert-medium text-gray-500 max-h-14 overflow-hidden text-ellipsis whitespace-nowrap">
                        {getProduct.name}
                      </span>
                    </div>

                    {/* item title */}
                    <div className="w-full flex">
                      <span className="text-3xl text-gray-800 dark:text-gray-300 font-robert-medium">
                        {getProduct.title}
                      </span>
                    </div>

                    {/* item price */}
                    <div className="w-full flex mt-4">
                      <div className="flex gap-1 items-center">
                        <span className="font-robert-medium text-3xl">
                          {getValue(getProduct.price)}
                        </span>
                        <span className="font-robert-medium text-xl line-through text-red-400">
                          {getValue(getProduct.price, RATE)}
                        </span>
                      </div>
                    </div>

                    <hr className="border-zinc-500 mt-4" />

                    {/* Details section */}

                    <div className=" w-full flex flex-row sm:flex-col justify-between gap-[20px]"></div>

                    {/* Btn section */}

                    <div className=" w-full flex flex-col gap-4 ">
                      {/* QTY */}
                      <div className="flex items-center gap-5 mb-3">
                        <span className="text-xl font-bold text-gray-600 dark:text-gray-400">
                          Quantity:{" "}
                        </span>
                        <QuantitySelector
                          getQty={getQty}
                          setQty={setQty}
                          getItemQty={getItemQty}
                        />
                        <span className="text-gray-600 dark:text-gray-400">
                          {getItemQty} available
                        </span>
                      </div>

                      {/* Buy Now */}
                      <CustomButton
                        title="Buy Now"
                        className={"px-8"}
                        handlePress={() => {
                          add(product as string, getQty.toString());
                        }}
                      />

                      {/* ADD TO CART */}
                      <CustomButton
                        title="Add to Cart"
                        className={"px-8"}
                        handlePress={() => {
                          add(product as string, getQty.toString());
                        }}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {getProduct && (
          <div className=" w-full flex flex-col border-zinc-500 border rounded-md">
            <WrapperContainer>
              <div className=" w-full flex flex-col gap-[15px] py-[40px] box-border">
                <span className="text-xl font-semibold">Item Description</span>
                <p className="  text-sm font-medium">
                  {getProduct.description}
                </p>
              </div>
            </WrapperContainer>
          </div>
        )}

        {/* similer items */}
        <div className=" w-full flex flex-col ">
          <div className="px-2">
            <div className=" w-full flex flex-col gap-[15px] py-[40px]">
              <div className=" w-full flex sm:flex-col  flex-row justify-between">
                <div className="flex flex-col gap-[10px]">
                  <span className="  text-[24px] font-semibold">
                    Similar Items
                  </span>
                  <span className="text-sm ">Browse similar items</span>
                </div>

                <CustomButton
                  title={"View More"}
                  className={"px-6"}
                  handlePress={() => {}}
                />
              </div>

              {/* /////////////////////////// */}
              <div className=" w-full gap-[10px] flex-center flex-wrap">
                {fetchedProducts.map((product: any) => (
                  <ProductCard
                    key={product.id}
                    src={`${imagePath}${product.imagePath}`}
                    title={product.title}
                    price={product.price}
                    currency={currency}
                    quantity={product.quantity}
                    alt={"Product Image"}
                    url={product.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
