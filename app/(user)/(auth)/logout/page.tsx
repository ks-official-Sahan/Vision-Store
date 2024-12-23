"use client";

import { routes } from "@/data";
import { removeData } from "@/lib/api";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const LogOut = () => {
  const handleLogout = async () => {
    await removeData("user");
  };

  useEffect(() => {
    handleLogout();
    setTimeout(() => {
      redirect(routes.SIGN_IN.path);
    }, 2000);
  }, []);

  return <div className="flex-center min-h-dvh w-screen">Logout</div>;
};

export default LogOut;
