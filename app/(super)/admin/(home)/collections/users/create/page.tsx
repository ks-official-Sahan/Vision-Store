"use client";

import PathNav from "@/components/main/admin/PathNav";
import CustomButton from "@/components/main/CustomButton";
import InputField from "@/components/main/InputField";
import Loading from "@/components/main/Loading";
import MediaSelector from "@/components/main/MediaSelector";
import SelectField from "@/components/main/SelectField";
import WrapperBody from "@/components/wrapper/WrapperBody";
import { adminRoutes, Roles } from "@/data";
import {
  validateAvailability,
  validateEmail,
  validatePassword,
} from "@/lib/actions/validations/validate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductCreate = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const [form, setForm] = useState<any | object>({
    email: "",
    password: "",
    cpassword: "",
    name: "",
    stripeCustomer: "",
    role: "",
    errors: {
      email: null,
      password: null,
      cpassword: null,
      name: null,
      stripeCustomer: null,
      role: null,
    },
  });

  const [users, setUsers] = useState<any>([]);

  const [roles, setRoles] = useState<any>([]);

  useEffect(() => {
    loadRoles();
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const validateInputData = () => {
    // Validation of required data
    const errors = {
      email: validateEmail(form.email),
      password: validatePassword(form.password),
      cpassword: validatePassword(form.cpassword, form.password),
      name: validateAvailability(form.name, "Name"),
    };

    // Update validation results
    if (errors.email || errors.password || errors.cpassword || errors.name) {
      setForm((prevForm: any) => ({
        ...prevForm,
        errors,
      }));
      return false;
    }

    return true;
  };

  const handleCreateUser = async () => {
    const isValid = validateInputData();
    if (!isValid) return;

    try {
      setIsLoading(true);
      console.log(form);
      // const result = await adminCreateUser(form);
      // if (result.status === RESULT.error) return alert("Something Failed");

      //   if (result.status === RESULT.success) {
      router.replace(adminRoutes.USERS.path);
      //   }
    } catch (error: Error | any) {
      alert(`Something went wrong: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const loadRoles = async () => {
    try {
      setIsLoading(true);
      // const result = await fetchRoles();
      // if (result.status === RESULT.error) return alert("Something Failed");

      //   if (result.status === RESULT.data) {
      // setRoles([...result.data]);
      setRoles(Roles);
      //   } else if (result.status === RESULT.success) {
      // router.replace(adminRoutes.USERS.path);
      //   }
    } catch (error: Error | any) {
      alert(`Something went wrong: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // No need I think
  const loadUsers = async () => {
    try {
      setIsLoading(true);
      // const result = await fetchUsers();
      // if (result.status === RESULT.error) return alert("Something Failed");

      //   if (result.status === RESULT.data) {
      // setUsers([...result.data]);
      setUsers([
        { title: "Main", value: "main" },
        { title: "Sub", value: "sub" },
      ]);
      //   } else if (result.status === RESULT.success) {
      // router.replace(adminRoutes.USERS.path);
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
            path: adminRoutes.USERS.path,
            name: adminRoutes.USERS.title,
          },
          {
            path: adminRoutes.CREATE_USER.path,
            name: adminRoutes.CREATE_USER.title,
          },
        ]}
      />

      <header className="mb-7">
        <h1 className="text-4xl font-bold mt-5 mb-5 font-robert-medium dark:text-white">
          {form.email ? form.email : form.name ? form.name : "[Untitled]"}
        </h1>
        <hr className="mb-5" />
        <div className="flex justify-between items-center">
          <p className="text-md fontbold text-gray-600 dark:text-gray-300">
            Creating new User
          </p>
          <CustomButton
            title="Create"
            variant="solid"
            className="bg-black-200 dark:bg-gray-300 px-4 min-h-10"
            textStyle=" text-white dark:text-black"
            handlePress={() => {
              handleCreateUser();
              // router.push(adminRoutes.USERS.path);
            }}
          />
        </div>
        <hr className="mt-5" />
      </header>

      {/* Form */}
      <div className="w-full min-h-[300px] grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 border-b-2">
        <section className="col-span-2 sm:col-span-1 flex flex-col min-w-[300px] flex-1 w-full gap-5 lg:border-r-2 lg:pe-3 py-3">
          <InputField
            title="Name"
            value={form.name}
            placeholder={"Enter your Name"}
            handleTextChange={(value) =>
              setForm({
                ...form,
                name: value,
                errors: { ...form.errors, name: null },
              })
            }
            required
            error={form.errors.name}
          />
          <InputField
            title="Email Address"
            value={form.email}
            placeholder={"Enter your Email Address"}
            handleTextChange={(e) =>
              setForm({
                ...form,
                email: e,
                errors: { ...form.errors, email: null },
              })
            }
            required
            error={form.errors.email}
          />
          <article className="flex w-full sm:flex-col gap-5">
            <InputField
              title="Password"
              value={form.password}
              placeholder={"Enter your Password"}
              handleTextChange={(value) =>
                setForm({
                  ...form,
                  password: value,
                  errors: { ...form.errors, password: null },
                })
              }
              required
              error={form.errors.password}
              otherStyle="flex-1"
            />
            <InputField
              title="Confirm Password"
              value={form.cpassword}
              placeholder={"Enter your Confirm Password"}
              handleTextChange={(value) =>
                setForm({
                  ...form,
                  cpassword: value,
                  errors: { ...form.errors, cpassword: null },
                })
              }
              required
              error={form.errors.cpassword}
              otherStyle="flex-1"
            />
          </article>
        </section>

        <section className="col-span-1 md:col-span-2 flex flex-col min-w-[300px] flex-1 w-full gap-5 py-3">
          <article>
            <InputField
              title="Stripe Customer"
              value={form.stripeCustomer}
              placeholder={"Enter your Stripe Customer"}
              handleTextChange={(value) =>
                setForm({
                  ...form,
                  stripeCustomer: value,
                  errors: { ...form.errors, stripeCustomer: null },
                })
              }
              error={form.errors.stripeCustomer}
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 px-1">
              Enter the related Stripe customer or{" "}
              <Link
                href={"https://dashboard.stripe.com/test/customers/create"}
                className="underline"
                target="blank"
              >
                create a new one.
              </Link>
            </p>
          </article>

          <SelectField
            title="Role"
            data={Roles}
            handleValueChange={(e) => {
              setForm({
                ...form,
                role: e.target.value,
                errors: { ...form.errors, role: null },
              });
            }}
            error={form.errors.role}
          />
        </section>
      </div>
    </div>
  );
};

export default ProductCreate;
