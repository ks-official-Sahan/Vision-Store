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

const CategoriesPage = () => {
  const router = useRouter();

  const [fetchedCategories, setFetchedCategories] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCategories(fetchedCategories);
  }, [fetchedCategories]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      // const result = await adminFetchCategories();
      // if (result.status === RESULT.error) return alert("Something Failed");

      // if (result.status === RESULT.data) {
      setFetchedCategories([
        {
          id: "CAT001",
          title: "Laptop",
          media: "<No Media>",
          parent: "<No Parent>",
        },
        {
          id: "CAT002",
          title: "PC",
          media: "<No Media>",
          parent: "PC",
        },
      ]);
      //   } else if (result.status === RESULT.success) {
      //     router.replace(adminRoutes.CATEGORIES.path);
      //   }
    } catch (error: Error | any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (text: string) => {
    if (text === "") return setCategories([...fetchedCategories]);

    const normalizedSearchValue = text.toString().toLowerCase();
    const filteredCategories = fetchedCategories.filter(
      (category: any) =>
        category.id.toLowerCase().includes(normalizedSearchValue) ||
        category.title.toLowerCase().includes(normalizedSearchValue) ||
        category.parent.includes(normalizedSearchValue)
    );

    setCategories([...filteredCategories]);
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <PathNav
        data={[
          {
            path: adminRoutes.CATEGORIES.path,
            name: adminRoutes.CATEGORIES.title,
          },
        ]}
      />

      <header className="mb-6 flex items-center justify-between pb-2 border-b-1">
        <h1 className="text-xl font-robert-medium">
          {adminRoutes.CATEGORIES.title}
        </h1>
        <CustomButton
          title="Create New"
          variant="solid"
          className="bg-black-200 dark:bg-gray-300 px-4 min-h-10"
          textStyle=" text-white dark:text-black"
          handlePress={() => {
            router.push(`${adminRoutes.CATEGORIES.path}/create`);
          }}
        />
      </header>

      <section className="px-2">
        <article className="flex mb-5">
          <input
            type="text"
            placeholder={`Search ${adminRoutes.CATEGORIES.title}`}
            className="flex-1 rounded-xl border-2 h-12 px-4 mb-3 outline-none focus:border-blue-400 text-gray-700 dark:text-gray-300"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </article>

        <Table>
          <TableCaption>
            A list of current {adminRoutes.CATEGORIES.title}.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Media</TableHead>
              <TableHead className="text-right">Parent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category: any) => (
              <TableRow key={category.id} className="h-12">
                <TableCell className="font-medium">{category.id}</TableCell>
                <TableCell>{category.title}</TableCell>
                <TableCell>{category.media}</TableCell>
                <TableCell className="text-right">{category.parent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Categories</TableCell>
              <TableCell className="text-right">{categories.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
    </>
  );
};

export default CategoriesPage;
