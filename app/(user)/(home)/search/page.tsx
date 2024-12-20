"use client";

import InputField from "@/components/main/InputField";
import Loading from "@/components/main/Loading";
import SelectField from "@/components/main/SelectField";
import ProductCard from "@/components/main/user/ProductCard";
import { isUserAvailable } from "@/lib/actions/fetch/auth";
import {
  fetchCategory,
  fetchItems,
  fetchSearchItems,
} from "@/lib/actions/fetch/product";
import { CURRENCY, IMAGE_PATH, RESULT } from "@/lib/api";
import React, { useEffect, useState } from "react";

const SearchPage = ({ isModal = false }: { isModal?: boolean }) => {
  const [isOptions, setIsOptions] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedProducts, setFetchedProducts] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [currency, setCurrency] = useState(CURRENCY);
  const [getUser, setUser] = useState(null);

  const [form, setForm] = useState<any>({
    searchText: "",
    sortText: "",
    categoryName: "",
    priceRangeStart: 0,
    priceRangeEnd: 0,
  });

  const getData = async () => {
    const user = await isUserAvailable(true);
    setUser(user);
  };

  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [getUser]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    getData();
  }, []);

  const handleSearch = (value: string) => {
    // if (value.length == 0) return fetchProducts();
    // if (value.length < 4) return;
    setForm({
      ...form,
      searchText: value,
    });
    fetchProducts();
  };

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const result = await fetchCategory();
      if (result?.status === RESULT.error) return alert("Something Failed");
      if (result?.status === RESULT.message) return alert(result.message);

      if (result?.status === RESULT.data) {
        const { categoryList } = result.data;
        setCategories(categoryList);
        // console.log(JSON.stringify(categoryList));
      }
    } catch (error: Error | any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const result = await fetchSearchItems(form);
      if (result?.status === RESULT.error) return alert("Something Failed");
      if (result?.status === RESULT.message) return alert(result.message);

      if (result?.status === RESULT.data) {
        // const { itemList, categoryList } = result.data;
        const { itemList } = result.data;
        setFetchedProducts([...itemList]);
        // setCategories(categoryList);
      }
    } catch (error: Error | any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSortChange = (value: any) => {
    setForm({
      ...form,
      sortText: value,
    });
  };

  useEffect(() => {
    if (form.priceRangeStart == "") form.priceRangeStart = 0;
    if (form.priceRangeEnd == "") form.priceRangeEnd = 0;
    fetchProducts();
  }, [form]);

  return (
    <div className="w-full flex flex-col">
      {!isModal && <h1 className="text-2xl font-bold mb-2">Search</h1>}

      <Loading isLoading={isLoading} />

      <div className="-mt-3 mb-6 w-full flex flex-col gap-3 px-3">
        {/* <input
          type="text"
          placeholder="Search Products..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        /> */}

        <InputField
          placeholder="Search Products..."
          handleTextChange={(text) => {
            handleSearch(text);
          }}
        />

        <div
          className="px-3 cursor-pointer font-bold text-xl text-blue-500 hover:text-gray-800 dark:hover:text-white"
          onClick={() => setIsOptions(!isOptions)}
        >
          Filter Options
        </div>

        {isOptions && (
          <div className="px-8 space-y-4">
            {/* Sort */}
            <div className="px-4 py-3 border-2 shadow-lg shadow-white/30 rounded-lg gap-3">
              <span className="text-lg font-bold pb-2 border-b-2 w-full mb-4">
                Sort By
              </span>
              <div className="mt-4 flex justify-between gap-2 sm:flex-col">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <input
                      name="sort"
                      type="radio"
                      onChange={() => handleSortChange("Sort by Latest")}
                    />
                    <span>Latest</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      name="sort"
                      type="radio"
                      onChange={() => handleSortChange("Sort by Oldest")}
                    />
                    <span>Oldest</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <input
                      name="sort"
                      type="radio"
                      onChange={() => handleSortChange("Sort by Name ASC")}
                    />
                    <span>Name ASC</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      name="sort"
                      type="radio"
                      onChange={() => handleSortChange("Sort by Name DESC")}
                    />
                    <span>Name DESC</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <input
                      name="sort"
                      type="radio"
                      onChange={() => handleSortChange("Sort by Price ASC")}
                    />
                    <span>Price ASC</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      name="sort"
                      type="radio"
                      onChange={() => handleSortChange("Sort by Price DESC")}
                    />
                    <span>Price DESC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter */}
            <div className="px-4 py-4 border-2 shadow-lg shadow-white/30 rounded-lg gap-3">
              <span className="text-lg font-bold pb-2 border-b-2 w-full mb-4">
                Filter By
              </span>
              <div className="mt-4 flex justify-between gap-2 sm:flex-col">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col gap-1">
                    <p>Category</p>
                    <SelectField
                      data={[...categories]}
                      otherStyle="-mt-6 w-72 h-10"
                      handleValueChange={(e) =>
                        setForm({
                          ...form,
                          categoryName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 items-center justify-between">
                    <span>Price From</span>
                    <input
                      type="number"
                      className="h-10 w-72 rounded-lg px-4"
                      onChange={(e) =>
                        setForm({
                          ...form,
                          priceRangeStart: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex gap-3 items-center justify-between">
                    <span>Price To</span>
                    <input
                      type="number"
                      className="h-10 w-72 rounded-lg px-4"
                      onChange={(e) =>
                        setForm({
                          ...form,
                          priceRangeEnd: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products */}
        <div>
          <div className="flex items-center flex-wrap gap-5 lg:px-10 mt-5 mb-5">
            {fetchedProducts.slice(0, 8).map((product: any) => {
              return (
                <ProductCard
                  key={product.id}
                  src={`${IMAGE_PATH}${product.imagePath}`}
                  title={product.title}
                  price={product.price}
                  currency={currency}
                  quantity={product.quantity}
                  alt={"Product Image"}
                  url={product.id}
                  user={getUser}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
