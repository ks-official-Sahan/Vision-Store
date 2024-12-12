"use client";

import InputField from "@/components/main/InputField";
import SelectField from "@/components/main/SelectField";
import CustomButton from "@/components/main/CustomButton";
import WrapperScreen from "@/components/wrapper/WrapperScreen";
import { adminRoutes, Roles, Site } from "@/data";
import { adminSignIn } from "@/lib/actions/fetch/admin";
import {
  validateAvailability,
  validateEmail,
  validatePassword,
} from "@/lib/actions/validations/validate";
import { RESULT } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Loading from "@/components/main/Loading";

export type AdminSignInFormProps = {
  email: string;
  password: string;
  errors?: any | object;
};

const AdminSignIn = () => {
  const router = useRouter();

  const [form, setForm] = useState<AdminSignInFormProps>({
    email: "",
    password: "",
    errors: {
      email: null,
      password: null,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateUserData = () => {
    // Validation of required data
    const errors = {
      email: validateEmail(form.email),
      password: validatePassword(form.password, form.password),
    };

    // Update validation results
    if (errors.email || errors.password) {
      setForm((prevForm: any) => ({
        ...prevForm,
        errors,
      }));
      return false;
    }

    return true;
  };

  const handleAdminSignIn = async () => {
    const isValid = validateUserData();
    if (!isValid) return;

    try {
      setIsSubmitting(true);
      console.log(form);
      // const result = await adminSignIn(form);
      // if (result.status === RESULT.error) return alert("Something Failed");

      // if (result.status === RESULT.data) {
      router.replace(adminRoutes.DASHBOARD.path);
      //   } else if (result.status === RESULT.success) {
      //    router.replace(adminRoutes.DASHBOARD.path);
      //   }
    } catch (error: Error | any) {
      alert(`Something went wrong: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <WrapperScreen>
      <Loading isLoading={isSubmitting} />
      
      <header className="mb-7 max-w-[500px]">
        <h1 className="text-4xl font-bold dark:text-white text-center mt-5 mb-5 font-robert-medium">
          Admin Sign In
        </h1>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Welcome to {Site.siteName} admin dashboard. This is where site admins
          will log in to manage your store. Customers will need to{" "}
          <Link href={"/sign-in"} className="underline text-blue-600">
            log in to the site instead
          </Link>{" "}
          to access their user account, order history, and more.
        </p>
      </header>

      {/* Form */}
      <section className="flex flex-col min-w-[300px] max-w-[500px] w-full gap-5">
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
        />

        <article className="px-1">
          <Link
            href={"/admin/forget-password"}
            className="underline text-sm text-gray-700 dark:text-gray-300"
            target="blank"
          >
            Forget Password?
          </Link>
        </article>

        <CustomButton
          className="h-14 w-full mt-7 mb-10"
          handlePress={handleAdminSignIn}
          title="Sign In"
          isLoading={isSubmitting}
        />
      </section>
    </WrapperScreen>
  );
};

export default AdminSignIn;
