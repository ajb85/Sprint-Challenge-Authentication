import React from "react";
import { Redirect } from "react-router-dom";

export default Component => () => {
  const token = localStorage.getItem("token");

  return (
    <React.Fragment>
      {token ? <Component {...this.props} /> : <Redirect to="/login" />}
    </React.Fragment>
  );
};
