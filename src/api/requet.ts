import axios from "axios";
import { message } from "antd";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL,
  timeout: 10 * 1000,
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.token = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      message.error(error.response.data);
      localStorage.setItem("redirectPathname", location.pathname);
      location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default request;
