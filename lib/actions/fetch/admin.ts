import React from "react";
import API_CONFIG, {
  getData,
  ResponseDTO,
  RESULT,
  ReturnData,
  saveData,
} from "@/lib/api";
import { ADMIN_VERIFICATION, CREATE_FIRST_USER } from "@/lib/endpoints";
import { useRouter } from "next/navigation";
import { handleError, handleResponse, handleResult } from "./main";
import { CreateFirstUserFormProps } from "@/app/(super)/admin/(auth)/create-first-user/page";
import { AdminSignInFormProps } from "@/app/(super)/admin/(auth)/sign-in/page";

/* eslint-disable react-hooks/rules-of-hooks */
export const GetCurrentAdmin = async () => {
  const router = useRouter();
  const admin = await getData("admin");
  if (admin) return admin;
  // return Alert.alert("Please Login");
  // return router.push("/sign-in");
  return router.replace("/admin");
};

/* Sign Up */
export const createFirstUser = async ({
  email,
  password,
  name,
  role,
  stripeCustomer,
}: CreateFirstUserFormProps): Promise<ReturnData> => {
  try {
    const response = await fetch(API_CONFIG.baseURL + CREATE_FIRST_USER, {
      method: "POST",
      body: JSON.stringify({ email, password, name, role, stripeCustomer }),
      headers: API_CONFIG.headers,
      credentials: "include",
    });

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    if (result.data) {
      await saveData("admin", result.data);
    }

    return result;
  } catch (error: Error | any) {
    handleError(error);
    return { status: RESULT.error, message: error.message };
  }
};

/* Sign In */
export const adminSignIn = async ({
  email,
  password,
}: AdminSignInFormProps): Promise<ReturnData> => {
  try {
    const response = await fetch(API_CONFIG.baseURL + CREATE_FIRST_USER, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: API_CONFIG.headers,
      credentials: "include",
    });

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    if (result.data) {
      await saveData("admin", result.data);
    }

    return result;
  } catch (error: Error | any) {
    handleError(error);
    return { status: RESULT.error, message: error.message };
  }
};

/* Verification */
export const verification = async ({ email, verification }: any) => {
  try {
    const response = await fetch(API_CONFIG.baseURL + ADMIN_VERIFICATION, {
      method: "POST",
      body: JSON.stringify({ email, verification }),
      headers: API_CONFIG.headers,
      credentials: "include",
    });

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    if (result.data) {
      await saveData("user", result.data);
    }

    return result;
  } catch (error) {
    handleError(error);
  }
};
