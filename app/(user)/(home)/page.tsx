"use client";

import CustomButton from "@/components/main/CustomButton";
import Loading from "@/components/main/Loading";
import { adminRoutes, routes } from "@/data";
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

      <div className="flex-center flex-col gap-5 px-10">
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
        <CustomButton
          title="Sign In"
          handlePress={() => router.push(routes.SIGN_IN.path)}
          className="flex-1 w-full"
        />
      </div>

      <span className="text-black">Home</span>
    </div>
  );
};

export default Home;
