"use client";

import InputField from "@/components/main/InputField";
import SelectField from "@/components/main/SelectField";
import CustomButton from "@/components/main/CustomButton";
import WrapperScreen from "@/components/wrapper/WrapperScreen";
import { adminRoutes, Roles } from "@/data";
import { createFirstUser } from "@/lib/actions/fetch/admin";
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
import ErrorComponent from "@/components/main/ErrorComponent";

export type CreateFirstUserFormProps = {
  email: string;
  password: string;
  cpassword?: string;
  name: string;
  stripeCustomer?: string;
  role?: string;
  errors?: any | object;
};

const CreateFirstUser = () => {
  const router = useRouter();

  const [form, setForm] = useState<CreateFirstUserFormProps>({
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
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateUserData = () => {
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

  const handleCreateFirstUser = async () => {
    const isValid = validateUserData();
    if (!isValid) return;

    try {
      setIsSubmitting(true);
      // console.log(form);

      const result = await createFirstUser(form);
      if (result.status === RESULT.error)
        return setErrorMessage("Something Failed");
      if (result?.status === RESULT.message)
        return setErrorMessage(result?.message);

      if (result.status === RESULT.data) {
        router.replace(adminRoutes.DASHBOARD.path);
      } else if (result.status === RESULT.success) {
        router.replace(adminRoutes.DASHBOARD.path);
      }
    } catch (error: Error | any) {
      alert(`Something went wrong: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <WrapperScreen>
      <Loading isLoading={isSubmitting} />

      <header className="mb-7">
        <h1 className="text-4xl font-bold text-center mt-5 mb-5 font-robert-medium dark:text-white">
          Welcome
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
          To begin, create your first user.
        </p>
      </header>

      {/* Form */}
      <section className="flex flex-col min-w-[300px] max-w-[500px] w-full gap-5">
        <ErrorComponent
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
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
        />
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

        <CustomButton
          textStyle="text-black/75 dark:text-white"
          className="h-14 w-full mt-7 mb-10"
          handlePress={handleCreateFirstUser}
          title="Create"
          isLoading={isSubmitting}
        />
      </section>
    </WrapperScreen>
  );
};

export default CreateFirstUser;
