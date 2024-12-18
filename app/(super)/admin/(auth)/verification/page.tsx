"use client";

import InputField from "@/components/main/InputField";
import CustomButton from "@/components/main/CustomButton";
import WrapperScreen from "@/components/wrapper/WrapperScreen";
import { Site, adminRoutes } from "@/data";
import {
  validateAvailability,
  validateEmail,
} from "@/lib/actions/validations/validate";
import { RESULT } from "@/lib/api";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Loading from "@/components/main/Loading";
import { verification } from "@/lib/actions/fetch/auth";
import { InputFieldOTP } from "@/components/main/VerificationField";
import ErrorComponent from "@/components/main/ErrorComponent";

export type VerificationFormProps = {
  email: string | null;
  verification: string;
  errors?: any | object;
};

const Verification = () => {
  // let { email }: { email: string } = useParams();
  // email = email.replace("%40", "@");
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  // console.log(email);

  const router = useRouter();

  const [form, setForm] = useState<VerificationFormProps>({
    email: email,
    verification: "",
    errors: {
      email: null,
      verification: null,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const validateInputData = () => {
    // Validation of required data
    const errors = {
      email: validateEmail(form.email as string),
      verification: validateAvailability(
        form.verification,
        "Verification Code"
      ),
    };

    // Update validation results
    if (errors.verification) {
      setForm((prevForm: any) => ({
        ...prevForm,
        errors,
      }));
      console.log(form);
      return false;
    }

    if (errors.email) {
      alert("Couldn't find the email. Please try again");
      setForm((prevForm: any) => ({
        ...prevForm,
        errors,
      }));
      return false;
    }

    return true;
  };

  const handleVerification = async () => {
    setErrorMessage("");

    const isValid = validateInputData();
    if (!isValid) return;

    try {
      setIsSubmitting(true);
      // console.log(form);

      const result = await verification(form);

      if (result?.status === RESULT.error)
        return setErrorMessage("Something Failed");

      if (result?.status === RESULT.message) {
        if (result.message === "already verified") {
          alert("User has been already verified");
          router.push(adminRoutes.SIGN_IN.path);
          return;
        }

        return setErrorMessage(result.message);
      }

      if (result?.status === RESULT.data)
        router.replace(adminRoutes.DASHBOARD.path);
      if (result?.status === RESULT.success) router.back();
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
          {adminRoutes.VERIFICATION.title}
        </h1>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Welcome to{" "}
          <Link
            href={adminRoutes.DASHBOARD.path}
            className="underline text-blue-600 font-bold"
          >
            {Site.siteName}
          </Link>{" "}
          admin verification. This is where site admin will verify their
          account.
        </p>
      </header>

      {/* Form */}
      <section className="flex flex-col min-w-[300px] max-w-[500px] w-full gap-7 mt-5">
        <InputFieldOTP
          onChange={(value) => {
            setForm({
              ...form,
              verification: value,
              errors: { ...form.errors, verification: null },
            });
          }}
          required
          error={form.errors.verification}
        />

        {(email === "" || !email) && (
          <InputField
            title="Email Address"
            value={form.email as string}
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
        )}

        <ErrorComponent
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />

        <CustomButton
          className="h-14 w-full mt-7 mb-3"
          handlePress={handleVerification}
          title={adminRoutes.VERIFICATION.subtitle}
          isLoading={isSubmitting}
        />

        <p className="text-sm w-full text-center">
          Already verified?{" "}
          <Link
            className="underline text-blue-500 font-bold"
            href={adminRoutes.SIGN_IN.path}
          >
            {adminRoutes.SIGN_IN.title}
          </Link>
        </p>
        {/* <CustomButton
          variant="shadow"
          className="h-12 w-full mb-10 bg-blue-700 hover:bg-blue-500"
          handlePress={() => router.push(adminRoutes.SIGN_UP.path)}
          title="Sign Up"
          isLoading={isSubmitting}
        /> */}
      </section>
    </WrapperScreen>
  );
};

export default Verification;
