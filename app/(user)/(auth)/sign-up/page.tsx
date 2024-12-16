"use client";

import InputField from "@/components/main/InputField";
import CustomButton from "@/components/main/CustomButton";
import WrapperScreen from "@/components/wrapper/WrapperScreen";
import { Site, routes } from "@/data";
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
import { signup } from "@/lib/actions/fetch/auth";
import ErrorComponent from "@/components/main/ErrorComponent";

export type SignUpFormProps = {
  email: string;
  password: string;
  cpassword?: string;
  name: string;
  errors?: any | object;
};

const SignUp = () => {
  const router = useRouter();

  const [form, setForm] = useState<SignUpFormProps>({
    email: "",
    password: "",
    name: "",
    cpassword: "",
    errors: {
      email: null,
      password: null,
      cpassword: null,
      name: null,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

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

  const handleSignUp = async () => {
    const isValid = validateUserData();
    if (!isValid) return;

    try {
      setIsSubmitting(true);
      // console.log(form);

      const result = await signup(form);

      if (result?.status === RESULT.error)
        return setErrorMessage("Something Failed");
      if (result?.status === RESULT.message)
        return setErrorMessage(result.message);

      if (result?.status === RESULT.data) {
        router.replace(routes.HOME.path);
      } else if (result?.status === RESULT.success) {
        router.replace(`${routes.VERIFICATION.path}?email=${form.email}`);
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

      <header className="mb-7 max-w-[500px]">
        <h1 className="text-4xl font-bold dark:text-white text-center mt-5 mb-5 font-robert-medium">
          {routes.SIGN_UP.title}
        </h1>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Welcome to{" "}
          <Link
            href={routes.HOME.path}
            className="underline text-blue-600 font-bold"
          >
            {Site.siteName}
          </Link>{" "}
          customer sign in. This is where site customers will sign up to access
          their user account and more.
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

        <article className="px-1">
          <Link
            href={routes.FORGET_PASSWORD.path}
            className="underline text-sm text-gray-700 dark:text-gray-300"
            target="blank"
          >
            Forget Password?
          </Link>
        </article>

        <ErrorComponent
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />

        <CustomButton
          className="h-14 w-full mt-7 mb-3"
          handlePress={handleSignUp}
          title={routes.SIGN_UP.title}
          isLoading={isSubmitting}
        />

        <p className="text-sm w-full text-center">
          Already have an Account?{" "}
          <Link
            className="underline text-blue-500 font-bold"
            href={routes.SIGN_IN.path}
          >
            {routes.SIGN_IN.title}
          </Link>
        </p>
      </section>
    </WrapperScreen>
  );
};

export default SignUp;
