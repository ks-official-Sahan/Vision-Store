"use client";

import Loading from "@/components/main/Loading";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
    // router.push("/admin/create-first-user");
    router.push("/admin/dashboard");
  }, []);

  return (
    <div>
      <Loading isLoading={isLoading} />

      <span className="text-black">Home</span>
    </div>
  );
};

export default Home;
