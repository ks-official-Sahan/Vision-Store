"use client";

import PathNav from "@/components/main/admin/PathNav";
import CustomButton from "@/components/main/CustomButton";
import InputField from "@/components/main/InputField";
import Loading from "@/components/main/Loading";
import MediaSelector from "@/components/main/MediaSelector";
import SelectField from "@/components/main/SelectField";
import WrapperBody from "@/components/wrapper/WrapperBody";
import { adminRoutes } from "@/data";
import { validateAvailability } from "@/lib/actions/validations/validate";
import { error } from "console";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductCreate = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const [form, setForm] = useState<any | object>({
    title: "",
    name: "",
    price: "",
    quantity: "",
    media: "",
    category: "",
    errors: {
      title: null,
      name: null,
      price: null,
      quantity: null,
      category: null,
    },
  });

  const [products, setProducts] = useState<any>([]);

  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    loadCategories();
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    setForm({
      ...form,
      media: files,
    });
    console.log(files);
  };

  const validateInputData = () => {
    // Validation of required data
    const errors = {
      title: validateAvailability(form.title),
      name: validateAvailability(form.name),
      price: validateAvailability(form.price),
      quantity: validateAvailability(form.qunatity),
    };

    // Update validation results
    if (errors.title || errors.name || errors.price || errors.quantity) {
      setForm((prevForm: any) => ({
        ...prevForm,
        errors,
      }));
      return false;
    }

    return true;
  };

  const handleCreateProduct = async () => {
    const isValid = validateInputData();
    if (!isValid) return;

    try {
      setIsLoading(true);
      console.log(form);
      // const result = await adminCreateProduct(form);
      // if (result.status === RESULT.error) return alert("Something Failed");

      //   if (result.status === RESULT.success) {
      router.replace(adminRoutes.PRODUCTS.path);
      //   }
    } catch (error: Error | any) {
      alert(`Something went wrong: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      setIsLoading(true);
      // const result = await fetchCategories();
      // if (result.status === RESULT.error) return alert("Something Failed");

      //   if (result.status === RESULT.data) {
      // setCategories([...result.data]);
      setCategories([
        { title: "Main", value: "main" },
        { title: "Sub", value: "sub" },
      ]);
      //   } else if (result.status === RESULT.success) {
      // router.replace(adminRoutes.CATEGORIES.path);
      //   }
    } catch (error: Error | any) {
      alert(`Something went wrong: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // No need I think
  const loadProducts = async () => {
    try {
      setIsLoading(true);
      // const result = await fetchProducts();
      // if (result.status === RESULT.error) return alert("Something Failed");

      //   if (result.status === RESULT.data) {
      // setProducts([...result.data]);
      setProducts([
        { title: "Main", value: "main" },
        { title: "Sub", value: "sub" },
      ]);
      //   } else if (result.status === RESULT.success) {
      // router.replace(adminRoutes.PRODUCTS.path);
      //   }
    } catch (error: Error | any) {
      alert(`Something went wrong: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-dvh w-full">
      <Loading isLoading={isLoading} />

      <PathNav
        data={[
          {
            path: adminRoutes.PRODUCTS.path,
            name: adminRoutes.PRODUCTS.title,
          },
          {
            path: adminRoutes.CREATE_PRODUCT.path,
            name: adminRoutes.CREATE_PRODUCT.title,
          },
        ]}
      />

      <header className="mb-7">
        <h1 className="text-4xl font-bold mt-5 mb-5 font-robert-medium dark:text-white">
          {form.name ? form.name : "[Untitled]"}
        </h1>
        <hr className="mb-5" />
        <div className="flex justify-between items-center">
          <p className="text-md fontbold text-gray-600 dark:text-gray-300">
            Creating new Product
          </p>
          <CustomButton
            title="Create"
            variant="solid"
            className="bg-black-200 dark:bg-gray-300 px-4 min-h-10"
            textStyle=" text-white dark:text-black"
            handlePress={() => {
              handleCreateProduct();
              //router.push(adminRoutes.PRODUCTS.path);
            }}
          />
        </div>
        <hr className="mt-5" />
      </header>

      {/* Form */}
      <div className="w-full min-h-[300px] grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6  border-b-2">
        <section className="col-span-2 sm:col-span-1 flex flex-col min-w-[300px] flex-1 w-full gap-5 lg:border-r-2 lg:pe-3 py-3">
          <InputField
            title="Name"
            value={form.name}
            handleTextChange={(t) =>
              setForm({
                ...form,
                name: t,
                errors: { ...form.errors, name: null },
              })
            }
            required
            error={form.errors.name}
          />

          <InputField
            title="Title"
            value={form.title}
            handleTextChange={(t) =>
              setForm({
                ...form,
                title: t,
                errors: { ...form.errors, title: null },
              })
            }
            required
            error={form.errors.title}
          />

          <MediaSelector
            title="Media"
            handleFileUpload={handleFileUpload}
            files={files}
          />
        </section>

        <section className="col-span-1 md:col-span-2 flex flex-col min-w-[300px] flex-1 w-full gap-5 py-3">
          <SelectField
            title="Category"
            data={categories}
            handleValueChange={(e) => {
              setForm({
                ...form,
                category: e.target.value,
                errors: { ...form.errors, category: null },
              });
            }}
            error={form.errors.category}
          />
          <InputField
            title="Price"
            value={form.price}
            handleTextChange={(t) =>
              setForm({
                ...form,
                price: t,
                errors: { ...form.errors, price: null },
              })
            }
            required
            error={form.errors.price}
          />
          <InputField
            title="Qunatity"
            type="number"
            value={form.quantity}
            handleTextChange={(t) =>
              setForm({
                ...form,
                quantity: t,
                errors: { ...form.errors, quantity: null },
              })
            }
            required
            error={form.errors.quantity}
          />
        </section>
      </div>
    </div>
  );
};

export default ProductCreate;
