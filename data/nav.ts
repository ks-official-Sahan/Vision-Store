/* 
USER NAVIGATIONS 
*/

import { CREATE_FIRST_USER } from "@/lib/endpoints";

export const routes = {
  HOME: { title: "Home", path: "/" },
  ABOUT: { title: "About", path: "/about" },
  WOKRS: { title: "Works", path: "/works" },
  UPDATES: { title: "Updates", path: "/updates" },
  CONTACT: { title: "Contact", path: "/contact" },
  SIGN_IN: { title: "Sign In", path: "/sign-in" },
  // BLOG: { title: "Blog", path: "/blog" },
};

const navbarItems = [
  routes.HOME,
  routes.ABOUT,
  routes.WOKRS,
  routes.UPDATES,
  routes.CONTACT,
];

const sidebarItems = [...navbarItems, routes.SIGN_IN];

export const siteNavigations = {
  navbar: navbarItems,
  sidebar: sidebarItems,
};

/* 
ADMIN NAVIGATIONS 
*/

export const adminRoutes = {
  // AUTH
  SIGN_IN: { title: "Sign In", path: "/admin/sign-in" },
  CREATE_FIRST_USER: {
    title: "Create First User",
    path: "/admin/create-first-user",
  },
  LOGOUT: { title: "Admin Logout", path: "/admin/logout" },

  // MAIN PAGES
  DASHBOARD: { title: "Dashboard", path: "/admin/dashboard" },
  PRODUCTS: { title: "Products", path: "/admin/products" },
  CATEGORIES: { title: "Categories", path: "/admin/categories" },
  ORDERS: { title: "Orders", path: "/admin/orders" },
  MEDIA: { title: "Media", path: "/admin/media" },
  USERS: { title: "Users", path: "/admin/users" },
  PROFILE: { title: "Profile", path: "/admin/profile" },

  // SUB PAGES - CREATE
  CREATE_PRODUCT: { title: "Create Product", path: "/admin/products/create" },
  CREATE_CATEGORY: {
    title: "Create Category",
    path: "/admin/categories/create",
  },
  CREATE_ORDER: { title: "Create Order", path: "/admin/orders/create" },
  CREATE_MEDIA: { title: "Create Media", path: "/admin/media/create" },
  CREATE_USER: { title: "Create User", path: "/admin/users/create" },

  // SUB PAGES - edit
  EDIT_PRODUCT: { title: "Edit Product", path: "/admin/products/edit?id=" },
  EDIT_CATEGORY: {
    title: "Edit Category",
    path: "/admin/categories/edit?id=",
  },
  EDIT_ORDER: { title: "Edit Order", path: "/admin/orders/edit?id=" },
  EDIT_MEDIA: { title: "Edit Media", path: "/admin/media/edit?id=" },
  EDIT_USER: { title: "Edit User", path: "/admin/users/edit?id=" },
};

const adminNavbarItems = [
  adminRoutes.DASHBOARD,
  adminRoutes.PRODUCTS,
  adminRoutes.USERS,
  adminRoutes.ORDERS,
  adminRoutes.MEDIA,
  adminRoutes.CATEGORIES,
];

const adminSidebarItems = [...adminNavbarItems, adminRoutes.PROFILE];

export const adminSiteNavigations = {
  navbar: adminNavbarItems,
  sidebar: adminSidebarItems,
};