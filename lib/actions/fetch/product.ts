import API_CONFIG, { ResponseDTO } from "@/lib/api";
import {
  ADD_TO_CART,
  GET_ADDRESS,
  GET_ALL_CART,
  GET_CITIES,
  GET_SINGLE_PRODUCT,
  LOAD_CATEGORIES,
  LOAD_ITEMS,
  PROCESS_CHECKOUT,
  PROCESS_TO_CHECKOUT,
  SEARCH_ITEMS,
} from "@/lib/endpoints";
import { handleError, handleResponse, handleResult } from "./main";
import { CheckoutFormProps } from "@/app/(user)/(home)/checkout/page";

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

export const fetchCategory = async (param?: any) => {
  try {
    const response = await fetch(
      `${API_CONFIG.baseURL}${LOAD_CATEGORIES}${
        param ? `?param=${param}` : ""
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
      // console.log(JSON.stringify(result.data));
      console.log("Data Received");
    }

    // console.log(result);
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

export const fetchSearchItems = async ({
  searchText,
  sortText,
  categoryName,
  priceRangeStart,
  priceRangeEnd,
}: {
  searchText?: any;
  sortText?: any;
  categoryName?: any;
  priceRangeStart?: any;
  priceRangeEnd?: any;
}) => {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}${SEARCH_ITEMS}`, {
      method: "POST",
      body: JSON.stringify({
        searchText,
        sortText,
        categoryName,
        priceRangeStart,
        priceRangeEnd,
      }),
      headers: API_CONFIG.headers,
      credentials: "include",
    });

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

export const fetchAddress = async (email?: any) => {
  try {
    const response = await fetch(
      `${API_CONFIG.baseURL}${GET_ADDRESS}${email ? `?email=${email}` : ""}`,
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

export const fetchCities = async () => {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}${GET_CITIES}`, {
      method: "GET",
      headers: API_CONFIG.headers,
      credentials: "include",
    });
    
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

export const processToCheckout = async ({
  email,
  cartItems,
}: {
  email?: any;
  cartItems?: any;
}) => {
  try {
    const response = await fetch(
      `${API_CONFIG.baseURL}${PROCESS_TO_CHECKOUT}`,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          cartItems,
        }),
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

export const processCheckout = async ({
  email,
  cityId,
  isCurrentAddress,
  firstName,
  lastName,
  line1,
  line2,
  mobileNumber,
  postalCode,
}: CheckoutFormProps) => {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}${PROCESS_CHECKOUT}`, {
      method: "POST",
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        cityId,
        isCurrentAddress,
        line1,
        line2,
        mobileNumber,
        postalCode,
      }),
      headers: API_CONFIG.headers,
      credentials: "include",
    });
    
    const responseDto: ResponseDTO = await handleResponse(response);
    
    const result = handleResult(responseDto);
    
    if (result.data) {
      console.log(JSON.stringify(result.data));
      console.log("Data Received");
    }
    
    console.log(result);
    return result;
  } catch (error) {
    handleError(error);
  }
};

export const addToCart = async ({
  email,
  pid,
  qty = 1,
}: {
  email?: any;
  pid?: any;
  qty?: any;
}) => {
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