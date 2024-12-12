"use client";

import PathNav from "@/components/main/admin/PathNav";
import CustomButton from "@/components/main/CustomButton";
import InputField from "@/components/main/InputField";
import Loading from "@/components/main/Loading";
import SelectField from "@/components/main/SelectField";
import WrapperBody from "@/components/wrapper/WrapperBody";
import { adminRoutes } from "@/data";
import { validateAvailability } from "@/lib/actions/validations/validate";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoryCreate = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const [form, setForm] = useState({
    title: "",
    media: "",
    parent: "",
    errors: {
      title: null,
      parent: null,
    },
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const validateInputData = () => {
    // Validation of required data
    const errors = {
      title: validateAvailability(form.title),
    };

    // Update validation results
    if (errors.title) {
      setForm((prevForm: any) => ({
        ...prevForm,
        errors,
      }));
      return false;
    }

    return true;
  };

  const handleCreateCategory = async () => {
    const isValid = validateInputData();
    if (!isValid) return;

    try {
      setIsLoading(true);
      console.log(form);
      // const result = await adminCreateCategory(form);
      // if (result.status === RESULT.error) return alert("Something Failed");

      //   if (result.status === RESULT.success) {
      router.replace(adminRoutes.CATEGORIES.path);
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
            path: adminRoutes.CATEGORIES.path,
            name: adminRoutes.CATEGORIES.title,
          },
          {
            path: adminRoutes.CREATE_CATEGORY.path,
            name: adminRoutes.CREATE_CATEGORY.title,
          },
        ]}
      />

      <header className="mb-7">
        <h1 className="text-4xl font-bold mt-5 mb-5 font-robert-medium dark:text-white">
          {form.title ? form.title : "[Untitled]"}
        </h1>
        <hr className="mb-5" />
        <div className="flex justify-between items-center">
          <p className="text-md fontbold text-gray-600 dark:text-gray-300">
            Creating new Category
          </p>
          <CustomButton
            title="Create"
            variant="solid"
            className="bg-black-200 dark:bg-gray-300 px-4 min-h-10"
            textStyle=" text-white dark:text-black"
            handlePress={() => {
              router.push(adminRoutes.CATEGORIES.path);
            }}
          />
        </div>
        <hr className="mt-5" />
      </header>

      {/* Form */}
      <div className="w-full min-h-[300px] grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <section className="col-span-2 sm:col-span-1 flex flex-col min-w-[300px] flex-1 w-full gap-5 lg:border-r-2 border-b-1 lg:pe-3">
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

          <SelectField
            title="Media"
            data={[]}
            handleValueChange={(e) => {
              setForm({
                ...form,
                parent: e.target.value,
                errors: { ...form.errors, parent: null },
              });
            }}
            error={form.errors.parent}
          />
        </section>

        <section className="col-span-1 md:col-span-2 flex flex-col min-w-[300px] flex-1 w-full gap-5">
          <SelectField
            title="Parent"
            data={[]}
            handleValueChange={(e) => {
              setForm({
                ...form,
                parent: e.target.value,
                errors: { ...form.errors, parent: null },
              });
            }}
            error={form.errors.parent}
          />
        </section>
      </div>
    </div>
  );
};

export default CategoryCreate;
