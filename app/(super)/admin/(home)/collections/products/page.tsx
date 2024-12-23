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
import { adminRoutes, HOST, routes } from "@/data";
import { fetchItems } from "@/lib/actions/fetch/product";
import { CURRENCY, RESULT } from "@/lib/api";
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

  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  useEffect(() => {
    let value = 0.0;
    products.map((product: any) => (value += parseFloat(product.price)));

    setTotal(value);
  }, [products]);

  useEffect(() => {
    setProducts(
      fetchedProducts.map((product: any) => ({
        ...product,
        id: product.id.toString(),
      }))
    );
  }, [fetchedProducts]);

  useEffect(() => {
    //setTimeout(fetchProducts, 2000);
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const result = await fetchItems();
      if (result?.status === RESULT.error) return alert("Something Failed");
      if (result?.status === RESULT.message) return alert(result.message);

      if (result?.status === RESULT.data) {
        const { itemList } = result.data;
        setFetchedProducts([...itemList]);
        console.log(itemList);
      }
    } catch (error: Error | any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (text: string) => {
    if (text === "") return setProducts([...fetchedProducts]);

    const normalizedSearchValue = text.toString().toLowerCase();
    const filteredProducts = fetchedProducts.filter(
      ({ name, id, category, price, title }: any) =>
        String(id).toLowerCase().includes(normalizedSearchValue) ||
        name.toLowerCase().includes(normalizedSearchValue) ||
        title.toLowerCase().includes(normalizedSearchValue) ||
        category.toLowerCase().includes(normalizedSearchValue) ||
        price.toString().includes(normalizedSearchValue)
    );

    setProducts([...filteredProducts]);
  };

  const handleView = (url: string) => {
    router.push(`${HOST}/${routes.VIEW_PRODUCT.path}/${url}`);
    // router.push(`${routes.VIEW_PRODUCT.path}/id=${url}`);
  };

  const handleRowClick = (productId: string) => {
    setExpandedRow(expandedRow === productId ? null : productId);
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
              <TableHead className="min-w-[40px] max-w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product: any) => (
              <TableRow
                key={product.id}
                className="cursor-pointer h-16 py-2"
                onClick={() => {
                  handleRowClick(product.id); // Toggle full text on row click
                  // handleView(product.id); // Navigate to the product view
                }}
              >
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell
                  className={`min-w-32 min-h-12 ${
                    expandedRow === product.id
                      ? ""
                      : "max-w-52 overflow-hidden text-ellipsis whitespace-nowrap" // Apply line-clamp only if row is not expanded
                  }`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering row click
                    handleView(product.id); // Navigate to the product view
                  }}
                >
                  {" "}
                  {product.title}
                </TableCell>
                <TableCell className="text-center">
                  {product.quantity}
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="text-right">
                  {`${CURRENCY} ${product.price.toFixed(2)}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right">{`${CURRENCY} ${total.toFixed(
                2
              )}`}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
    </>
  );
};

export default ProductsPage;
