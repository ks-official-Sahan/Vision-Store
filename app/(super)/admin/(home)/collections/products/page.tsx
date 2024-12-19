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
import { CURRENCY } from "@/lib/api";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  const router = useRouter();

  // const [products, setProducts] = useState([]);
  // const [fetchedProducts, setFetchedProducts] = useState([]);
  const [total, setTotal] = useState(0.0);
  const [currency, setCurrency] = useState(CURRENCY);
  const [isLoading, setIsLoading] = useState(true);

  const [fetchedProducts, setFetchedProducts] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    let value = 0.0;
    products.map((product: any) => (value += parseFloat(product.totalAmount)));

    setTotal(value);
  }, [products]);

  useEffect(() => {
    setProducts(fetchedProducts);
  }, [fetchedProducts]);

  useEffect(() => {
    //setTimeout(fetchProducts, 2000);
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      // const result = await adminFetchProducts();
      // if (result.status === RESULT.error) return alert("Something Failed");

      // if (result.status === RESULT.data) {
      setFetchedProducts([
        {
          id: "PR001",
          name: "Asus Tuf Dash F15",
          status: "Active",
          totalAmount: "250.00",
          currency: "$",
          quantity: "10",
        },
        {
          id: "PR004",
          name: "Asus Tuf Gaming F15",
          status: "Inactive",
          totalAmount: "450.00",
          currency: "$",
          quantity: "15",
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
    if (text === "") return setProducts([...fetchedProducts]);

    const normalizedSearchValue = text.toString().toLowerCase();
    const filteredProducts = fetchedProducts.filter(
      (product: any) =>
        product.id.toLowerCase().includes(normalizedSearchValue) ||
        product.status.toLowerCase().includes(normalizedSearchValue) ||
        product.totalAmount.includes(normalizedSearchValue)
    );

    setProducts([...filteredProducts]);
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <PathNav
        data={[
          {
            path: adminRoutes.PRODUCTS.path,
            title: adminRoutes.PRODUCTS.title,
          },
        ]}
      />

      <header className="mb-6 flex items-center justify-between pb-2 border-b-1">
        <h1 className="text-xl font-robert-medium">
          {adminRoutes.PRODUCTS.title}
        </h1>
        <CustomButton
          title="Create New"
          variant="solid"
          className="bg-black-200 dark:bg-gray-300 px-4 min-h-10"
          textStyle=" text-white dark:text-black"
          handlePress={() => {
            router.push(`${adminRoutes.CREATE_PRODUCT.path}`);
          }}
        />
      </header>

      <section className="px-2">
        <article className="flex mb-5">
          <input
            type="text"
            placeholder={`Search ${adminRoutes.PRODUCTS.title}`}
            className="flex-1 rounded-xl border-2 h-12 px-4 mb-3 outline-none focus:border-blue-400 text-gray-700 dark:text-gray-300"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </article>

        <Table>
          <TableCaption>
            A list of current {adminRoutes.PRODUCTS.title}.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product: any) => (
              <TableRow key={product.id} className="h-12">
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell className="text-center">
                  {product.quantity}
                </TableCell>
                <TableCell>{product.status}</TableCell>
                <TableCell className="text-right">
                  {product.currency + product.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right">{`${currency}${total}.00`}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
    </>
  );
};

export default ProductsPage;
