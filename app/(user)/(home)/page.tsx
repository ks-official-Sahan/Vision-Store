"use client";

import CustomButton from "@/components/main/CustomButton";
import Loading from "@/components/main/Loading";
import ProductCard from "@/components/main/user/ProductCard";
import { adminRoutes } from "@/data";
import { isUserAvailable } from "@/lib/actions/fetch/auth";
import { fetchItems } from "@/lib/actions/fetch/product";
import { CURRENCY, IMAGE_PATH, RESULT } from "@/lib/api";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [fetchedProducts, setFetchedProducts] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [currency, setCurrency] = useState(CURRENCY);
  const [getUser, setUser] = useState(null);

  const getData = async () => {
    const user = await isUserAvailable(true);
    setUser(user);
    fetchProducts(user);
  };
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    getData();
  }, []);

  const fetchProducts = async (user?: any) => {
    try {
      setIsLoading(true);
      const result = await fetchItems();
      if (result?.status === RESULT.error) return alert("Something Failed");
      if (result?.status === RESULT.message) return alert(result.message);

      if (result?.status === RESULT.data) {
        const { itemList, categoryList } = result.data;
        setFetchedProducts([...itemList]);
        setCategories(categoryList);
        if (user) setUser(user);
      }
    } catch (error: Error | any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const groupProductsByCategory = () => {
    const groupedProducts: Record<string, any[]> = {};

    categories.forEach((category: any) => {
      groupedProducts[category.name] = fetchedProducts
        .filter((product: any) => product.category === category.name)
        .slice(0, 4);
    });

    return groupedProducts;
  };

  const groupedProducts = groupProductsByCategory();

  return (
    <div>
      <Loading isLoading={isLoading} />

      {/* <div className="flex-center flex-col gap-5 lg:px-10">
        <CustomButton
          title="Admin Sign In"
          handlePress={() => router.push(adminRoutes.SIGN_IN.path)}
          className="flex-1 w-full"
        />
        <CustomButton
          title="Admin Dashboard"
          handlePress={() => router.push(adminRoutes.DASHBOARD.path)}
          className="flex-1 w-full"
        />
      </div> */}

      <header>
        <h1 className="hero-heading special-font w-full text-center mt-10">
          Welcome to Vision Store
        </h1>
        <p className="mt-5 text-center w-full text-lg font-zentry text-gray-500">
          Vision Store: Your One-Stop Destination for High-Quality Electronics,
          Advanced Laptops, and the Latest Tech Innovations
        </p>
      </header>

      <h2 className="text-lg font-bold mb-3 border-b-2 pb-3 mt-10 text-xl font-circular-web">
        Browse Latest
      </h2>
      <div className="flex-center flex-wrap gap-5 lg:px-10 mt-5 mb-5">
        {fetchedProducts.slice(0, 8).map((product: any) => {
          return (
            <ProductCard
              key={product.id}
              src={`${IMAGE_PATH}${product.imagePath}`}
              title={product.title}
              price={product.price}
              currency={currency}
              quantity={product.quantity}
              alt={"Product Image"}
              url={product.id}
              user={getUser}
            />
          );
        })}
      </div>

      {Object.entries(groupedProducts).map(([categoryName, products]) => (
        <div key={categoryName} className="mt-10 mb-5">
          {products.length > 0 && (
            <>
              <h2 className="text-lg font-bold mb-3 border-b-2 pb-3 text-xl font-circular-web">
                {categoryName}
              </h2>
              <div className="flex-center flex-wrap gap-5 lg:px-10">
                {products.map((product: any) => (
                  <ProductCard
                    key={product.id}
                    src={`${IMAGE_PATH}${product.imagePath}`}
                    title={product.title}
                    price={product.price}
                    currency={currency}
                    quantity={product.quantity}
                    alt="Product Image"
                    url={product.id}
                    user={getUser}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ))}

      {/* <span className="text-black">Home</span> */}
    </div>
  );
};

export default Home;
