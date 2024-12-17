"use client";

import PathNav from "@/components/main/admin/PathNav";
import CustomButton from "@/components/main/CustomButton";
import Loading from "@/components/main/Loading";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { adminRoutes } from "@/data";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UsersPage = () => {
  const router = useRouter();

  // const [users, setUsers] = useState([]);
  // const [fetchedUsers, setFetchedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [fetchedUsers, setFetchedUsers] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    setUsers(fetchedUsers);
  }, [fetchedUsers]);

  useEffect(() => {
    //setTimeout(fetchUsers, 2000);
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);

      // const result = await adminFetchUsers();
      // if (result.status === RESULT.error) return alert("Something Failed");

      // if (result.status === RESULT.data) {
      setFetchedUsers([
        {
          id: "USR001",
          name: "Sahan",
          role: "Admin",
          status: "Active",
          email: "Sahan@gmail.com",
        },
        {
          id: "USR004",
          name: "Chathura",
          role: "Customer",
          status: "Inactive",
          email: "Chathura@gmail.com",
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
    if (text === "") return setUsers([...fetchedUsers]);

    const normalizedSearchValue = text.toString().toLowerCase();
    const filteredUsers = fetchedUsers.filter(
      (product: any) =>
        product.id.toLowerCase().includes(normalizedSearchValue) ||
        product.status.toLowerCase().includes(normalizedSearchValue) ||
        product.name.toLowerCase().includes(normalizedSearchValue) ||
        product.email.toLowerCase().includes(normalizedSearchValue) ||
        product.role.includes(normalizedSearchValue)
    );

    setUsers([...filteredUsers]);
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <PathNav
        data={[
          { path: adminRoutes.USERS.path, title: adminRoutes.USERS.title },
        ]}
      />

      <header className="mb-6 flex items-center justify-between pb-2 border-b-1">
        <h1 className="text-xl font-robert-medium">
          {adminRoutes.USERS.title}
        </h1>
        <CustomButton
          title="Create New"
          variant="solid"
          className="bg-black-200 dark:bg-gray-300 px-4 min-h-10"
          textStyle=" text-white dark:text-black"
          handlePress={() => {
            router.push(`${adminRoutes.CREATE_USER.path}`);
          }}
        />
      </header>

      <section className="px-2">
        <article className="flex mb-5">
          <input
            type="text"
            placeholder={`Search ${adminRoutes.USERS.title}`}
            className="flex-1 rounded-xl border-2 h-12 px-4 mb-3 outline-none focus:border-blue-400 text-gray-700 dark:text-gray-300"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </article>

        <Table>
          <TableCaption>
            A list of current {adminRoutes.USERS.title}.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: any) => (
              <TableRow key={user.id} className="h-12">
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-right">{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right">{`${users.length}`}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
    </>
  );
};

export default UsersPage;
