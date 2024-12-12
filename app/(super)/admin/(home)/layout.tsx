import Loading from "@/components/main/Loading";
import AdminNavigation from "@/components/main/nav/admin/AdminNavigation";
import React, { Suspense } from "react";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="min-h-dvh w-screen overflow-x-hidden">
      <Suspense fallback={<Loading isLoading />}>
        <AdminNavigation />
        <main className="mt-24 flex-center">
          <div className="w-10/12 sm:w-screen sm:px-8 md:w-[90vw]">{children}</div>
        </main>
      </Suspense>
    </div>
  );
};

export default AdminLayout;
