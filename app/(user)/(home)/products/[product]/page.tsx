"use client";

import PathNav from "@/components/main/admin/PathNav";
import { routes } from "@/data";
import { useParams } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const { product } = useParams();
  console.log(product);
  return (
    <div>
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
    </div>
  );
};

export default ProductPage;
