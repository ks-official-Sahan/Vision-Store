"use client";

import GridCard from "@/components/main/admin/dashboard/GridCard";
import Tips from "@/components/main/admin/dashboard/Tips";
import Loading from "@/components/main/Loading";
import { dashboardContent, GridCardProps } from "@/data";
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [viewTips, setViewTips] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <header className="mt-2 mb-5">
        <h1
          className="font-robert-regular text-xl text-green-400 cursor-pointer"
          onClick={() => setViewTips(!viewTips)}
        >
          Welcome to your Dashboard
        </h1>
      </header>

      {viewTips && <Tips />}

      <article className="mt-10">
        <div className="font-robert-medium mb-5">
          <h2 className="text-lg">Collections</h2>
        </div>

        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-rows-10 gap-5">
          {dashboardContent.grid.map((card: GridCardProps) => (
            <GridCard
              title={card.main.title}
              url={card.main.path}
              create={card.create.path}
              key={card.main.title}
            />
          ))}
        </div>
      </article>
    </>
  );
};

export default AdminDashboard;
