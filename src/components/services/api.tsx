import axios from "axios";
import { env } from "../../env";
import { getUserLocalStorage } from "../auth/context/AuthProvider/util";

const api = axios.create({
  baseURL: env.VITE_APP_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();

    config.headers.Authorization = `Bearer ${user?.token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
