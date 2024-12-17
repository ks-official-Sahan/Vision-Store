"use client";

import CustomButton from "@/components/main/CustomButton";
import Loading from "@/components/main/Loading";
import ProductCard from "@/components/main/user/ProductCard";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { adminRoutes, routes } from "@/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  const [fetchedProducts, setFetchedProducts] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    setProducts(fetchedProducts);
  }, [fetchedProducts]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      // const result = await adminFetchProducts();
      // if (result.status === RESULT.error) return alert("Something Failed");

      // if (result.status === RESULT.data) {
      setFetchedProducts([
        {
          id: "PR001",
          name: "Asus Tuf Dash F15",
          title: "Asus Tuf Laptop",
          status: "Active",
          price: "250.00",
          currency: "$",
          quantity: "10",
          imagePath: "/static-image.jpg",
        },
        {
          id: "PR004",
          name: "Asus Tuf Gaming F15",
          title:
            "Asus Tuf Dash F15 Laptop 16GB RAM RTX 3070 2TB PCIe Gen 4 NVME",
          status: "Inactive",
          price: "450.00",
          currency: "$",
          quantity: "15",
          imagePath: "/static-image.jpg",
        },
        {
          id: "PR004",
          name: "Asus Tuf Gaming F15",
          title:
            "Asus Tuf Dash F15 Laptop 16GB RAM RTX 3070 2TB PCIe Gen 4 NVME",
          status: "Inactive",
          price: "450.00",
          currency: "$",
          quantity: "15",
          imagePath: "/static-image.jpg",
        },
        {
          id: "PR004",
          name: "Asus Tuf Gaming F15",
          title:
            "Asus Tuf Dash F15 Laptop 16GB RAM RTX 3070 2TB PCIe Gen 4 NVME",
          status: "Inactive",
          price: "450.00",
          currency: "$",
          quantity: "15",
          imagePath: "/static-image.jpg",
        },
        {
          id: "PR004",
          name: "Asus Tuf Gaming F15",
          title:
            "Asus Tuf Dash F15 Laptop 16GB RAM RTX 3070 2TB PCIe Gen 4 NVME",
          status: "Inactive",
          price: "450.00",
          currency: "$",
          quantity: "15",
          imagePath: "/static-image.jpg",
        },
        {
          id: "PR004",
          name: "Asus Tuf Gaming F15",
          title:
            "Asus Tuf Dash F15 Laptop 16GB RAM RTX 3070 2TB PCIe Gen 4 NVME",
          status: "Inactive",
          price: "450.00",
          currency: "$",
          quantity: "15",
          imagePath: "/static-image.jpg",
        },
      ]);
      //   } else if (result.status === RESULT.success) {
      //     router.replace("/admin");
      //   }
    } catch (error: Error | any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (text: string) => {
    if (text === "") return setProducts([...fetchedProducts]);

    const normalizedSearchValue = text.toString().toLowerCase();
    const filteredProducts = fetchedProducts.filter(
      (product: any) =>
        product.id.toLowerCase().includes(normalizedSearchValue) ||
        product.name.toLowerCase().includes(normalizedSearchValue) ||
        product.title.toLowerCase().includes(normalizedSearchValue)
    );

    setProducts([...filteredProducts]);
  };

  return (
    <div>
      <Loading isLoading={isLoading} />

      <div className="flex-center flex-col gap-5 lg:px-10">
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
      </div>

      <div className="flex-center flex-wrap gap-5 lg:px-10 mt-5 mb-5">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            src={product.imagePath}
            title={product.title}
            price={product.price}
            currency={product.currency}
            quantity={product.quantity}
            alt={"Product Image"}
            url={product.id}
          />
        ))}
      </div>

      <span className="text-black">Home</span>
    </div>
  );
};

export default Home;
