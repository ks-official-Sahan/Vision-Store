import API_CONFIG, { ResponseDTO } from "@/lib/api";
import {
  ADD_TO_CART,
  GET_ALL_CART,
  GET_SINGLE_PRODUCT,
  LOAD_ITEMS,
} from "@/lib/endpoints";
import { handleError, handleResponse, handleResult } from "./main";

export const getSingleProduct = async (pid: any) => {
  try {
    const response = await fetch(
      `${API_CONFIG.baseURL}${GET_SINGLE_PRODUCT}?pid=${pid}`,
      {
        method: "GET",
        headers: API_CONFIG.headers,
        credentials: "include",
      }
    );

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    if (result.data) {
      // console.log(JSON.stringify(result.data));
    }

    return result;
  } catch (error) {
    handleError(error);
  }
};

export const fetchItems = async (param?: any) => {
  try {
    const response = await fetch(
      `${API_CONFIG.baseURL}${LOAD_ITEMS}${param ? `?param=${param}` : ""}`,
      {
        method: "GET",
        headers: API_CONFIG.headers,
        credentials: "include",
      }
    );

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    if (result.data) {
      // console.log(JSON.stringify(result.data));
      console.log("Data Received");
    }

    // console.log(result);
    return result;
  } catch (error) {
    handleError(error);
  }
};

export const fetchCartItems = async (email?: any) => {
  try {
    const response = await fetch(
      `${API_CONFIG.baseURL}${GET_ALL_CART}${email ? `?email=${email}` : ""}`,
      {
        method: "GET",
        headers: API_CONFIG.headers,
        credentials: "include",
      }
    );

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    if (result.data) {
      //console.log(JSON.stringify(result.data));
      console.log("Data Received");
    }

    // console.log(result);
    return result;
  } catch (error) {
    handleError(error);
  }
};

export const addToCart = async (email?: any, pid?: any, qty: any = 1) => {
  try {
    const response = await fetch(
      `${API_CONFIG.baseURL}${ADD_TO_CART}${`?itemId=${pid}&qty=${qty}`}${
        email ? `&email=${email}` : ""
      }`,
      {
        method: "GET",
        headers: API_CONFIG.headers,
        credentials: "include",
      }
    );

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    if (result.data) {
      console.log(JSON.stringify(result.data));
      console.log("Data Received");
    }

    // console.log(result);
    return result;
  } catch (error) {
    handleError(error);
  }
};
