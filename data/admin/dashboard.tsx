import React from "react";
import { adminRoutes, RouteProps } from "../nav";

export type GridCardProps = {
  main: RouteProps;
  create: RouteProps;
};

export const dashboardContent = {
  grid: [
    { main: adminRoutes.PRODUCTS, create: adminRoutes.CREATE_PRODUCT },
    { main: adminRoutes.CATEGORIES, create: adminRoutes.CREATE_CATEGORY },
    { main: adminRoutes.MEDIA, create: adminRoutes.CREATE_MEDIA },
    { main: adminRoutes.USERS, create: adminRoutes.CREATE_USER },
    { main: adminRoutes.ORDERS, create: adminRoutes.CREATE_ORDER },
  ],
};
