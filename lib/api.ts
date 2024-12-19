export const APP_NAME = "VisionStore";
export const API_URL = "vision-store-api";
// export const SERVER_URL = "https://4c8f-2402-d000-8128-1de-69c9-2c17-c4b7-aa1f.ngrok-free.app/";
export const SERVER_URL = "http://localhost:8080";

const API_CONFIG = {
  baseURL: `${SERVER_URL}/${API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
};

export default API_CONFIG;

// export const IMAGE_PATH = `${API_CONFIG.baseURL}/product-images/`;
export const IMAGE_PATH = `/`;

export const CURRENCY = "LKR";
export const RATE = 10;

interface ResponseDTO {
  status?: boolean;
  message?: string;
  data?: any;
  url?: string;
  dataList?: Array<any>;
  code?: string;
  target?: string;
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
