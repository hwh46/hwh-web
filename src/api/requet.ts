import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL,
  timeout: 10 * 1000,
});

export default request;
