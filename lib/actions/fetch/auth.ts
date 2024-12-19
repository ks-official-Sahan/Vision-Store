import API_CONFIG, {
  getData,
  removeData,
  ResponseDTO,
  RESULT,
  saveData,
} from "../../api";
import { handleError, handleResponse, handleResult } from "./main";
import { SIGN_IN, SIGN_OUT, SIGN_UP, VERIFICATION } from "@/lib/endpoints";
import { useRouter } from "next/navigation";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
export const GetCurrentUser = async () => {
  const router = useRouter();
  const user = await getData();
  if (user) return user;
  // return alert("Please Login");
  // return router.push("/sign-in");
  return router.replace("/");
};

export const isUserAvailable = async (returnData?: boolean) => {
  const user = await getData();
  // console.log(returnData);
  // console.log(user);
  if (user) {
    if (returnData) return user;
    return true;
  }
  return false;
};

export const signout = async ({ email }: { email?: string }) => {
  try {
    // const response = await fetch(API_CONFIG.baseURL + SIGN_OUT, {
    //   method: "POST",
    //   body: JSON.stringify({ email }),
    //   headers: API_CONFIG.headers,
    //   credentials: "include",
    // });
    //
    // const responseDto: ResponseDTO = await handleResponse(response);
    // const result = handleResult(responseDto);
    //
    // if (result.data) {
    //   console.log("Data Saved");
    //   await saveData("user", result.data);
    // }
    // return result;
    await removeData();
    return { status: RESULT.success };
  } catch (error) {
    handleError(error);
  }
};

/* Sign Up */
export const signup = async ({ name, email, password }: any) => {
  try {
    const response = await fetch(API_CONFIG.baseURL + SIGN_UP, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
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

export const signin = async ({ email, password }: any) => {
  try {
    const response = await fetch(API_CONFIG.baseURL + SIGN_IN, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: API_CONFIG.headers,
      credentials: "include",
    });

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    if (result.data) {
      console.log("Data Saved");
      await saveData("user", result.data);
    }

    return result;
  } catch (error) {
    handleError(error);
  }
};

export const verification = async ({ email, verification }: any) => {
  try {
    const response = await fetch(API_CONFIG.baseURL + VERIFICATION, {
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
