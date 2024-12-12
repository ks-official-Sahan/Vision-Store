import API_CONFIG, { getData, ResponseDTO, RESULT, saveData } from "../../api";
import { handleError, handleResponse, handleResult } from "./main";
import { SIGN_IN, SIGN_UP } from "@/lib/endpoints";
import { useRouter } from "next/navigation";

/* eslint-disable @typescript-eslint/no-explicit-any */

export const getCurrentUser = async () => {
  const router = useRouter();
  const user = await getData();
  if (user) return user;
  // return alert("Please Login");
  // return router.push("/sign-in");
  return router.replace("/");
};

/* Sign Up */
export const signup = async ({ username, email, password }: any) => {
  try {
    const response = await fetch(API_CONFIG.baseURL + SIGN_UP, {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: API_CONFIG.headers,
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

export const signin = async ({ email, password }: any) => {
  try {
    const response = await fetch(API_CONFIG.baseURL + SIGN_IN, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: API_CONFIG.headers,
    });

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    await saveData("user", result.data);

    return result;
  } catch (error) {
    handleError(error);
  }
};

/*
  * Exact Same Thing

    // if (!responseDto.success) {
    //   Alert.alert(responseDto.message);
    //   return { status: RESULT.message, target: responseDto.target };
    // }

    // const user = responseDto.data;

    // await saveUser(user);
    // return { status: RESULT.data };

    ||

    const result = handleResult(responseDto);

    await saveData("user", result.data);

    return result;
*/