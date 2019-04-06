import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3300/api";

axios.interceptors.request.use(requestConfig => {
  const token = localStorage.getItem("token");
  requestConfig.headers.authorization = token;
  return requestConfig;
});

export default Component => () => {
  const token = localStorage.getItem("token");

  return (
    <React.Fragment>
      {token ? <Component {...this.props} /> : <Redirect to="/login" />}
    </React.Fragment>
  );
};
