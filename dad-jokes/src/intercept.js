import axios from "axios";

axios.defaults.baseURL = "http://localhost:3300/api";

axios.interceptors.request.use(requestConfig => {
  const token = localStorage.getItem("token");
  requestConfig.headers.authorization = token;
  return requestConfig;
});
