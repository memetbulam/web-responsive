import axios from "axios";
import { urls } from "./urls";

axios.interceptors.request.use(function (config) {
  return config;
});

export const login = async ({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) => {
  return await axios.post(urls.login, {
    userName,
    password,
  });
};
