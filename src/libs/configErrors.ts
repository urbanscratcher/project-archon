export enum ErrorCode {
  // 네트워크 에러
  NETWORK_ERROR = "NETWORK_ERROR",

  // API 에러
  API_400_BAD_REQUEST = "API_400_BAD_REQUEST",
  API_401_UNAUTHORIZED = "API_401_UNAUTHORIZED",
  API_403_FORBIDDEN = "API_403_FORBIDDEN",
  API_404_NOT_FOUND = "API_404_NOT_FOUND",
  API_429_TOO_MANY_REQUESTS = "API_429_TOO_MANY_REQUESTS",
  API_500_INTERNAL_SERVER_ERROR = "API_500_INTERNAL_SERVER_ERROR",

  // 클라이언트 에러
  CLIENT_RENDER_ERROR = "CLIENT_RENDER_ERROR",
  CLIENT_RUNTIME_ERROR = "CLIENT_RUNTIME_ERROR",
}

export const ErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.NETWORK_ERROR]:
    "A network error occurred. Please check your connection and try again.",

  [ErrorCode.API_400_BAD_REQUEST]:
    "Bad request. Please check the input and try again.",
  [ErrorCode.API_401_UNAUTHORIZED]:
    "Unauthorized access. Please log in and try again.",
  [ErrorCode.API_403_FORBIDDEN]:
    "Forbidden access. You do not have permission to view this resource.",
  [ErrorCode.API_404_NOT_FOUND]:
    "Resource not found. Please check the URL and try again.",
  [ErrorCode.API_429_TOO_MANY_REQUESTS]:
    "Too many requests. Please wait a moment and try again.",
  [ErrorCode.API_500_INTERNAL_SERVER_ERROR]:
    "Internal server error. Please try again later.",

  [ErrorCode.CLIENT_RENDER_ERROR]:
    "An error occurred while rendering the page.",
  [ErrorCode.CLIENT_RUNTIME_ERROR]:
    "A runtime error occurred. Please try again.",
};

export const handleError = (error: any): ErrorCode => {
  if (error.response) {
    // 서버 응답 에러
    switch (error.response.status) {
      case 400:
        return ErrorCode.API_400_BAD_REQUEST;
      case 401:
        return ErrorCode.API_401_UNAUTHORIZED;
      case 403:
        return ErrorCode.API_403_FORBIDDEN;
      case 404:
        return ErrorCode.API_404_NOT_FOUND;
      case 429:
        return ErrorCode.API_429_TOO_MANY_REQUESTS;
      case 500:
      default:
        return ErrorCode.API_500_INTERNAL_SERVER_ERROR;
    }
  } else if (error.request) {
    // 네트워크 에러
    return ErrorCode.NETWORK_ERROR;
  } else {
    // 클라이언트 에러
    return ErrorCode.CLIENT_RUNTIME_ERROR;
  }
};
