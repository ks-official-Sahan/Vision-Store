import { ResponseDTO, RESULT } from "@/lib/api";

/* Handle Response */
export const handleResponse = async (response: Response | any) => {
  try {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${await response.status}`, {
        cause: response,
      });
    }

    return await response.json();
  } catch (error) {
    throw error; // re-throw the error for error handling
  }
};

/* Handle Error */
export const handleError = (error: Error | any) => {
  console.error("Fetch error:", error);
  /* re-throw the error if needed */
  throw error;
};

/* Handle Result */
export const handleResult = (responseDto: ResponseDTO) => {
  if (!responseDto.status) {
    // if (responseDto.error) throw new Error(responseDto.error);
    // Alert.alert(responseDto.message);
    if (responseDto.target)
      return {
        status: RESULT.target,
        target: responseDto.target,
        message: responseDto.message,
      };
    if (responseDto.message)
      return {
        status: RESULT.message,
        message: responseDto.message,
      };
  }

  if (responseDto.data) {
    return { status: RESULT.data, data: responseDto.data };
  }

  if (responseDto.dataList) {
    return { status: RESULT.data, data: responseDto.dataList };
  }

  return { status: RESULT.success };
};
