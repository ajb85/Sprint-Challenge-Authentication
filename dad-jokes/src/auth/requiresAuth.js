import React from "react";
import { Redirect } from "react-router-dom";

export default Component => props => {
  const token = localStorage.getItem("token");

  return (
    <React.Fragment>
      {token ? <Component {...props} /> : <Redirect to="/login" />}
    </React.Fragment>
  );
};
