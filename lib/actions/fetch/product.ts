import API_CONFIG, { ResponseDTO } from "@/lib/api";
import { GET_SINGLE_PRODUCT } from "@/lib/endpoints";
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

    console.log(result);
    return result;
  } catch (error) {
    handleError(error);
  }
};
