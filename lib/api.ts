export const APP_NAME = "VisionStore";
export const SERVER_URL = "https://9e7d-45-121-91-37.ngrok-free.app";

const API_CONFIG = {
  baseURL: `${SERVER_URL}/${APP_NAME}`,
  headers: {
    "Content-Type": "application/json",
  },
};

export default API_CONFIG;

interface ResponseDTO {
  success?: boolean;
  target?: string;
  message?: string;
  data?: any;
  error?: any;
}

export type { ResponseDTO };

export enum RESULT {
  success = "success",
  data = "data",
  target = "target",
  message = "message",
  error = "error",
}

export type ReturnData = {
  status: RESULT;
  data?: any;
  target?: string | undefined;
  message?: string | undefined;
};

/* 
 Handle data Data Storage
*/

export type KEYS = "user" | "admin" | "session";

export const saveData = async (key: KEYS = "user", data: any) => {
  try {
    await localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (key: KEYS = "user") => {
  try {
    const data = await localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeData = async (key: KEYS = "user") => {
  try {
    await localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
