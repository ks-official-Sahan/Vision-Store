"use client";

import CustomButton from "@/components/main/CustomButton";
import Loading from "@/components/main/Loading";
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

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
    // router.push("/admin/create-first-user");
    // router.push("/admin/dashboard");
  }, []);

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

      <div className="flex-center gap-5 lg:px-10 mt-5 mb-5">
        <Card>
          <CardHeader>
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9zTsUw9GLhneuaoFGKsx3WAzZc9qE1SK_w&s"
              }
              alt="Product"
              width={200}
              height={200}
            />
          </CardHeader>
          <CardContent>
            <span>Product Name</span>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <CustomButton
              className="w-full"
              handlePress={() => {}}
              title="Buy Now"
            />
            <CustomButton
              className="w-full"
              handlePress={() => {}}
              title="Add To Cart"
            />
          </CardFooter>
        </Card>
      </div>

      <span className="text-black">Home</span>
    </div>
  );
};

export default Home;
