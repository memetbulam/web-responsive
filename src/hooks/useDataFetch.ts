import axios from "axios";
import { useState } from "react";

type Params = {
  method: "get" | "post" | "put" | "delete";
  url: string;
  payload?: {
    userName: string;
    password: string;
  };
};

const useDataFetch = ({ url, payload, method }: Params) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const action = () => {
    let response;
    try {
      setIsLoading(true);
      if (method === "get") {
        response = axios.get(url);
      }
      if (method === "post") {
        response = axios.post(url, payload);
      }
      setIsLoading(false);
      return response;
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error?.message);
    }
    return response;
  };

  return { action, isLoading, errorMessage };
};

export default useDataFetch;
